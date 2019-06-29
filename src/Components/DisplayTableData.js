import React from "react";
import { Table, ButtonToolbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DisplayMetricsData extends React.Component {
  render() {
    if (this.props.metrics == null) {
      return null;
    } else if (this.props.metrics.Error === undefined) {
      console.log(this.props.metrics);
      let tenYearRoic = 0;
      let fiveYearRoic = 0;
      let oneYearRoic = 0;
      let i = 0;
      for (let yearData of this.props.metrics.metrics) {
        if (yearData.ROIC !== "") {
          let float = parseFloat(yearData.ROIC) * 100;
          if (i < 1) {
            tenYearRoic += float;
            fiveYearRoic += float;
            oneYearRoic = Number.parseFloat(float).toFixed(2);
          } else if (i < 5) {
            tenYearRoic += float;
            fiveYearRoic += float;
          } else if (i < 10) {
            tenYearRoic += float;
          } else {
            break;
          }
        } else {
          if (i < 1) {
            oneYearRoic = "NA";
            tenYearRoic = "NA";
            fiveYearRoic = "NA";
          }
          if (i < 5) {
            tenYearRoic = "NA";
            fiveYearRoic = "NA";
          } else {
            tenYearRoic = "NA";
          }
        }
        ++i;
      }
      tenYearRoic =
        tenYearRoic === "NA"
          ? "NA"
          : Number.parseFloat(tenYearRoic / 10).toFixed(2);
      fiveYearRoic =
        fiveYearRoic === "NA"
          ? "NA"
          : Number.parseFloat(fiveYearRoic / 5).toFixed(2);
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
            <tr>
              <td>
                ROIC
                <ButtonToolbar className="m-2 d-inline">
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>(Return on Invested Capital)</Tooltip>}
                  >
                    <FontAwesomeIcon icon="question-circle" />
                  </OverlayTrigger>
                </ButtonToolbar>
              </td>
              <td>{oneYearRoic}</td>
              <td>{fiveYearRoic}</td>
              <td>{tenYearRoic}</td>
            </tr>
          </tbody>
        </Table>
      );
    } else {
      return null;
    }
  }
}

export default DisplayMetricsData;
