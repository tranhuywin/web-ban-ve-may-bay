import React, { Component } from "react";
import "./App.css";
import RouterApp from "./Router";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
export class App extends Component {
  render() {
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
              <li>
                <Link to="/login">Login</Link>
              </li>

              
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
