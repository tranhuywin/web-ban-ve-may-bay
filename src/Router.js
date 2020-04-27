import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Banve from "./Components/Ban-ve";
import Muave from "./Components/Mua-ve";
import FillInformation from "./Components/Components-banve/FillInformation";
import SelectTickets from "./Components/Components-banve/SelectTickets";
export class RouterApp extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/ban-ve" component={Banve}></Route>
          <Route path="/mua-ve" component={Muave}></Route>
          <Route path="/" exact component={Home}></Route>

          <Route
            path="/fill-in-the-information"
            component={FillInformation}
          ></Route>
          <Route path="/select-ticket" component={SelectTickets}></Route>
        </Switch>
      </div>
    );
  }
}

export default RouterApp;
