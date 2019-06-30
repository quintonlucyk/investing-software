import React from "react";
import Alert from "react-bootstrap/Alert";

class DisplayRecommendation extends React.Component {
  render() {
    if (this.props.metrics == null) {
      return null;
    } else if (
      this.props.metrics.Error === undefined &&
      this.props.balance.Error === undefined &&
      this.props.income.Error === undefined &&
      this.props.cash.Error === undefined &&
      this.props.metrics.metrics[0]["Graham Number"] !== ""
    ) {
      console.log(this.props.profile);
      console.log(this.props.metrics);
      console.log(this.props.balance);
      console.log(this.props.income);
      console.log(this.props.cash);
      const price = parseFloat(this.props.profile.profile.price);
      const shouldPrice = parseFloat(
        this.props.metrics.metrics[0]["Graham Number"]
      );
      if (price < shouldPrice) {
        return (
          <Alert variant="success">
            Graham Number: ${Number.parseFloat(shouldPrice).toFixed(2)}
          </Alert>
        );
      } else {
        return (
          <Alert variant="secondary">
            Graham Number: ${Number.parseFloat(shouldPrice).toFixed(2)}
          </Alert>
        );
      }
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

export default DisplayRecommendation;
