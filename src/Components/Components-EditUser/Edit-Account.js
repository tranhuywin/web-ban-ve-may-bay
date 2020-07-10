import React, { Component } from "react";
import $ from "jquery";

export class EditAccount extends Component {
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
    return (
      <div class="row">
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      </div>
        <div class="form-login" id="form-login">
          <div>
            <div id="signup">
              <h1 className="title-login">Edit Account</h1>
              <form action="/account">
                <div className="top-row">
                  <div className="field-wrap">
                    <label className="label-login">First Name</label>
                    <input
                      className="input-login"
                      type="text"
                      autoComplete="off"
                      
                    />
                  </div>
                  <div className="field-wrap">
                    <label className="label-login">Last Name</label>
                    <input
                      className="input-login"
                      type="text"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="field-wrap">
                  <label className="label-login">Email Address</label>
                  <input
                    className="input-login"
                    type="email"
                    autoComplete="off"
                  />
                </div>
                <div className="field-wrap">
                  <label className="label-login">Set A Password</label>
                  <input
                    className="input-login"
                    type="password"
                    autoComplete="off"
                  />
                </div>
                <button type="submit" className="button button-block">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditAccount;
