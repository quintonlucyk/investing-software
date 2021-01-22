import React from "react";
import { connect } from "react-redux";

class DisplayProfileData extends React.Component {
  render() {
    if (this.props.profile?.profile == null) {
      return null;
    } else if (this.props.profile.Error === undefined) {
      return (
        <React.Fragment>
          <ul>
            <li>Company Name: {this.props.profile.profile.companyName}</li>
            <li>Price: ${this.props.profile.profile.price}</li>
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
});

export default connect(mapStateToProps)(DisplayProfileData);
