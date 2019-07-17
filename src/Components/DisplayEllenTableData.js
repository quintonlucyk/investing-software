import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import DisplayROICRow from "./SubComponents/DisplayROICRow";
import DisplayEquityRow from "./SubComponents/DisplayEquityRow";
import DisplayEPSRow from "./SubComponents/DisplayEPSRow";
import DisplayRevenueRow from "./SubComponents/DisplayRevenueRow";
import DisplayFreeCashRow from "./SubComponents/DisplayFreeCashRow";
import DisplayOperatingCashRow from "./SubComponents/DisplayOperatingCashRow";
import DisplayPERow from "./SubComponents/DisplayPERow";

class DisplayEllenTableData extends React.Component {
  render() {
    if (this.props.metrics == null) {
      return null;
    } else if (
      this.props.metrics.Error === undefined &&
      this.props.balance.Error === undefined &&
      this.props.income.Error === undefined &&
      this.props.cash.Error === undefined
    ) {
      let tbody = [];
      let date;
      for (let i = 0; i < 10; ++i) {
        console.log(this.props.metrics.metrics[i]);
        console.log(this.props.balance.financials[i]);
        console.log(this.props.income.financials[i]);
        console.log(this.props.cash.financials[i]);
        if (
          this.props.metrics.metrics[i] !== undefined &&
          this.props.balance.financials[i] !== undefined &&
          this.props.income.financials[i] !== undefined &&
          this.props.cash.financials[i] !== undefined &&
          (this.props.metrics.metrics[i].date ===
            this.props.cash.financials[i].date &&
            this.props.balance.financials[i].date ===
              this.props.cash.financials[i].date &&
            this.props.income.financials[i].date ===
              this.props.cash.financials[i].date)
        ) {
          date = this.props.cash.financials[i].date.substring(0, 4);
          tbody.push(
            <tr key={date}>
              <td>{date}</td>
            </tr>
          );
        } else {
          break;
        }
      }
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Year</th>
              <th>Dividend</th>
              <th>Low Share Price</th>
              <th>Low Yield</th>
              <th>High Yield</th>
            </tr>
          </thead>
          <tbody>{tbody}</tbody>
        </Table>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  metrics: state.fetchedData.metrics,
  balance: state.fetchedData.balance,
  income: state.fetchedData.income,
  cash: state.fetchedData.cash
});

export default connect(mapStateToProps)(DisplayEllenTableData);
