import React, { Component } from "react";

export class ComponentsFillInfo extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 mb-5 panel panel-primary">
          <div className="row mt-5 mb-5 panel-heading">
            <h4 className="col">{this.props.customer}</h4>
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
                <input className="form-control" placeholder="Enter last name" />
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
      </div>
    );
  }
}

export default ComponentsFillInfo;
