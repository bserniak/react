import * as React from "react";
import * as ReactDOM from "react-dom";
import store from "./redux/store";
import {Provider} from "react-redux";
import Dashboard from "./components/Dashboard";

ReactDOM.render((
  <Provider store={store}>
    <Dashboard />
  </Provider>
), document.querySelector("#root"));
