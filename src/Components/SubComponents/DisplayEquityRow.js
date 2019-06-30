import React from "react";
import { ButtonToolbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DisplayEquityRow extends React.Component {
  render() {
    let tenYearEquity = 0;
    let fiveYearEquity = 0;
    let oneYearEquity = 0;
    for (let i = 0; i < this.props.balance.financials.length - 1; ++i) {
      if (
        this.props.balance.financials[i]["Total shareholders equity"] !== "" &&
        this.props.balance.financials[i + 1]["Total shareholders equity"] !== ""
      ) {
        let float =
          (parseFloat(
            this.props.balance.financials[i]["Total shareholders equity"]
          ) /
            parseFloat(
              this.props.balance.financials[i + 1]["Total shareholders equity"]
            ) -
            1) *
          100;
        if (i < 1) {
          tenYearEquity += float;
          fiveYearEquity += float;
          oneYearEquity = Number.parseFloat(float).toFixed(2);
        } else if (i < 5) {
          tenYearEquity += float;
          fiveYearEquity += float;
        } else if (i < 9) {
          tenYearEquity += float;
        } else {
          break;
        }
      } else {
        if (i < 1) {
          oneYearEquity = "NA";
          tenYearEquity = "NA";
          fiveYearEquity = "NA";
        }
        if (i < 5) {
          tenYearEquity = "NA";
          fiveYearEquity = "NA";
        } else {
          tenYearEquity = "NA";
        }
      }
    }
    tenYearEquity =
      tenYearEquity === "NA"
        ? "NA"
        : Number.parseFloat(tenYearEquity / 9).toFixed(2);
    fiveYearEquity =
      fiveYearEquity === "NA"
        ? "NA"
        : Number.parseFloat(fiveYearEquity / 5).toFixed(2);

    return (
      <tr>
        <td>
          Δ Equity
          <ButtonToolbar className="m-2 d-inline">
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>(Change in Shareholders Equity)</Tooltip>}
            >
              <FontAwesomeIcon icon="question-circle" />
            </OverlayTrigger>
          </ButtonToolbar>
        </td>
        <td>{oneYearEquity}</td>
        <td>{fiveYearEquity}</td>
        <td>{tenYearEquity}</td>
      </tr>
    );
  }
}

export default DisplayEquityRow;
