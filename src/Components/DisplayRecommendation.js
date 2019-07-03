import React from "react";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";

class DisplayRecommendation extends React.Component {
  render() {
    if (this.props.metrics == null) {
      return null;
    } else if (
      this.props.profile.Error === undefined &&
      this.props.metrics.Error === undefined &&
      this.props.balance.Error === undefined &&
      this.props.income.Error === undefined &&
      this.props.cash.Error === undefined &&
      this.props.growth.Error === undefined
    ) {
      console.log(this.props.profile);
      console.log(this.props.metrics);
      console.log(this.props.balance);
      console.log(this.props.income);
      console.log(this.props.cash);
      console.log(this.props.growth);
      const price = parseFloat(this.props.profile.profile.price);

      let grahamAlert = null;
      if (
        this.props.metrics.metrics[0] &&
        this.props.metrics.metrics[0]["Graham Number"] !== "" &&
        this.props.metrics.metrics[0]["Graham Number"] !== "0.0"
      ) {
        const grahamPrice = parseFloat(
          this.props.metrics.metrics[0]["Graham Number"]
        );

        if (price < grahamPrice) {
          grahamAlert = (
            <Alert variant="success">
              Graham Number: ${Number.parseFloat(grahamPrice).toFixed(2)}
            </Alert>
          );
        } else {
          grahamAlert = (
            <Alert variant="secondary">
              Graham Number: ${Number.parseFloat(grahamPrice).toFixed(2)}
            </Alert>
          );
        }
      }
      let myAlert = null;
      if (
        this.props.income.financials[0] &&
        this.props.income.financials[0].EPS &&
        this.props.growth.growth[0][
          "10Y Shareholders Equity Growth (per Share)"
        ] &&
        this.props.growth.growth[0][
          "5Y Shareholders Equity Growth (per Share)"
        ] &&
        this.props.growth.growth[0]["3Y Shareholders Equity Growth (per Share)"]
      ) {
        const eps = parseFloat(this.props.income.financials[0].EPS);
        const growth = Math.min(
          parseFloat(
            this.props.growth.growth[0][
              "10Y Shareholders Equity Growth (per Share)"
            ]
          ),
          parseFloat(
            this.props.growth.growth[0][
              "5Y Shareholders Equity Growth (per Share)"
            ]
          ),
          parseFloat(
            this.props.growth.growth[0][
              "3Y Shareholders Equity Growth (per Share)"
            ]
          )
        );
        console.log("eps", eps);
        console.log("growth", growth);
      } else if (
        this.props.income.financials[0] &&
        this.props.income.financials[0].EPS &&
        this.props.growth.growth[0][
          "5Y Shareholders Equity Growth (per Share)"
        ] &&
        this.props.growth.growth[0]["3Y Shareholders Equity Growth (per Share)"]
      ) {
        const eps = parseFloat(this.props.income.financials[0].EPS);
        const growth = Math.min(
          parseFloat(
            this.props.growth.growth[0][
              "5Y Shareholders Equity Growth (per Share)"
            ]
          ),
          parseFloat(
            this.props.growth.growth[0][
              "3Y Shareholders Equity Growth (per Share)"
            ]
          )
        );
        console.log("eps", eps);
        console.log("growth", growth);
      }

      return (
        <React.Fragment>
          {grahamAlert}
          {myAlert}
        </React.Fragment>
      );
    } else {
      console.log(this.props.profile);
      console.log(this.props.metrics);
      console.log(this.props.balance);
      console.log(this.props.income);
      console.log(this.props.cash);
      return null;
    }
  }
}

const mapStateToProps = state => ({
  profile: state.fetchedData.profile,
  metrics: state.fetchedData.metrics,
  balance: state.fetchedData.balance,
  income: state.fetchedData.income,
  cash: state.fetchedData.cash,
  growth: state.fetchedData.growth
});

export default connect(mapStateToProps)(DisplayRecommendation);
