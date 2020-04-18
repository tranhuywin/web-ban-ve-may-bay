import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home";
import Banve from "./Components/Ban-ve";
import Muave from "./Components/Mua-ve";
import Basic from "./Components/Components-muave/kindOfTicket/Basic";
import Regular from "./Components/Components-muave/kindOfTicket/Regular";
import Premium from "./Components/Components-muave/kindOfTicket/Premium";
import Vip from "./Components/Components-muave/kindOfTicket/Vip";
import FillInformation from "./Components/Components-banve/FillInformation"

export class RouterApp extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/ban-ve">
            <Banve></Banve>
          </Route>
          <Route path="/mua-ve">
            <Muave></Muave>
          </Route>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/SeatNumber-bacsic">
            <Basic></Basic>
          </Route>
          <Route path="/SeatNumber-regular">
            <Regular></Regular>
          </Route>
          <Route path="/SeatNumber-premium">
            <Premium></Premium>
          </Route>
          <Route path="/SeatNumber-vip">
            <Vip></Vip>
          </Route>
          <Route path="/Fill-in-the-information">
          <FillInformation></FillInformation>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default RouterApp;
