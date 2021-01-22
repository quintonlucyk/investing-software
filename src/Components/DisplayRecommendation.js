import React from "react";
import Alert from "react-bootstrap/Alert";
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
      var growth = undefined;
      var growthInterval = undefined;
      if (
        this.props.income.financials[0] &&
        this.props.income.financials[0].EPS &&
        this.props.growth.growth[0]
      ) {
        const eps = parseFloat(this.props.income.financials[0].EPS);
        if (
          this.props.growth.growth[0][
            "10Y Shareholders Equity Growth (per Share)"
          ]
        ) {
          growth = parseFloat(
            this.props.growth.growth[0][
              "10Y Shareholders Equity Growth (per Share)"
            ]
          );
          growthInterval = 10;
        }
        if (
          this.props.growth.growth[0][
            "5Y Shareholders Equity Growth (per Share)"
          ]
        ) {
          growth =
            growth !== undefined
              ? Math.min(
                  growth,
                  parseFloat(
                    this.props.growth.growth[0][
                      "5Y Shareholders Equity Growth (per Share)"
                    ]
                  )
                )
              : parseFloat(
                  this.props.growth.growth[0][
                    "5Y Shareholders Equity Growth (per Share)"
                  ]
                );
          if (
            growth ===
            parseFloat(
              this.props.growth.growth[0][
                "5Y Shareholders Equity Growth (per Share)"
              ]
            )
          ) {
            growthInterval = 5;
          }
        }
        if (
          this.props.growth.growth[0][
            "3Y Shareholders Equity Growth (per Share)"
          ]
        ) {
          growth =
            growth !== undefined
              ? Math.min(
                  growth,
                  parseFloat(
                    this.props.growth.growth[0][
                      "3Y Shareholders Equity Growth (per Share)"
                    ]
                  )
                )
              : parseFloat(
                  this.props.growth.growth[0][
                    "3Y Shareholders Equity Growth (per Share)"
                  ]
                );
          if (
            growth ===
            parseFloat(
              this.props.growth.growth[0][
                "3Y Shareholders Equity Growth (per Share)"
              ]
            )
          ) {
            growthInterval = 3;
          }
        }
        const minPE =
          growth > 0
            ? Math.min(
                parseFloat(this.props.minPE),
                parseFloat(growth * 100 * 2)
              )
            : parseFloat(this.props.minPE);

        const futureEPS = eps * 3.056;
        const futureStockPrice = futureEPS * minPE;
        const stickerPrice = futureStockPrice / 4;
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
          {growth < 0 && (
            <div className="row justify-content-center mb-3 ">
              <Alert variant="danger">
                <div>
                  The company had a negative shareholders equity growth in the
                </div>
                <div>
                  last {growthInterval} years ({growth.toFixed(2)}), which I am
                  not including in their price. Beware.
                </div>
                <div>
                  My Number is now a result of their minPE instead of growth.
                </div>
              </Alert>
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
