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

class DisplayMyTableData extends React.Component {
  render() {
    if (this.props.metrics == null || this.props.metrics.metrics == null) {
      return null;
    } else if (
      this.props.metrics.Error === undefined &&
      this.props.balance.Error === undefined &&
      this.props.income.Error === undefined &&
      this.props.cash.Error === undefined
    ) {
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th />
              <th>One Year</th>
              <th>Five Year Average</th>
              <th>Ten Year Average</th>
            </tr>
          </thead>
          <tbody>
            <DisplayROICRow />
            <DisplayEquityRow />
            <DisplayEPSRow />
            <DisplayRevenueRow />
            <DisplayFreeCashRow />
            <DisplayOperatingCashRow />
            <DisplayPERow />
          </tbody>
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
});

export default connect(mapStateToProps)(DisplayMyTableData);
