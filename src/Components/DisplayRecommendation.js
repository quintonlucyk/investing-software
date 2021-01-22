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
        var eps = parseFloat(this.props.income.financials[0].EPS);
        let tenYearGrowth =
          parseFloat(
            this.props.growth.growth[0][
              "10Y Shareholders Equity Growth (per Share)"
            ]
          ) || undefined;

        let fiveYearGrowth =
          parseFloat(
            this.props.growth.growth[0][
              "5Y Shareholders Equity Growth (per Share)"
            ]
          ) || undefined;

        let threeYearGrowth =
          parseFloat(
            this.props.growth.growth[0][
              "3Y Shareholders Equity Growth (per Share)"
            ]
          ) || undefined;
        tenYearGrowth =
          tenYearGrowth > 0
            ? Math.pow(1 + tenYearGrowth, 1 / 10) - 1
            : tenYearGrowth;
        fiveYearGrowth =
          fiveYearGrowth > 0
            ? Math.pow(1 + fiveYearGrowth, 1 / 5) - 1
            : fiveYearGrowth;
        threeYearGrowth =
          threeYearGrowth > 0
            ? Math.pow(1 + threeYearGrowth, 1 / 3) - 1
            : threeYearGrowth;

        var equityGrowthData = [];
        if (tenYearGrowth) {
          equityGrowthData.unshift(`10Y: ${tenYearGrowth.toFixed(2)}`);
          minGrowth = tenYearGrowth;
          growthInterval = 10;
        }
        if (fiveYearGrowth) {
          equityGrowthData.unshift(`5Y: ${fiveYearGrowth.toFixed(2)}`);
          minGrowth =
            minGrowth !== undefined
              ? Math.min(minGrowth, fiveYearGrowth)
              : fiveYearGrowth;
          if (minGrowth === fiveYearGrowth) {
            growthInterval = 5;
          }
        }
        if (threeYearGrowth) {
          equityGrowthData.unshift(`3Y: ${threeYearGrowth.toFixed(2)}`);
          minGrowth =
            minGrowth !== undefined
              ? Math.min(minGrowth, threeYearGrowth)
              : threeYearGrowth;
          if (minGrowth === threeYearGrowth) {
            growthInterval = 3;
          }
        }

        if (this.props.minPE > 0 || eps > 0) {
          // Don't want to show a number if both neg
          const valueEstimate = eps * this.props.minPE;
          const valueInTenYears =
            minGrowth > 0
              ? valueEstimate * Math.pow(1 + minGrowth, 10)
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
      }

      return (
        <React.Fragment>
          {grahamAlert !== null ? (
            <div className="row justify-content-center mb-3 ">
              {grahamAlert}
            </div>
          ) : null}
          {myAlert !== null ? (
            <>
              <div className="row justify-content-center mb-3 ">{myAlert}</div>
              <div className="row justify-content-center mb-3 text-center">
                <Alert variant="secondary">
                  <div>AverageEquityGrowthPerShare/year if positive</div>
                  <div>Overall change if negative:</div>
                  <pre>{JSON.stringify(equityGrowthData)}</pre>
                  <pre>
                    {JSON.stringify({
                      minPE: this.props.minPE,
                      eps: eps.toFixed(2),
                    })}
                  </pre>
                </Alert>
              </div>
              {minGrowth <= 0 && (
                <div className="row justify-content-center mb-3 ">
                  <Alert variant="danger" className="text-center">
                    <div>
                      Due to negative EGPS. I am instead assuming 5% growth.
                      Beware!
                    </div>
                  </Alert>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Popover id="popover-basic">
                        Using the negative growth rate which happened in the
                        last
                        {" " + growthInterval} years could make My Number
                        something like -3000.
                      </Popover>
                    }
                  >
                    <FontAwesomeIcon icon="question-circle" />
                  </OverlayTrigger>
                </div>
              )}
            </>
          ) : null}
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
