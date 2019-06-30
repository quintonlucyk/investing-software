import React from "react";
import { ButtonToolbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DisplayOperatingCashRow extends React.Component {
  render() {
    let tenYearCash = 0;
    let fiveYearCash = 0;
    let oneYearCash = 0;
    for (let i = 0; i < 9; ++i) {
      if (i === this.props.cash.financials.length - 1) {
        if (i < 1) {
          oneYearCash = "NA";
          tenYearCash = "NA";
          fiveYearCash = "NA";
        }
        if (i < 5) {
          tenYearCash = "NA";
          fiveYearCash = "NA";
        } else {
          tenYearCash = "NA";
        }
      } else if (
        this.props.cash.financials[i] &&
        this.props.cash.financials[i + 1] &&
        this.props.cash.financials[i]["Operating Cash Flow"] &&
        this.props.cash.financials[i + 1]["Operating Cash Flow"] &&
        this.props.cash.financials[i]["Operating Cash Flow"] !== "" &&
        this.props.cash.financials[i + 1]["Operating Cash Flow"] !== ""
      ) {
        let float =
          (parseFloat(this.props.cash.financials[i]["Operating Cash Flow"]) /
            parseFloat(
              this.props.cash.financials[i + 1]["Operating Cash Flow"]
            ) -
            1) *
          100;
        if (i < 1) {
          tenYearCash += float;
          fiveYearCash += float;
          oneYearCash = Number.parseFloat(float).toFixed(2) + " %";
        } else if (i < 5) {
          tenYearCash += float;
          fiveYearCash += float;
        } else if (i < 9) {
          tenYearCash += float;
        } else {
          break;
        }
      } else {
        if (i < 1) {
          oneYearCash = "NA";
          tenYearCash = "NA";
          fiveYearCash = "NA";
        }
        if (i < 5) {
          tenYearCash = "NA";
          fiveYearCash = "NA";
        } else {
          tenYearCash = "NA";
        }
      }
    }
    tenYearCash =
      tenYearCash === "NA"
        ? "NA"
        : Number.parseFloat(tenYearCash / 9).toFixed(2) + " %";
    fiveYearCash =
      fiveYearCash === "NA"
        ? "NA"
        : Number.parseFloat(fiveYearCash / 5).toFixed(2) + " %";

    return (
      <tr>
        <td>
          Δ Operating Cash
          <ButtonToolbar className="m-2 d-inline">
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>(Change in operating cash flow)</Tooltip>}
            >
              <FontAwesomeIcon icon="question-circle" />
            </OverlayTrigger>
          </ButtonToolbar>
        </td>
        <td>{oneYearCash}</td>
        <td>{fiveYearCash}</td>
        <td>{tenYearCash}</td>
      </tr>
    );
  }
}

export default DisplayOperatingCashRow;
