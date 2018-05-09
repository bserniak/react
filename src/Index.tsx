import * as React from "react";
import * as ReactDOM from "react-dom";
import store from "./redux/store";
import {Provider} from "react-redux";
import DashboardBase from "./Dashboard";

ReactDOM.render((
  <Provider store={store}>
    <DashboardBase />
</Provider>
), document.querySelector("#root"));
