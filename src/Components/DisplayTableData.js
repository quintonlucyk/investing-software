import React from "react";
import { Table } from "react-bootstrap";
import DisplayROICRow from "./SubComponents/DisplayROICRow";
import DisplayEquityRow from "./SubComponents/DisplayEquityRow";
import DisplayEPSRow from "./SubComponents/DisplayEPSRow";
import DisplayPERow from "./SubComponents/DisplayPERow";
import DisplayRevenueRow from "./SubComponents/DisplayRevenueRow";

class DisplayTableData extends React.Component {
  render() {
    if (this.props.metrics == null) {
      return null;
    } else if (
      this.props.metrics.Error === undefined &&
      this.props.balance.Error === undefined
    ) {
      console.log(this.props.metrics);
      console.log(this.props.balance);
      console.log(this.props.income);
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
            <DisplayROICRow metrics={this.props.metrics} />
            <DisplayEquityRow balance={this.props.balance} />
            <DisplayEPSRow income={this.props.income} />
            <DisplayRevenueRow income={this.props.income} />
            <DisplayPERow metrics={this.props.metrics} />
          </tbody>
        </Table>
      );
    } else {
      return null;
    }
  }
}

export default DisplayTableData;
