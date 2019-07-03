import React from "react";
import { ButtonToolbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

class DisplayROICRow extends React.Component {
  render() {
    let tenYearRoic = 0;
    let fiveYearRoic = 0;
    let oneYearRoic = 0;
    for (let i = 0; i < 10; ++i) {
      if (i === this.props.metrics.metrics.length) {
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
      } else if (
        this.props.metrics.metrics[i] &&
        this.props.metrics.metrics[i].ROIC &&
        this.props.metrics.metrics[i].ROIC !== ""
      ) {
        let float = parseFloat(this.props.metrics.metrics[i].ROIC) * 100;
        if (i < 1) {
          tenYearRoic += float;
          fiveYearRoic += float;
          oneYearRoic = Number.parseFloat(float).toFixed(2) + " %";
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
    }
    tenYearRoic =
      tenYearRoic === "NA"
        ? "NA"
        : Number.parseFloat(tenYearRoic / 10).toFixed(2) + " %";
    fiveYearRoic =
      fiveYearRoic === "NA"
        ? "NA"
        : Number.parseFloat(fiveYearRoic / 5).toFixed(2) + " %";

    return (
      <tr>
        <td>
          ROIC
          <ButtonToolbar className="m-2 d-inline">
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>(Return on invested capital)</Tooltip>}
            >
              <FontAwesomeIcon icon="question-circle" />
            </OverlayTrigger>
          </ButtonToolbar>
        </td>
        {oneYearRoic[0] === "-" ? (
          <td className="negative-number">{oneYearRoic}</td>
        ) : (
          <td>{oneYearRoic}</td>
        )}
        {fiveYearRoic[0] === "-" ? (
          <td className="negative-number">{fiveYearRoic}</td>
        ) : (
          <td>{fiveYearRoic}</td>
        )}
        {tenYearRoic[0] === "-" ? (
          <td className="negative-number">{tenYearRoic}</td>
        ) : (
          <td>{tenYearRoic}</td>
        )}
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  metrics: state.fetchedData.metrics
});

export default connect(mapStateToProps)(DisplayROICRow);
