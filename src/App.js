import React, { Component } from "react";
import "./App.css";
import RouterApp from "./Router";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLogin: false,
    };
  }
  componentDidMount() {
    let account = localStorage.getItem("account");
    account
      ? this.setState({ IsLogin: true })
      : this.setState({ IsLogin: false });
  }
  render() {
    const BtnLogin = this.state.IsLogin ? (
      <Link to="/">Account</Link>
    ) : (
      <Link to="/login">Login</Link>
    );
    return (
      <Router>
        <div>
          <div className="navbar navbar-inverse ">
            <NavLink className="navbar-brand" to="/">
              Home
            </NavLink>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/ban-ve">Ban ve</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right des">
              <li>{BtnLogin}</li>
            </ul>
          </div>
        </div>
        {/*router*/}
        <RouterApp></RouterApp>
      </Router>
    );
  }
}

export default App;
