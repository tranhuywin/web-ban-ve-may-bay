import React, { Component } from "react";
import $ from "jquery";
import "../../css/FillInformation.css";

export class FillInformation extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('#CB-email').click(function(){
        if($('#CB-email').prop("checked")){
          $('#CB-sms').prop("checked",false);
          $('#CB-call').prop("checked",false);
        }
      })
      $('#CB-sms').click(function(){
        if($('#CB-sms').prop("checked")){
          $('#CB-email').prop("checked",false);
          $('#CB-call').prop("checked",false);
        }
      })
      $('#CB-call').click(function(){
        if($('#CB-call').prop("checked")){
          $('#CB-email').prop("checked",false);
          $('#CB-sms').prop("checked",false);
        }
      })
    })
  }
  render() {
    return (
      <div>
        <form className="form-address" id="address">
          <div className="container mt-5 mb-5 panel panel-primary">
            <div className="row mt-5 mb-5 panel-heading">
              <h4 className="col">Reseller information</h4>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="form-group col-12 col-md-6">
                  <label>First name</label>
                  <small className="text-muted float-right">*Required</small>
                  <input
                    className="form-control"
                    placeholder="Enter first name"
                  />
                </div>
                <div className="form-group col-12 col-md-6">
                  <label>Last name</label>
                  <small className="text-muted float-right">*Required</small>
                  <input
                    className="form-control"
                    placeholder="Enter last name"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 col-md-6 has-warning">
                  <label>Email address</label>
                  <small className="text-muted float-right">*Required</small>
                  <input
                    className="form-control form-control-warning"
                    placeholder="Enter email address"
                    type="email"
                  />
                </div>
                <div className="form-group col-12 col-md-6">
                  <label>Mobile number</label>
                  <small className="text-muted float-right">*Required</small>
                  <input
                    className="form-control"
                    placeholder="0404 000 000"
                    type="tel"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 col-md-6">
                  <label>Birthday</label>
                  <input
                    className="form-control"
                    max="2017-01-01"
                    min="1900-01-01"
                    placeholder="0404 000 000"
                    type="date"
                  />
                </div>
                <div className="form-group col-12 col-md-6" id="locationField">
                  <label>Contact address</label>
                  <input
                    className="form-control"
                    id="autocomplete"
                    placeholder="Enter contact address"
                  />
                </div>
              </div>
              <div className="row">
                <label className="col-12">Permission to contact</label>
                <div className="form-group col">
                  <label className="custom-checkbox">
                    Email
                    <input type="checkbox" id="CB-email"/>
                    <span className="custom-control-input"></span>
                  </label>
                  <label className="custom-checkbox">
                    SMS
                    <input type="checkbox" id="CB-sms"/>
                    <span className="custom-control-input"></span>
                  </label>
                  <label className="custom-checkbox">
                    Phone call
                    <input type="checkbox" id="CB-call"/>
                    <span className="custom-control-input"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FillInformation;
