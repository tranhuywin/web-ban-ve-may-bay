import React, { Component } from "react";
import "../css/ticket-selts.scss";
import Card from "./Components-muave/Card";

export class Muave extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="container">
            <h2 className="page-title">Tickets Concept</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <Card
                  id="1"
                  name_airline="GLOBAL TOUR 2016"
                  from="The Weeknd"
                  to="Barcelona, Spain"
                  time="30 Aug, 2016"
                  price_basic_ticket="599"
                  price_regular_ticket="799"
                  price_perium_ticket="1299"
                  price_vip_ticket="1799"
                ></Card>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <Card
                  id="2"
                  name_airline="YEEZUS WORLDWIDE"
                  from="Kanye West"
                  to="Dallas, Texas"
                  time="3 Aug, 2017"
                  price_basic_ticket="499"
                  price_regular_ticket="799"
                  price_perium_ticket="1299"
                  price_vip_ticket="1799"
                ></Card>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <Card
                  id="3"
                  name_airline="TRUST ISSUES TOUR"
                  from="Drake"
                  to="Paris, France"
                  time="20 Aug, 2016"
                  price_basic_ticket="399"
                  price_regular_ticket="799"
                  price_perium_ticket="1299"
                  price_vip_ticket="1799"
                ></Card>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <Card
                  id="4"
                  name_airline="TRUST ISSUES TOUR"
                  from="Drake"
                  to="Paris, France"
                  time="20 Aug, 2016"
                  price_basic_ticket="399"
                  price_regular_ticket="799"
                  price_perium_ticket="1299"
                  price_vip_ticket="1799"
                ></Card>
              </div>
            </div>
          </div>
          <footer>
            <h3>Connect with me on:</h3>
            <a className="social-icon" href="https://twitter.com/axelut">
              <i className="fa fa-twitter" />
            </a>
            <a className="social-icon" href="https://www.facebook.com/axelut">
              <i className="fa fa-facebook-square" />
            </a>
            <a className="social-icon" href="https://dribbble.com/axelut">
              <i className="fa fa-dribbble" />
            </a>
            <a
              className="social-icon"
              href="https://github.com/alexandru-paduraru"
            >
              <i className="fa fa-github" />
            </a>
            <a
              className="social-icon"
              href="https://www.reddit.com/user/alexpaduraru/"
            >
              <i className="fa fa-reddit" />
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default Muave;
