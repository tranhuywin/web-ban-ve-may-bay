import React, { Component } from "react";
import "./../../css/login.scss";
import $ from "jquery";
import { Redirect } from "react-router-dom";

export class login extends Component {
  constructor(props) {
    super(props);
  }
  OnChangeStateLogin = () =>{
    localStorage.setItem("account",JSON.stringify({user: "admin", password: "admin"}));
    window.location.reload();
    return <Redirect to="/ban-ve"></Redirect>
  }
  componentDidMount() {
    $(".form-login")
      .find("input, textarea")
      .on("keyup blur focus", function (e) {
        var $this = $(this),
          label = $this.prev("label");
        if (e.type === "keyup") {
          if ($this.val() === "") {
            label.removeClass("active highlight");
          } else {
            label.addClass("active highlight");
          }
        } else if (e.type === "blur") {
          if ($this.val() === "") {
            label.removeClass("active highlight");
          } else {
            label.removeClass("highlight");
          }
        } else if (e.type === "focus") {
          if ($this.val() === "") {
            label.removeClass("highlight");
          } else if ($this.val() !== "") {
            label.addClass("highlight");
          }
        }
      });

    $(".tab a").on("click", function (e) {
      e.preventDefault();
      $(this).parent().addClass("active");
      $(this).parent().siblings().removeClass("active");
      $(".tab-content > div").not($(this).attr("href")).hide();

      $($(this).attr("href")).fadeIn(600);
    });
  }
  render() {
    if(localStorage.getItem("account")){
      return <Redirect to="/ban-ve"></Redirect>
    }
    return (
      <div>
        <div className="form-login">
          <ul className="tab-group">
            <li className="tab active">
              <a href="#signup">Sign Up</a>
            </li>
            <li className="tab ">
              <a href="#login">Log In</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="signup">
              <h1 className="title-login">Sign Up for Free</h1>
              <form action="/" method="post">
                <div className="top-row">
                  <div className="field-wrap">
                    <label className="label-login">
                      First Name<span className="req">*</span>
                    </label>
                    <input
                      className="input-login"
                      type="text"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="field-wrap">
                    <label className="label-login">
                      Last Name<span className="req">*</span>
                    </label>
                    <input
                      className="input-login"
                      type="text"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="field-wrap">
                  <label className="label-login">
                    Email Address<span className="req">*</span>
                  </label>
                  <input
                    className="input-login"
                    type="email"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="field-wrap">
                  <label className="label-login">
                    Set A Password<span className="req">*</span>
                  </label>
                  <input
                    className="input-login"
                    type="password"
                    required
                    autoComplete="off"
                  />
                </div>
                <button type="submit" className="button button-block">
                  Get Started
                </button>
              </form>
            </div>
            {
              // sign up
            }
            <div id="login">
              <h1 className="title-login">Welcome Back!</h1>
              <form>
                <div className="field-wrap">
                  <label className="label-login">
                    Email Address<span className="req">*</span>
                  </label>
                  <input
                    className="input-login"
                    type="email"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="field-wrap">
                  <label className="label-login">
                    Password<span className="req">*</span>
                  </label>
                  <input
                    className="input-login"
                    type="password"
                    required
                    autoComplete="off"
                  />
                </div>
                <p className="forgot">
                  <a href="/">Forgot Password?</a>
                </p>
                <button
                  onClick={this.OnChangeStateLogin}
                  className="button button-block"
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
          {/* tab-content */}
        </div>{" "}
        {/* /form */}
      </div>
    );
  }
}

export default login;
