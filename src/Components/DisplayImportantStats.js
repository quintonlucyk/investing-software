import React from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";

class DisplayImportantStats extends React.Component {
  render() {
    if (this.props.statistics?.defaultKeyStatistics == null) {
      return null;
    }

    let heldInsideRaw = this.props.statistics.defaultKeyStatistics
      .heldPercentInsiders?.raw;

    let floatSharesRaw = this.props.statistics.defaultKeyStatistics.floatShares
      ?.raw;

    let sharesOutstandingRaw = this.props.statistics.defaultKeyStatistics
      .sharesOutstanding?.raw;

    let floatOverOutstanding = floatSharesRaw / sharesOutstandingRaw;

    let heldCommonDisplay = null;
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
          {floatOverDisplay}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  statistics: state.fetchedData.statistics,
});

export default connect(mapStateToProps)(DisplayImportantStats);
