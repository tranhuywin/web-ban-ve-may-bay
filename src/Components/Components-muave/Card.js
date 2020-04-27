import React, { Component } from "react";
import {

  NavLink,
} from "react-router-dom";


export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      ContentShow: "SHOW TICKETS",
    };
  }
  clickshow = () => {
    var ConShow = this.state.active ? "SHOW TICKETS" : "HIDE TICKETS";
    this.setState({
      active: !this.state.active,
      ContentShow: ConShow,
    });
  };
  render() {
    return (
      <div>
        <div className="ticket-card">
          <div className="cover">
            <div className="info"></div>
          </div>
          <div className="body">
            <div className="artist">
              <h6 className="info">{this.props.name_airline}</h6>
              <h4 className="name">{this.props.from}</h4>
            </div>
            <div className="price">
              <div className="from">From</div>
              <div className="value">
                <b>$</b>
                {this.props.price_basic_ticket}
              </div>
            </div>
            <div className="clearfix" />
            <div className="info">
              <p className="location">
                <i className="fa fa-map-marker" />
                {this.props.to}
              </p>
              <p className="date">
                <i className="fa fa-calendar" />
                {this.props.time}
              </p>
            </div>
            <div className="clearfix" />
          </div>
          <div className="collapse" id={this.props.id}>
            <ul className="list-unstyled">
              <li>
                <div className="ticket">
                  <h5>
                    Basic Ticket
                    <br />
                    <small>25 Tickets left</small>
                  </h5>
                </div>
                <div className="price">
                  <div className="value">
                    <b>$</b>
                    {this.props.price_basic_ticket}
                  </div>
                </div>
                <NavLink
                  to="/SeatNumber-bacsic"
                  className="btn btn-info btn-sm btn-buy"
                >
                  Buy Now!
                </NavLink>
              </li>
              <li>
                <div className="ticket">
                  <h5>
                    Regular Ticket
                    <br />
                    <small>15 Tickets left</small>
                  </h5>
                </div>
                <div className="price">
                  <div className="value">
                    <b>$</b>
                    {this.props.price_regular_ticket}
                  </div>
                </div>
                <NavLink
                  to="/SeatNumber-regular"
                  className="btn btn-info btn-sm btn-buy"
                >
                  Buy Now!
                </NavLink>
              </li>
              <li>
                <div className="ticket">
                  <h5>
                    Premium Ticket
                    <br />
                    <small>62 Tickets left</small>
                  </h5>
                </div>
                <div className="price">
                  <div className="value">
                    <b>$</b>
                    {this.props.price_perium_ticket}
                  </div>
                </div>
                <NavLink
                  to="/SeatNumber-premium"
                  className="btn btn-info btn-sm btn-buy"
                >
                  Buy Now!
                </NavLink>
              </li>
              <li>
                <div className="ticket">
                  <h5>
                    VIP Ticket
                    <br />
                    <small>6 Tickets left</small>
                  </h5>
                </div>
                <div className="price">
                  <div className="value">
                    <b>$</b>
                    {this.props.price_vip_ticket}
                  </div>
                </div>
                <NavLink
                  to="/SeatNumber-vip"
                  className="btn btn-info btn-sm btn-buy"
                >
                  Buy Now!
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer">
            <button
              data-toggle="collapse"
              data-target={"#" + this.props.id}
              className="btn toggle-tickets"
              onClick={this.clickshow}
            >
              {this.state.ContentShow}
            </button>
          </div>
        </div>
        {/*<Switch>
          <Route path="/SeatNumber-bacsic">
            <SeatNumber></SeatNumber>
          </Route>
          <Route path="/SeatNumber-regular">
            <SeatNumber></SeatNumber>
          </Route>
          <Route path="/SeatNumber-primium">
            <SeatNumber></SeatNumber>
          </Route>
          <Route path="/SeatNumber-vip">
            <SeatNumber></SeatNumber>
          </Route>
        </Switch>*/}
      </div>
    );
  }
}

export default Card;
