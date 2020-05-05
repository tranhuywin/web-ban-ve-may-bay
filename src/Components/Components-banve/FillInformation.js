import React, { Component } from "react";
import $ from "jquery";
import "../../css/FillInformation.css";
import ComponentsFillInfo from "../Components-banve/ComponentsFillInfo";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";

export class FillInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infant: "0",
      child: "0",
      adult: "1",
    };
  }
  componentDidMount() {
    $(document).ready(function () {
      $("#CB-email").click(function () {
        if ($("#CB-email").prop("checked")) {
          $("#CB-sms").prop("checked", false);
          $("#CB-call").prop("checked", false);
        }
      });
      $("#CB-sms").click(function () {
        if ($("#CB-sms").prop("checked")) {
          $("#CB-email").prop("checked", false);
          $("#CB-call").prop("checked", false);
        }
      });
      $("#CB-call").click(function () {
        if ($("#CB-call").prop("checked")) {
          $("#CB-email").prop("checked", false);
          $("#CB-sms").prop("checked", false);
        }
      });
      $("#CB-Yes").click(function () {
        if ($("#CB-Yes").prop("checked")) {
          $("#CB-No").prop("checked", false);
        }
      });
      $("#CB-No").click(function () {
        if ($("#CB-No").prop("checked")) {
          $("#CB-Yes").prop("checked", false);
        }
      });
    });
  }
  render() {
    if (this.props.location.TicketSelect == null || this.props.location.noCustomer == null) {
      //alert("You haven't filled out the information")
      return <Redirect to="/ban-ve"></Redirect>;
    }
    if (this.props.location.noCustomer == null) {
      var { adult, child, infant } = this.state;
    } else {
      var { adult, child, infant } = this.props.location.noCustomer;
    }
    if (this.props.location.TicketSelect == null) {
      var { id, airline, depart,arrive,duration,price } = null;
    } else {
      var { id, airline, depart,arrive,duration,price } = this.props.location.TicketSelect.selected[0];
    }
    console.log(airline);
    var i;
    var RenderAdult = [];
    for (i = 0; i < adult; i++) {
      RenderAdult.push(
        <ComponentsFillInfo customer="Adult" key={i}>
          {" "}
        </ComponentsFillInfo>
      );
    }
    var RenderChild = [];
    for (i = 0; i < child; i++) {
      RenderChild.push(
        <ComponentsFillInfo customer="Child" key={i}>
          {" "}
        </ComponentsFillInfo>
      );
    }
    var RenderInfant = [];
    for (i = 0; i < infant; i++) {
      RenderInfant.push(
        <ComponentsFillInfo customer="Infant" key={i}>
          {" "}
        </ComponentsFillInfo>
      );
    }

    return (
      <div>
        <form className="form-address" id="address">
          <div className="container mt-5 mb-5 panel panel-header-fill panel-primary menu-box">
            <div className="row mt-5 mb-5 panel-heading">
              <h4 className="col">Buyer information</h4>
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
                <label className="col-12">Contact you by: </label>
                <div className="form-group col">
                  <label className="custom-checkbox">
                    Email
                    <input type="checkbox" id="CB-email" />
                    <span className="custom-control-input"></span>
                  </label>
                  <label className="custom-checkbox">
                    SMS
                    <input type="checkbox" id="CB-sms" />
                    <span className="custom-control-input"></span>
                  </label>
                  <label className="custom-checkbox">
                    Phone call
                    <input type="checkbox" id="CB-call" />
                    <span className="custom-control-input"></span>
                  </label>
                </div>
              </div>
              <div className="row">
                <label className="col-12">Do you want to buy insurance ?</label>
                <div className="form-group col">
                  <label className="custom-checkbox">
                    Yes
                    <input type="checkbox" id="CB-Yes" />
                    <span className="custom-control-input"></span>
                  </label>
                  <label className="custom-checkbox">
                    No
                    <input type="checkbox" id="CB-No" />
                    <span className="custom-control-input"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {RenderAdult}
          {RenderChild}
          {RenderInfant}
          <div className="container">
            <NavLink
              to={{
                pathname: "/check-out",
                noCustomer: {
                  adult: adult,
                  child: child,
                  infant: infant,
                },
                TicketSelect: {
                  selected: [
                    {
                      id: id,
                      airline: airline,
                      depart: depart,
                      arrive: arrive,
                      duration: duration,
                      price: price,
                    },
                  ],
                },
              }}
              className="btn btn-primary btn-color"
              type="submit"
            >
              Book Tickets
            </NavLink>
          </div>
        </form>
      </div>
    );
  }
}

export default FillInformation;
