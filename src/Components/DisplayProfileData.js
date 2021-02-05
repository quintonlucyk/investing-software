import React from "react";
import { connect } from "react-redux";

class DisplayProfileData extends React.Component {
  render() {
    if (this.props.profile?.profile == null) {
      return null;
    } else if (this.props.profile.Error === undefined) {
      let price = this.props.profile.profile.price;
      let tangibleBookValuePerShare = parseFloat(
        this.props.metrics?.metrics[0]["Tangible Book Value per Share"]
      );

      let pOverBV = (parseFloat(price) / tangibleBookValuePerShare).toFixed(2);

      return (
        <React.Fragment>
          <ul>
            <li>Company Name: {this.props.profile.profile.companyName}</li>
            <li>Price: ${price}</li>
            <li>Price/NTB: {pOverBV || "unavail"}</li>
            <li>Industry: {this.props.profile.profile.industry}</li>
          </ul>
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
});

export default connect(mapStateToProps)(DisplayProfileData);
