import React, { Component } from "react";
import "../../css/checkout.css";
import { Redirect } from "react-router-dom";

export class CheckOut extends Component {
  OnTransfer = (e) => {
    if (e.target.value === "Transfer") {
      document.getElementById("Fill-Info").hidden = true;
      document.getElementById("BankTransfer").hidden = false;
    } else {
      document.getElementById("Fill-Info").hidden = false;
      document.getElementById("BankTransfer").hidden = true;
    }
  };
  render() {
    if (
      this.props.location.TicketSelect == null ||
      this.props.location.noCustomer == null
    ) {
      return <Redirect to="/ban-ve"></Redirect>;
    }
    var { adult, child, infant } = this.props.location.noCustomer;
    var {
      id,
      airline,
      depart,
      arrive,
      duration,
      price,
    } = this.props.location.TicketSelect.selected[0];
    return (
      <div>
        <div className="container-checkout">
          <div className="window">
            <div className="order-info">
              <div className="order-info-content">
                <h2>Order Summary</h2>
                <div className="line" />
                <p>
                  Customers: {adult} adult, {child} child, {infant} infant.
                </p>
                <div className="line" />
                <p>Tickets:</p>
                <p>airline: {airline}</p>
                <p>depart: {depart}</p>
                <p>arrive: {arrive}</p>
                <p>duration: {duration}</p>
                <p>price: {price} VND</p>
                <div className="line" />
                <p>Insurance: 1.000.000 VND</p>
                <div className="line" />
                <div className="total">
                  <span style={{ float: "left" }}>
                    <div className="thin dense">Tickets</div>
                    <div className="thin dense">Insurance</div>
                    <div className="thin dense">VAT 19%</div>
                    TOTAL
                  </span>
                  <span style={{ float: "right", textAlign: "right" }}>
                    <div className="thin dense">{price} VND</div>
                    <div className="thin dense">1.000.000 VND</div>
                    <div className="thin dense">500.000 VND</div>
                    3.000.000 VND
                  </span>
                </div>
              </div>
            </div>
            <div className="credit-info">
              <div className="credit-info-content">
                <table className="half-input-table">
                  <tbody>
                    <tr>
                      <td>Please select your card: </td>
                      <td>
                        <select
                          onChange={this.OnTransfer}
                          className="form-control "
                        >
                          <option>Master</option>
                          <option>Visa</option>
                          <option id="transfer">Transfer</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div id="Fill-Info">
                  Card Number
                  <input className="input-field" />
                  Card Holder
                  <input className="input-field" />
                  <table className="half-input-table">
                    <tbody>
                      <tr>
                        <td>
                          Expires
                          <input className="input-field" />
                        </td>
                        <td>
                          CVC
                          <input className="input-field" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="BankTransfer container-fluid"
                  id="BankTransfer"
                  hidden
                >
                  <b>
                    Ngân hàng TMCP Ngoại Thương Việt Nam - Vietcombank (VNĐ)
                  </b>

                  <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                      <p>Tên tài khoản</p>
                      <p>Số tài khoản</p>
                      <p>Chi Nhánh</p>
                      <p>Số tiền</p>
                      <p>Nội dung</p>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                      <p>TRAN HUY WIN</p>
                      <p>157704070004167</p>
                      <p>PGD SONG RAY</p>
                      <p>3.000.000 VND</p>
                      <p>Thanh toan cho dh: 2004262639</p>
                    </div>
                  </div>
                </div>
                <button className="pay-btn" onClick={this.OnTransfer}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;
