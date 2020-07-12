import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";
import FilterStatistical from "./Filter-statistical";
export class Statistical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataAirline: {
        labels: ["VietNamAirline", "Vietjet Air", "Jetstar"],
        datasets: [
          {
            label: "Tickets",
            data: [417594, 181045, 153060],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
          },
        ],
      },
      ChartDataAnnual: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "VND",
            data: [
              617594,
              181045,
              153060,
              106519,
              105162,
              95072,
              43456,
              198514,
              439621,
              679132,
              351689,
              452972,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
    };
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <Bar
              data={this.state.chartDataAirline}
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: "revenue statistics",
                  fontSize: 25,
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
              }}
            />
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <FilterStatistical></FilterStatistical>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <Line
              data={this.state.ChartDataAnnual}
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: "Annual revenue statistics",
                  fontSize: 25,
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
              }}
            />
          </div>

          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
        </div>
      </div>
    );
  }
}
export default Statistical;
