import React from "react";
import { Alert } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

class DisplayImportantStats extends React.Component {
  render() {
    console.log(this.props.metrics);
    console.log(this.props.statistics);
    if (
      this.props.metrics?.metrics == null ||
      this.props.statistics?.defaultKeyStatistics == null
    ) {
      return null;
    }

    let heldInsideRaw = this.props.statistics.defaultKeyStatistics
      .heldPercentInsiders?.raw;

    let floatSharesRaw = this.props.statistics.defaultKeyStatistics.floatShares
      ?.raw;

    let sharesOutstandingRaw = this.props.statistics.defaultKeyStatistics
      .sharesOutstanding?.raw;

    let tangibleBookValuePerShare = parseFloat(
      this.props.metrics?.metrics[0]["Tangible Book Value per Share"]
    );

    let heldOutsiders = 1 - heldInsideRaw;

    let floatOverOutstanding = floatSharesRaw / sharesOutstandingRaw;

    let tangibleBookValueForCommoners =
      tangibleBookValuePerShare * heldOutsiders * floatSharesRaw;

    let heldCommonDisplay = null;
    let tangibleBVDisplay = null;
    let floatOverDisplay = null;

    if (heldInsideRaw < 0.2) {
      heldCommonDisplay = (
        <Alert variant="secondary">
          % Held By Insiders: {(heldInsideRaw * 100).toFixed(2)}
        </Alert>
      );
    } else {
      heldCommonDisplay = (
        <Alert variant="danger">
          % Held By Insiders: {(heldInsideRaw * 100).toFixed(2)}
        </Alert>
      );
    }

    if (tangibleBookValueForCommoners > 1e8) {
      tangibleBVDisplay = (
        <Alert variant="secondary">
          Tangible BV (100M): $
          {(tangibleBookValueForCommoners / 1e8).toFixed(2)}
        </Alert>
      );
    } else {
      tangibleBVDisplay = (
        <Alert variant="danger">
          Tangible BV (100M): $
          {(tangibleBookValueForCommoners / 1e8).toFixed(2)}
        </Alert>
      );
    }

    if (floatOverOutstanding > 0.8) {
      floatOverDisplay = (
        <Alert variant="secondary">
          % Float / Shares Out.: {(floatOverOutstanding * 100).toFixed(2)}
        </Alert>
      );
    } else {
      floatOverDisplay = (
        <Alert variant="danger">
          % Float / Shares Out.: {(floatOverOutstanding * 100).toFixed(2)}
        </Alert>
      );
    }

    return (
      <>
        <div className="row justify-content-center mb-3 ">
          {heldCommonDisplay}
        </div>
        <div className="row justify-content-center mb-3 ">
          {tangibleBVDisplay}
        </div>
        <div className="row justify-content-center mb-3 ">
          {floatOverDisplay}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  metrics: state.fetchedData.metrics,
  statistics: state.fetchedData.statistics,
});

export default connect(mapStateToProps)(DisplayImportantStats);
