import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Banve from "./Components/Ban-ve";
import FillInformation from "./Components/Components-banve/FillInformation";
import SelectTickets from "./Components/Components-banve/SelectTickets";
import CheckOut from "./Components/Components-banve/CheckOut";
import login from "./Components/Component-Login/login";
import account from "./Components/Component-Login/account";
import EditTickets from "./Components/Edit-tickets";
import EditUsers from "./Components/Edit-users";
import EditAccount from "./Components/Components-EditUser/Edit-Account";

export class RouterApp extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/buy-ticket" component={Banve}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route
            path="/fill-in-the-information"
            component={FillInformation}
          ></Route>
          <Route path="/select-ticket" component={SelectTickets}></Route>
          <Route path="/check-out" component={CheckOut}></Route>
          <Route path="/login" component={login}></Route>
          <Route path="/edit-tickets" component={EditTickets}></Route>
          <Route path="/edit-users" component={EditUsers}></Route>
          <Route path="/account" component={account}></Route>
          <Route path="/edit-account" component={EditAccount}></Route>
        </Switch>
      </div>
    );
  }
}

export default RouterApp;
