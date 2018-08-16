import React, { Component } from "react";
import Loadable from "react-loadable";
import { Route, Switch } from "react-router-dom";
import { StyledSpinner, DivBody } from "../styles/styled-utils";
import { TransitionGroup, CSSTransition } from "react-transition-group";
function Loading() {
  return (
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
  );
}
const Home = Loadable({
  loader: () => import("./Home"),
  loading: Loading
});

const Userpage = Loadable({
  loader: () => import("./Userpage"),
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component id={props.match.params.id} />;
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key}  classNames="fade" timeout={300}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/username=:id" component={Userpage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
