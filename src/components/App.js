import React, { Component } from "react";
import Loadable from "react-loadable";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
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

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DivBody>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </DivBody>
      </div>
    );
  }
}

export default App;
