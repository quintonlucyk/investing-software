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

    let heldByCommoners =
      (floatSharesRaw / sharesOutstandingRaw) * heldOutsiders;

    let tangibleBookValueForCommoners =
      tangibleBookValuePerShare * heldOutsiders * floatSharesRaw;

    let heldCommonDisplay = null;
    let tangibleBVDisplay = null;

    if (heldByCommoners > 0.8) {
      heldCommonDisplay = (
        <Alert variant="secondary">
          % By Commoners: {(heldByCommoners * 100).toFixed(2)}
        </Alert>
      );
    } else {
      heldCommonDisplay = (
        <Alert variant="danger">
          % By Commoners: {(heldByCommoners * 100).toFixed(2)}
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

    return (
      <>
        <div className="row justify-content-center mb-3 ">
          {heldCommonDisplay}
        </div>
        <div className="row justify-content-center mb-3 ">
          {tangibleBVDisplay}
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
