import React, { Component } from "react";
import "./../../css/account.css";

export class account extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
          {/* LEFT-CONTAINER */}
          <div className="left-container container">
            <div className="menu-box block">
              {" "}
              {/* MENU BOX (LEFT-CONTAINER) */}
              <h2 className="titular">MENU BOX</h2>
              <ul className="menu-box-menu">
                <li>
                  <a className="menu-box-tab" href="#6">
                    <span className="icon fas fa-star-of-david  scnd-font-color"/>
                    Points<div className="menu-box-number">10,000</div>
                  </a>
                </li>
                <li>
                  <a className="menu-box-tab" href="#8">
                    <span className="icon entypo-paper-plane scnd-font-color" />
                    Rank<div className="menu-box-number">Diamond</div>
                  </a>
                </li>
                <li>
                  <a className="menu-box-tab" href="#10">
                    <span className="icon entypo-calendar scnd-font-color" />
                    Points to next rank
                    <div className="menu-box-number">200</div>
                  </a>
                </li>
                <li>
                  <a className="menu-box-tab" href="/edit-account">
                    <span className="icon fas fa-user-edit scnd-font-color" />
                    Edit my account
                    <div className="menu-box-number">Go</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* MIDDLE-CONTAINER */}
          <div className="middle-container container">
            <div className="profile block">
              {" "}
              {/* PROFILE (MIDDLE-CONTAINER) */}
              <div className="profile-picture big-profile-picture clear">
                <img
                  width="150px"
                  alt="picture admin"
                  src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p960x960/46144263_2395419153819891_3364316473584517120_o.jpg?_nc_cat=108&_nc_sid=7aed08&_nc_oc=AQlO9rd30XqahOucEoPb9loLaMhUVbxNH2sgU4fEy1Yzsz4e9QlPgFF6j6ZqTrQ7X4DspD1XLcWuk7o1suRHXeVq&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=2bfb17d72bfd33f69244d0c95aed4305&oe=5ED73118"
                />
              </div>
              <h1 className="user-name">Admin</h1>
            </div>
          </div>
          <div className="middle-container container">
            <div className="menu-box block">
              <ul className="menu-box-menu">
                <li>
                  <div
                    className="menu-box-tab dropdown-toggle"
                    href="#"
                    data-toggle="collapse"
                    data-target="#discount"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon fas fa-tags scnd-font-color" />
                    Discount
                    <div className="menu-box-number">Show</div>
                    <ul className="dropdown-menu menu-box-menu" id="discount">
                      <li className="li-code">
                        <span className="code">Code: ABCDEF</span> -5%
                        <span className="time-expired">
                          time expired: 5 days
                        </span>
                      </li>
                      <li className="li-code">
                        <span className="code">Code: 123456</span> -100,000 VND
                        <span className="time-expired">
                          time expired: 30 days
                        </span>
                      </li>
                      <li className="li-code">
                        <span className="code">Code: ABC123</span> -150,000 VND
                        <span className="time-expired">
                          time expired: 15 days
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* end right-container */}
        </div>
        {/* end main-container */}
      </div>
    );
  }
}

export default account;
