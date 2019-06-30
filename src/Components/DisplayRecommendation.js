import React from "react";
import { Table } from "react-bootstrap";
import DisplayROICRow from "./SubComponents/DisplayROICRow";
import DisplayEquityRow from "./SubComponents/DisplayEquityRow";
import DisplayEPSRow from "./SubComponents/DisplayEPSRow";
import DisplayRevenueRow from "./SubComponents/DisplayRevenueRow";
import DisplayFreeCashRow from "./SubComponents/DisplayFreeCashRow";
import DisplayOperatingCashRow from "./SubComponents/DisplayOperatingCashRow";
import DisplayPERow from "./SubComponents/DisplayPERow";

class DisplayRecommendation extends React.Component {
  render() {
    if (this.props.metrics == null) {
      return null;
    } else if (
      this.props.metrics.Error === undefined &&
      this.props.balance.Error === undefined &&
      this.props.income.Error === undefined &&
      this.props.cash.Error === undefined
    ) {
      console.log(this.props.metrics);
      console.log(this.props.balance);
      console.log(this.props.income);
      console.log(this.props.cash);
      const EPS = 0;
      return <p>calculating</p>;
    } else {
      console.log(this.props.metrics);
      console.log(this.props.balance);
      console.log(this.props.income);
      console.log(this.props.cash);
      return null;
    }
  }
}

export default DisplayRecommendation;
