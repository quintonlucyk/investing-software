import React from "react";
import { ButtonToolbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DisplayEPSRow extends React.Component {
  render() {
    let tenYearEPS = 0;
    let fiveYearEPS = 0;
    let oneYearEPS = 0;
    for (let i = 0; i < 9; ++i) {
      if (i === this.props.income.financials.length - 1) {
        if (i < 1) {
          oneYearEPS = "NA";
          tenYearEPS = "NA";
          fiveYearEPS = "NA";
        }
        if (i < 5) {
          tenYearEPS = "NA";
          fiveYearEPS = "NA";
        } else {
          tenYearEPS = "NA";
        }
      } else if (
        this.props.income.financials[i] &&
        this.props.income.financials[i + 1] &&
        this.props.income.financials[i].EPS &&
        this.props.income.financials[i + 1].EPS &&
        this.props.income.financials[i].EPS !== "" &&
        this.props.income.financials[i + 1].EPS !== ""
      ) {
        let float =
          (parseFloat(this.props.income.financials[i].EPS) /
            parseFloat(this.props.income.financials[i + 1].EPS) -
            1) *
          100;
        if (i < 1) {
          tenYearEPS += float;
          fiveYearEPS += float;
          oneYearEPS = Number.parseFloat(float).toFixed(2) + " %";
        } else if (i < 5) {
          tenYearEPS += float;
          fiveYearEPS += float;
        } else if (i < 9) {
          tenYearEPS += float;
        } else {
          break;
        }
      } else {
        if (i < 1) {
          oneYearEPS = "NA";
          tenYearEPS = "NA";
          fiveYearEPS = "NA";
        }
        if (i < 5) {
          tenYearEPS = "NA";
          fiveYearEPS = "NA";
        } else {
          tenYearEPS = "NA";
        }
      }
    }
    tenYearEPS =
      tenYearEPS === "NA"
        ? "NA"
        : Number.parseFloat(tenYearEPS / 9).toFixed(2) + " %";
    fiveYearEPS =
      fiveYearEPS === "NA"
        ? "NA"
        : Number.parseFloat(fiveYearEPS / 5).toFixed(2) + " %";

    return (
      <tr>
        <td>
          Δ EPS
          <ButtonToolbar className="m-2 d-inline">
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>(Change in earnings per share)</Tooltip>}
            >
              <FontAwesomeIcon icon="question-circle" />
            </OverlayTrigger>
          </ButtonToolbar>
        </td>
        <td>{oneYearEPS}</td>
        <td>{fiveYearEPS}</td>
        <td>{tenYearEPS}</td>
      </tr>
    );
  }
}

export default DisplayEPSRow;
