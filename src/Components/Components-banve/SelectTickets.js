import React, { Component } from "react";
import "../../css/SelectTickets.css";
import Filter from "./Filter";
import { NavLink } from "react-router-dom";

export class SelectTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [
        {
          id: 1,
          airline: "VietNamAirline",
          depart: "7:00 am",
          arrive: "8:00 pm",
          duration: "30h 10m - 2 stops",
          price: "1.000.000 VND",
        },
      ],
      ticket: [
        {
          id: 1,
          airline: "VietNamAirline",
          depart: "7:00 am",
          arrive: "8:00 pm",
          duration: "30h 10m - 2 stops",
          price: "1.000.000 VND",
        },
        {
          id: 2,
          airline: "Vietjet Air",
          depart: "8:00 am",
          arrive: "9:00 pm",
          duration: "20h 10m - 2 stops",
          price: "1.500.000 VND",
        },
        {
          id: 3,
          airline: "Jetstar",
          depart: "6:30 am",
          arrive: "9:00 pm",
          duration: "34h 10m - 1 stops",
          price: "1.200.000 VND",
        },
        {
          id: 4,
          airline: "VietNamAirline",
          depart: "12:00 am",
          arrive: "1:00 am",
          duration: "25h 10m - 1 stops",
          price: "1.300.000 VND",
        },
        {
          id: 5,
          airline: "VietNamAirline",
          depart: "9:00 am",
          arrive: "0:00 am",
          duration: "22h 10m - 2 stops",
          price: "1.000.000 VND",
        },
      ],
      noCustomer : [{
        adult: "1",
      child: "1",
      infant: "1",
      }]
    };
  }
  ClickTr = (event) => {
    var id = event.target.id;
    this.setState({
      selected: [
        {
          id: id - 1,
          airline: this.state.ticket[id - 1].airline,
          depart: this.state.ticket[id - 1].depart,
          arrive: this.state.ticket[id - 1].arrive,
          duration: this.state.ticket[id - 1].duration,
          price: this.state.ticket[id - 1].price,
        },
      ],
    });
    alert("You have chosen another ticket");
    //console.log(this.state.ticket[id - 1].airline);
  };

  render() {
    //console.log(this.props.location.noCustomer);
    if(this.props.location.noCustomer == null){
      var { adult, child, infant } = this.state.noCustomer;
    }
    else{
      var { adult, child, infant } = this.props.location.noCustomer;
    }
    console.log(child);
    var { selected, ticket } = this.state;
    var TableTicketSelect = selected.map((select, index) => {
      return (
        <tr key={index}>
          <td>{select.airline}</td>
          <td>{select.depart}</td>
          <td>{select.arrive}</td>
          <td>{select.duration}</td>
          <td>{select.price}</td>
        </tr>
      );
    });
    var TableTicket = ticket.map((ticket, index) => {
      return (
        <tr key={ticket.id}>
          <td>{ticket.airline}</td>
          <td>{ticket.depart}</td>
          <td>{ticket.arrive}</td>
          <td>{ticket.duration}</td>
          <td id={ticket.id} onClick={this.ClickTr} className="btn btn-info">
            {ticket.price}
          </td>
        </tr>
      );
    });
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <section>
              {/*for demo wrap*/}
              <h1>Departs</h1>
              <div className="tbl-header">
                <table cellPadding={0} cellSpacing={0} border={0}>
                  <thead>
                    <tr>
                      <th>Airlines</th>
                      <th>Departs</th>
                      <th>Arrives</th>
                      <th>Duration</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content">
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  border={0}
                  id="TableShowTicket"
                >
                  <tbody>{TableTicket}</tbody>
                </table>
              </div>
            </section>
            {/* Tickets Selected */}
            <section>
              <h1>Tickets selected</h1>
              <div className="tbl-header">
                <table cellPadding={0} cellSpacing={0} border={0}>
                  <thead>
                    <tr>
                      <th>Airlines</th>
                      <th>Departs</th>
                      <th>Arrives</th>
                      <th>Duration</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content-selected">
                <table cellPadding={0} cellSpacing={0} border={0}>
                  <tbody>{TableTicketSelect}</tbody>
                </table>
              </div>
            </section>
            {/* done Tickets Selected */}
            <NavLink
              to={{
                pathname: "/fill-in-the-information",
                noCustomer: {
                  adult: adult,
                  child: child,
                  infant: infant,
                },

                TicketSelect: {
                  selected: [
                    {
                      id: this.state.selected.id,
                      airline: this.state.selected.airline,
                      depart: this.state.selected.depart,
                      arrive: this.state.selected.arrive,
                      duration: this.state.selected.duration,
                      price: this.state.selected.price,
                    },
                  ],
                },
              }}
              className="btn btn-info btn-buy"
            >
              Buy
            </NavLink>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Filter></Filter>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectTickets;
