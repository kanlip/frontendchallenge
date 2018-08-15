import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
