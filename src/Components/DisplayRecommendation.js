import React from "react";
import { Alert, OverlayTrigger, Popover } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

class DisplayRecommendation extends React.Component {
  render() {
    if (this.props.metrics?.metrics == null) {
      return null;
    } else if (
      this.props.profile.Error === undefined &&
      this.props.metrics.Error === undefined &&
      this.props.balance.Error === undefined &&
      this.props.income.Error === undefined &&
      this.props.cash.Error === undefined &&
      this.props.growth.Error === undefined
    ) {
      const price = parseFloat(this.props.profile.profile.price);

      let grahamAlert = null;
      if (
        this.props.metrics.metrics[0] &&
        this.props.metrics.metrics[0]["Graham Number"] !== "" &&
        this.props.metrics.metrics[0]["Graham Number"] !== "0.0"
      ) {
        const grahamPrice = parseFloat(
          this.props.metrics.metrics[0]["Graham Number"]
        );

        if (price < grahamPrice) {
          grahamAlert = (
            <Alert variant="success">
              Graham Number: ${Number.parseFloat(grahamPrice).toFixed(2)}
            </Alert>
          );
        } else {
          grahamAlert = (
            <Alert variant="secondary">
              Graham Number: ${Number.parseFloat(grahamPrice).toFixed(2)}
            </Alert>
          );
        }
      }
      let myAlert = null;
      var minGrowth = undefined;
      var growthInterval = undefined;
      if (
        this.props.income.financials[0] &&
        this.props.income.financials[0].EPS &&
        this.props.growth.growth[0]
      ) {
        const eps = parseFloat(this.props.income.financials[0].EPS);
        const tenYearGrowth = this.props.growth.growth[0][
          "10Y Shareholders Equity Growth (per Share)"
        ];
        const fiveYearGrowth = this.props.growth.growth[0][
          "5Y Shareholders Equity Growth (per Share)"
        ];
        const threeYearGrowth = this.props.growth.growth[0][
          "3Y Shareholders Equity Growth (per Share)"
        ];
        var equityGrowthData = [];
        if (tenYearGrowth) {
          equityGrowthData.unshift(
            `10Y: ${parseFloat(tenYearGrowth).toFixed(2)}`
          );
          minGrowth = parseFloat(tenYearGrowth);
          growthInterval = 10;
        }
        if (fiveYearGrowth) {
          equityGrowthData.unshift(
            `5Y: ${parseFloat(fiveYearGrowth).toFixed(2)}`
          );
          minGrowth =
            minGrowth !== undefined
              ? Math.min(minGrowth, parseFloat(fiveYearGrowth))
              : parseFloat(fiveYearGrowth);
          if (minGrowth === parseFloat(fiveYearGrowth)) {
            growthInterval = 5;
          }
        }
        if (threeYearGrowth) {
          equityGrowthData.unshift(
            `3Y: ${parseFloat(threeYearGrowth).toFixed(2)}`
          );
          minGrowth =
            minGrowth !== undefined
              ? Math.min(minGrowth, parseFloat(threeYearGrowth))
              : parseFloat(threeYearGrowth);
          if (minGrowth === parseFloat(threeYearGrowth)) {
            growthInterval = 3;
          }
        }

        const valueEstimate = eps * this.props.minPE;
        const valueInTenYears =
          minGrowth > 0
            ? valueEstimate * Math.pow(minGrowth, 10)
            : valueEstimate * Math.pow(1.05, 10);
        const stickerPrice = valueInTenYears / Math.pow(1.15, 10);
        const myPrice = stickerPrice * 0.6;

        if (price < myPrice) {
          myAlert = (
            <Alert variant="success">
              My Number: ${Number.parseFloat(myPrice).toFixed(2)}
            </Alert>
          );
        } else {
          myAlert = (
            <Alert variant="secondary">
              My Number: ${Number.parseFloat(myPrice).toFixed(2)}
            </Alert>
          );
        }
      }

      return (
        <React.Fragment>
          {grahamAlert !== null ? (
            <div className="row justify-content-center mb-3 ">
              {grahamAlert}
            </div>
          ) : null}
          {myAlert !== null ? (
            <div className="row justify-content-center mb-3 ">{myAlert}</div>
          ) : null}
          {minGrowth <= 0 && (
            <div className="row justify-content-center mb-3 ">
              <Alert variant="danger" className="text-center">
                <div>
                  The company had negative shareholders equity growth per share
                  in the
                </div>
                <div>
                  last {growthInterval} years ({minGrowth.toFixed(2)}), which is
                  not being not including in their price.
                </div>
                <div>Beware. I am instead assuming 5% company growth.</div>
                <pre>Growth rates: {JSON.stringify(equityGrowthData)}</pre>
              </Alert>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Popover id="popover-basic">
                    Using the negative growth could make My Number -3000 or
                    something, which totally assumes the company will only do
                    awful consitently.
                  </Popover>
                }
              >
                <FontAwesomeIcon icon="question-circle" />
              </OverlayTrigger>
            </div>
          )}
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  profile: state.fetchedData.profile,
  metrics: state.fetchedData.metrics,
  balance: state.fetchedData.balance,
  income: state.fetchedData.income,
  cash: state.fetchedData.cash,
  growth: state.fetchedData.growth,
  minPE: state.minPE,
});

export default connect(mapStateToProps)(DisplayRecommendation);
