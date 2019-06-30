import React from "react";
import { ButtonToolbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DisplayRevenueRow extends React.Component {
  render() {
    let tenYearRevenue = 0;
    let fiveYearRevenue = 0;
    let oneYearRevenue = 0;
    for (let i = 0; i < 10; ++i) {
      if (i === this.props.income.financials.length) {
        if (i < 1) {
          oneYearRevenue = "NA";
          tenYearRevenue = "NA";
          fiveYearRevenue = "NA";
        }
        if (i < 5) {
          tenYearRevenue = "NA";
          fiveYearRevenue = "NA";
        } else {
          tenYearRevenue = "NA";
        }
      } else if (
        this.props.income.financials[i] &&
        this.props.income.financials[i]["Revenue Growth"] &&
        this.props.income.financials[i]["Revenue Growth"] !== ""
      ) {
        let float =
          parseFloat(this.props.income.financials[i]["Revenue Growth"]) * 100;
        if (i < 1) {
          tenYearRevenue += float;
          fiveYearRevenue += float;
          oneYearRevenue = Number.parseFloat(float).toFixed(2);
        } else if (i < 5) {
          tenYearRevenue += float;
          fiveYearRevenue += float;
        } else if (i < 10) {
          tenYearRevenue += float;
        } else {
          break;
        }
      } else {
        if (i < 1) {
          oneYearRevenue = "NA";
          tenYearRevenue = "NA";
          fiveYearRevenue = "NA";
        }
        if (i < 5) {
          tenYearRevenue = "NA";
          fiveYearRevenue = "NA";
        } else {
          tenYearRevenue = "NA";
        }
      }
    }
    tenYearRevenue =
      tenYearRevenue === "NA"
        ? "NA"
        : Number.parseFloat(tenYearRevenue / 10).toFixed(2);
    fiveYearRevenue =
      fiveYearRevenue === "NA"
        ? "NA"
        : Number.parseFloat(fiveYearRevenue / 5).toFixed(2);

    return (
      <tr>
        <td>
          Δ Revenue
          <ButtonToolbar className="m-2 d-inline">
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>(Change in revenue)</Tooltip>}
            >
              <FontAwesomeIcon icon="question-circle" />
            </OverlayTrigger>
          </ButtonToolbar>
        </td>
        <td>{oneYearRevenue}</td>
        <td>{fiveYearRevenue}</td>
        <td>{tenYearRevenue}</td>
      </tr>
    );
  }
}

export default DisplayRevenueRow;
