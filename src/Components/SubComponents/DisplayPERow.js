import React from "react";
import { ButtonToolbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DisplayPERow extends React.Component {
  render() {
    let tenYearPE = 0;
    let fiveYearPE = 0;
    let oneYearPE = 0;
    for (let i = 0; i < 10; ++i) {
      if (i === this.props.metrics.metrics.length) {
        if (i < 1) {
          oneYearPE = "NA";
          tenYearPE = "NA";
          fiveYearPE = "NA";
        }
        if (i < 5) {
          tenYearPE = "NA";
          fiveYearPE = "NA";
        } else {
          tenYearPE = "NA";
        }
      } else if (
        this.props.metrics.metrics[i] &&
        this.props.metrics.metrics[i] &&
        this.props.metrics.metrics[i]["PE ratio"] !== ""
      ) {
        let float = parseFloat(this.props.metrics.metrics[i]["PE ratio"]);
        if (i < 1) {
          tenYearPE += float;
          fiveYearPE += float;
          oneYearPE = Number.parseFloat(float).toFixed(2);
        } else if (i < 5) {
          tenYearPE += float;
          fiveYearPE += float;
        } else if (i < 10) {
          tenYearPE += float;
        } else {
          break;
        }
      } else {
        if (i < 1) {
          oneYearPE = "NA";
          tenYearPE = "NA";
          fiveYearPE = "NA";
        }
        if (i < 5) {
          tenYearPE = "NA";
          fiveYearPE = "NA";
        } else {
          tenYearPE = "NA";
        }
      }
    }
    tenYearPE =
      tenYearPE === "NA" ? "NA" : Number.parseFloat(tenYearPE / 10).toFixed(2);
    fiveYearPE =
      fiveYearPE === "NA" ? "NA" : Number.parseFloat(fiveYearPE / 5).toFixed(2);

    return (
      <tr>
        <td>
          PE Ratio
          <ButtonToolbar className="m-2 d-inline">
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip>
                  (Ratio of the share price to the earnings per share)
                </Tooltip>
              }
            >
              <FontAwesomeIcon icon="question-circle" />
            </OverlayTrigger>
          </ButtonToolbar>
        </td>
        <td>{oneYearPE}</td>
        <td>{fiveYearPE}</td>
        <td>{tenYearPE}</td>
      </tr>
    );
  }
}

export default DisplayPERow;
