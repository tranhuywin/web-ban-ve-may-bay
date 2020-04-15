import React, { Component } from "react";
import "../css/banve.scss";
import $ from "jquery";

export class Banve extends Component {
  componentDidMount() {
    $(document).ready(function () {
      var guestAmount = $("#guestNo");
      
      $("#cnt-up").click(function () {
        guestAmount.val(Math.min(parseInt($("#guestNo").val()) + 1, 20));
      });
      $("#cnt-down").click(function () {
        guestAmount.val(Math.max(parseInt($("#guestNo").val()) - 1, 1));
      });

      $(".btn").click(function () {
        var $btn = $(".btn");

        $btn.toggleClass("booked");
        $(".diamond").toggleClass("windup");
        $("form").slideToggle(300);
        $(".linkbox").toggle(200);

        if ($btn.text() === "BOOK NOW") {
          $btn.text("BOOKED!");
        } else {
          $btn.text("BOOK NOW");
        }
      });
      $("#checkboxRDay").click(function(){
        //$("#ReturnDay").toggle;
        console.log( $("#ReturnDay").toggle("disabled"));
      })
    });
  }
  render() {
    return (
      <div>
        <div className="diamond" />
        <div className="form-wrap">
          <form>
            <div className="location">
              <label htmlFor="location">FROM</label>
              <input type="text" name="location" placeholder="New York, NY" />
            </div>
            <div className="location">
              <label htmlFor="location">TO</label>
              <input
                type="text"
                name="location"
                placeholder="Ho Chi Minh, VietNam"
              />
            </div>
            <div>
              <button
                className="btn-Passengers"
                type="button"
                data-toggle="collapse"
                data-target="#Passengers"
              >
                No.of Passengers
              </button>
            </div>
            <div id="Passengers" className="collapse">
              <div className="guests">
                <label htmlFor="guests">ADULT</label>
                <br />
                <br />
                <button className="counter-btn" type="button" id="cnt-down">
                  -
                </button>
                <input
                  type="text"
                  id="guestNo"
                  name="guests"
                  defaultValue={1}
                />
                <button className="counter-btn" type="button" id="cnt-up">
                  +
                </button>
              </div>
              <div className="guests">
                <label htmlFor="guests">CHILD</label>
                <br />
                <br />
                <button className="counter-btn" type="button" id="cnt-down">
                  -
                </button>
                <input
                  type="text"
                  id="guestNo"
                  name="guests"
                  defaultValue={0}
                />
                <button className="counter-btn" type="button" id="cnt-up">
                  +
                </button>
              </div>
              <div className="guests">
                <label htmlFor="guests">INFANT</label>
                <br />
                <br />
                <button className="counter-btn" type="button" id="cnt-down">
                  -
                </button>
                <input
                  type="text"
                  id="guestNo"
                  name="guests"
                  defaultValue={0}
                />
                <button className="counter-btn" type="button" id="cnt-up">
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
                <label htmlFor="arrival" ><input type="checkbox" id="checkboxRDay" className="CBReturnDay" value=""/>RETURN DAY</label>
                <input id="ReturnDay"name="departure" type="date" hidden/>
              </div>
            </div>
          </form>
          <button className="btn" type="button">
            BOOK NOW
          </button>
        </div>
      </div>
    );
  }
}

export default Banve;
