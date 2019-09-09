import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

class DisplayEllenTableData extends React.Component {
  render() {
    if (this.props.historicalAdjusted == null) {
      return null;
    } else if (this.props.historicalAdjusted.Error === undefined) {
      let tbody = new Array(10);
      for (let entry of tbody) {
        entry = new Array(6);
      }
      /**
       * tbody will follow structure as such:
       * [[date, dividend, low share, high yield, high share, low yield],
       * .
       * .
       * .
       * [date, dividend, low share, high yield, high share, low yield]]
       *
       */
      let tempYearOfDate = new Date();
      tempYearOfDate = tempYearOfDate.getYear() + 1900;
      for (let tempval in this.props.historicalAdjusted[
        "Time Series (Daily)"
      ]) {
        // come up with new traverse here

        if (tempval.substring(0, 4) < tempYearOfDate - 10) {
          break;
        } else {
          let entryInArray = tempYearOfDate - tempval.substring(0, 4);
        }
        console.log(tempval);
      }
      // for (let )
      // if (
      //   this.props.metrics.metrics[i] !== undefined &&
      //   this.props.balance.financials[i] !== undefined &&
      //   this.props.income.financials[i] !== undefined &&
      //   this.props.cash.financials[i] !== undefined &&
      //   (this.props.metrics.metrics[i].date ===
      //     this.props.cash.financials[i].date &&
      //     this.props.balance.financials[i].date ===
      //       this.props.cash.financials[i].date &&
      //     this.props.income.financials[i].date ===
      //       this.props.cash.financials[i].date)
      // ) {
      //   displayDate = this.props.cash.financials[i].date;
      //   parsedDate = new Date(this.props.cash.financials[i].date);
      //   priceDate = new Date(
      //     this.props.historicalPrice.historical[priceIndex].date
      //   );
      //   while (priceDate > parsedDate && priceIndex > 0) {
      //     priceDate = new Date(
      //       this.props.historicalPrice.historical[--priceIndex].date
      //     );
      //   }

      //   if (this.props.cash.financials[i + 1] === undefined) {
      //   } else {
      //     //set parsedDate to previous (next in array) year's date to analyse the past year's data
      //     parsedDate = new Date(this.props.cash.financials[i + 1].date);
      //     tempPrice = this.props.historicalPrice.historical[priceIndex].close;
      //     highPrice = tempPrice;
      //     lowPrice = tempPrice;
      //     //set high and low price
      //     while (priceDate > parsedDate && priceIndex > 0) {
      //       //update high and low price accordingly
      //       priceDate = new Date(
      //         this.props.historicalPrice.historical[--priceIndex].date
      //       );
      //       tempPrice = this.props.historicalPrice.historical[priceIndex]
      //         .close;
      //       if (tempPrice < lowPrice) {
      //         lowPrice = tempPrice;
      //       }
      //       if (tempPrice > highPrice) {
      //         highPrice = tempPrice;
      //       }
      //     }
      //   }

      // tbody.push(
      //   <tr key={displayDate}>
      //     <td>{displayDate}</td>
      //     <td>{this.props.income.financials[i]["Dividend per Share"]}</td>
      //     <td>{lowPrice}</td>
      //     <td>
      //       {(
      //         this.props.income.financials[i]["Dividend per Share"] / lowPrice
      //       ).toFixed(4)}
      //     </td>
      //     <td>{highPrice}</td>
      //     <td>
      //       {(
      //         this.props.income.financials[i]["Dividend per Share"] /
      //         highPrice
      //       ).toFixed(4)}
      //     </td>
      //   </tr>
      // );
      // }
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Dividend</th>
              <th>Low Share Price</th>
              <th>High Yield</th>
              <th>High Share Price</th>
              <th>Low Yield</th>
            </tr>
          </thead>
          <tbody>{tbody}</tbody>
        </Table>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  metrics: state.fetchedData.metrics,
  balance: state.fetchedData.balance,
  income: state.fetchedData.income,
  cash: state.fetchedData.cash,
  historicalPrice: state.fetchedData.historicalPrice,
  historicalAdjusted: state.fetchedData.historicalAdjusted
});

export default connect(mapStateToProps)(DisplayEllenTableData);
