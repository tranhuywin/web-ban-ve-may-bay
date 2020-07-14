import React, { Component } from "react";
import Filter from "./Components-banve/Filter";
import $ from "jquery";
export class EditTickets extends Component {
  componentDidMount() {
    $("#Button_1").click(function () {
      $("#DepartTime_1").attr("contenteditable", "true");
      $("#ArriveTime_1").attr("contenteditable", "true");
      $("#DepartAddress_1").attr("contenteditable", "true");
      $("#ArriveAddress_1").attr("contenteditable", "true");
      $("#Price_1").attr("contenteditable", "true");
      $("#Booked_1").attr("contenteditable", "true");
      $("#Airline_1").attr("contenteditable", "true");
      $(this).text(function (i, text) {
        return text === "Save" ? "Edit ticket" : "Save";
      });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <div className="manage-users-container">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4 mr-auto">
                    <h3>Manage Tickets</h3>
                  </div>
                </div>
                <table className="table table-bordered">
                  <thead>
                    <tr className="table-secondary align-items-start text-uppercase">
                      <th className="align-middle">Airline</th>
                      <th className="align-middle">Depart time</th>
                      <th className="align-middle">Arrive time</th>
                      <th className="align-middle">Depart address</th>
                      <th className="align-middle">Arrive address</th>
                      <th className="align-middle">Price</th>
                      <th className="align-middle">Booked</th>
                      <th className="align-middle">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th
                        id="Airline_1"
                        className="font-weight-normal align-middle"
                        contenteditable = 'true'
                      >
                      </th>
                      <td id="DepartTime_1" className="align-middle" contenteditable = 'true'>
                      </td>
                      <td id="ArriveTime_1" className="align-middle" contenteditable = 'true'>
                      </td>
                      <td id="DepartAddress_1" className="align-middle" contenteditable = 'true'>
                      </td>
                      <td id="ArriveAddress_1" className="align-middle" contenteditable = 'true'>
                      </td>
                      <td id="Price_1" className="align-middle" contenteditable = 'true'>
                      </td>
                      <td id="Booked_1" className="align-middle" contenteditable = 'true'>
                      </td>
                      <td>
                        <button
                          className="btn btn-info btn-sm"
                          role="button"
                          id="Button_1"
                        >
                          Add ticket
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th
                        id="Airline_1"
                        className="font-weight-normal align-middle"
                      >
                        VietNamAirline
                      </th>
                      <td id="DepartTime_1" className="align-middle">
                        00:00 00/00/0000
                      </td>
                      <td id="ArriveTime_1" className="align-middle">
                        00:00 00/00/0000
                      </td>
                      <td id="DepartAddress_1" className="align-middle">
                        Tan Son Nhat, Ho Chi Minh
                      </td>
                      <td id="ArriveAddress_1" className="align-middle">
                        Noi Bai, Ha Noi
                      </td>
                      <td id="Price_1" className="align-middle">
                        1.000.000 VND
                      </td>
                      <td id="Booked_1" className="align-middle">
                        Has booked
                      </td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          role="button"
                          id="Button_1"
                        >
                          Edit ticket
                        </button>
                        <button type="button" className="btn btn-danger btn-sm">
                          Remove
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th className="font-weight-normal align-middle">
                        VietNamAirline
                      </th>
                      <td className="align-middle">00:00 00/00/0000</td>
                      <td className="align-middle">00:00 00/00/0000</td>
                      <td className="align-middle">
                        Tan Son Nhat, Ho Chi Minh
                      </td>
                      <td className="align-middle">Noi Bai, Ha Noi</td>
                      <td className="align-middle">1.000.000 VND</td>
                      <td className="align-middle">Has booked</td>
                      <td>
                        <a className="btn btn-primary btn-sm" role="button">
                          Edit ticket
                        </a>
                        <button type="button" className="btn btn-danger btn-sm">
                          Remove
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th className="font-weight-normal align-middle">
                        VietNamAirline
                      </th>
                      <td className="align-middle">00:00 00/00/0000</td>
                      <td className="align-middle">00:00 00/00/0000</td>
                      <td className="align-middle">
                        Tan Son Nhat, Ho Chi Minh
                      </td>
                      <td className="align-middle">Noi Bai, Ha Noi</td>
                      <td className="align-middle">1.000.000 VND</td>
                      <td className="align-middle">Has booked</td>
                      <td>
                        <a className="btn btn-primary btn-sm" role="button">
                          Edit ticket
                        </a>
                        <button type="button" className="btn btn-danger btn-sm">
                          Remove
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th className="font-weight-normal align-middle">
                        VietNamAirline
                      </th>
                      <td className="align-middle">00:00 00/00/0000</td>
                      <td className="align-middle">00:00 00/00/0000</td>
                      <td className="align-middle">
                        Tan Son Nhat, Ho Chi Minh
                      </td>
                      <td className="align-middle">Noi Bai, Ha Noi</td>
                      <td className="align-middle">1.000.000 VND</td>
                      <td className="align-middle">Has booked</td>
                      <td>
                        <a className="btn btn-primary btn-sm" role="button">
                          Edit ticket
                        </a>
                        <button type="button" className="btn btn-danger btn-sm">
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Filter></Filter>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTickets;
