import React, { Component } from "react";
import Loadable from "react-loadable";
import { Route, Switch } from "react-router-dom";
import { StyledSpinner, DivBody } from "../styles/styled-utils";
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
  loader: () => import('./Userpage'),
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component id={props.match.params.id} />;
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/username=:id" component={Userpage} />
        </Switch>
      </div>
    );
  }
}

export default App;
