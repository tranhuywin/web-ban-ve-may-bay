import React, { Component } from "react";
import $ from "jquery";

export class EditAccount extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <div class="row">
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      </div>
        <div class="form-login" id="form-login">
          <div>
            <div id="signup">
              <h1 className="title-login ">Edit Account</h1>
              <form action="/account">
                <div className="top-row">
                  <div className="field-wrap">
                    <label className="label-login active highlight">First Name</label>
                    <input
                      className="input-login"
                      type="text"
                      autoComplete="off"
                      value = {JSON.parse(localStorage.getItem('account')).user}
                    />
                  </div>
                  <div className="field-wrap">
                    <label className="label-login active highlight">Last Name</label>
                    <input
                      className="input-login"
                      type="text"
                      autoComplete="off"
                      value = {JSON.parse(localStorage.getItem('account')).password}
                    />
                  </div>
                </div>
                <div className="field-wrap">
                  <label className="label-login active highlight">Email Address</label>
                  <input
                    className="input-login"
                    type="text"
                    autoComplete="off"
                    value = {JSON.parse(localStorage.getItem('account')).user}
                  />
                </div>
                <div className="field-wrap">
                  <label className="label-login active highlight">Set A Password</label>
                  <input
                    className="input-login"
                    type="password"
                    autoComplete="off"
                    value = {JSON.parse(localStorage.getItem('account')).password}
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
