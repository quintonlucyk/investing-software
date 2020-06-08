import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

class DisplayPicks extends React.Component {
  render() {
    if (this.props.historicalAdjusted == null) {
      return null;
    } else if (this.props.historicalAdjusted.Error === undefined) {
      let tbody = new Array(11);
      for (let i = 0; i < tbody.length; ++i) {
        tbody[i] = new Array(6);
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
          <tbody></tbody>
        </Table>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  metrics: state.fetchedData.metrics,
  balance: state.fetchedData.balance,
  income: state.fetchedData.income,
  cash: state.fetchedData.cash,
  historicalPrice: state.fetchedData.historicalPrice,
  historicalAdjusted: state.fetchedData.historicalAdjusted,
});

export default connect(mapStateToProps)(DisplayPicks);
