import React, { Component } from "react";
import "../css/banve.scss";
import $ from "jquery";
import { NavLink } from "react-router-dom";

export class Banve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adult: 1,
      child: 0,
      infant: 0,
    };
  }
  componentDidMount() {
    $(document).ready(function () {
      //adult
      var guestAmountAdult = $("#guestNo-adult");
      $("#cnt-up-adult").click(function () {
        guestAmountAdult.val(
          Math.min(parseInt($("#guestNo-adult").val()) + 1, 20)
        );
      });
      $("#cnt-down-adult").click(function () {
        guestAmountAdult.val(
          Math.max(parseInt($("#guestNo-adult").val()) - 1, 1)
        );
      });
      //child
      var guestAmountChild = $("#guestNo-child");
      $("#cnt-up-child").click(function () {
        guestAmountChild.val(
          Math.min(parseInt($("#guestNo-child").val()) + 1, 20)
        );
      });
      $("#cnt-down-child").click(function () {
        guestAmountChild.val(
          Math.max(parseInt($("#guestNo-child").val()) - 1, 0)
        );
      });
      //infant
      var guestAmountInfant = $("#guestNo-infant");
      $("#cnt-up-infant").click(function () {
        guestAmountInfant.val(
          Math.min(parseInt($("#guestNo-infant").val()) + 1, 20)
        );
      });
      $("#cnt-down-infant").click(function () {
        guestAmountInfant.val(
          Math.max(parseInt($("#guestNo-infant").val()) - 1, 0)
        );
      });
      $("#checkboxRDay").click(function () {
        $("#ReturnDay").toggle("disabled");
      });
    });
  }
  ClickBookNow = () => {
    var ValAdult = document.getElementById("guestNo-adult").value;
    var ValChild = document.getElementById("guestNo-child").value;
    var ValInfant = document.getElementById("guestNo-infant").value;
    this.setState({
      adult: ValAdult,
      child: ValChild,
      infant: ValInfant,
    });
    //console.log(this.state);
  };
  OnChange = () => {
    var ValAdult = document.getElementById("guestNo-adult").value;
    var ValChild = document.getElementById("guestNo-child").value;
    var ValInfant = document.getElementById("guestNo-infant").value;
    this.setState({
      adult: ValAdult,
      child: ValChild,
      infant: ValInfant,
    });
    //console.log(this.state);
  };
  render() {
    return (
      <div>
        <div className="diamond" />
        <div className="form-wrap">
          <form>
            <div className="location">
              <label htmlFor="location">FROM</label>
              <input
                type="text"
                name="location"
                className="address"
                placeholder="New York, NY"
              />
            </div>
            <div className="location">
              <label htmlFor="location">TO</label>
              <input
                type="text"
                name="location"
                className="address"
                placeholder="Ho Chi Minh, VietNam"
              />
            </div>
            <div>
              <button
                className="btn-Passengers  button button-block"
                type="button"
                data-toggle="collapse"
                data-target="#Passengers"
              >
                No.of Passengers
              </button>
            </div>
            <div id="Passengers" className="collapse">
              <div className="guests">
                <label>ADULT</label>
                <br />
                <br />
                <button
                  className="counter-btn"
                  type="button"
                  id="cnt-down-adult"
                  onClick={this.OnChange}
                >
                  -
                </button>
                <input
                  type="text"
                  id="guestNo-adult"
                  name="guests"
                  defaultValue={1}
                />
                <button
                  className="counter-btn"
                  type="button"
                  id="cnt-up-adult"
                  onClick={this.OnChange}
                >
                  +
                </button>
              </div>
              <div className="guests">
                <label>CHILD</label>
                <br />
                <br />
                <button
                  className="counter-btn"
                  type="button"
                  id="cnt-down-child"
                  onClick={this.OnChange}
                >
                  -
                </button>
                <input
                  type="text"
                  id="guestNo-child"
                  name="guests"
                  defaultValue={0}
                />
                <button
                  className="counter-btn"
                  type="button"
                  id="cnt-up-child"
                  onClick={this.OnChange}
                >
                  +
                </button>
              </div>
              <div className="guests">
                <label>INFANT</label>
                <br />
                <br />
                <button
                  className="counter-btn"
                  type="button"
                  id="cnt-down-infant"
                  onClick={this.OnChange}
                >
                  -
                </button>
                <input
                  type="text"
                  id="guestNo-infant"
                  name="guests"
                  defaultValue={0}
                />
                <button
                  className="counter-btn"
                  type="button"
                  id="cnt-up-infant"
                  onClick={this.OnChange}
                >
                  +
                </button>
              </div>
            </div>

            <div className="dates">
              <div className="arrival">
                <label htmlFor="arrival">DEPARTURE</label>
                <input name="arrival" type="date" />
              </div>
              <div className="departure">
                <label htmlFor="arrival">
                  <input
                    type="checkbox"
                    id="checkboxRDay"
                    className="CBReturnDay"
                    value=""
                  />
                  RETURN DAY
                </label>
                <input id="ReturnDay" name="departure" type="date" hidden />
              </div>
            </div>
          </form>
          <button
            className="btn-ban-ve  button button-block"
            type="button"
            //onClick={this.ClickBookNow}
          >
            <NavLink
              onClick={this.ClickBookNow}
              to={{
                pathname: "/select-ticket",
                noCustomer: {
                  adult: this.state.adult,
                  child: this.state.child,
                  infant: this.state.infant,
                },
              }}
              className="textBookNow"
            >
              BOOK NOW
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default Banve;
