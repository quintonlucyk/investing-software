import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

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
      let displayDate;
      let parsedDate;
      let priceIndex = this.props.historicalPrice.historical.length - 1;
      for (let i = 0; i < 10; ++i) {
        // console.log(this.props.metrics.metrics[i]);
        // console.log(this.props.balance.financials[i]);
        // console.log(this.props.income.financials[i]);
        // console.log(this.props.cash.financials[i]);
        // console.log(this.props.historicalPrice.historical);
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
          displayDate = this.props.cash.financials[i].date;
          parsedDate = new Date(this.props.cash.financials[i].date);
          console.log(parsedDate);
          let priceDate = new Date(
            this.props.historicalPrice.historical[priceIndex].date
          );
          console.log(priceDate);
          // console.log(priceIndex);
          // console.log(this.props.historicalPrice.historical.length);
          // console.log(this.props.historicalPrice.historical[priceIndex]);

          tbody.push(
            <tr key={displayDate}>
              <td>{displayDate}</td>
              <td>{this.props.income.financials[i]["Dividend per Share"]}</td>
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
              <th>Date</th>
              <th>Dividend</th>
              <th>Low Share Price</th>
              <th>High Yield</th>
              <th>High Share Price</th>
              <th>Low Yield</th>
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
  cash: state.fetchedData.cash,
  historicalPrice: state.fetchedData.historicalPrice
});

export default connect(mapStateToProps)(DisplayEllenTableData);
