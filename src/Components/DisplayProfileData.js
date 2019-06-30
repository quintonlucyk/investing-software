import React from "react";

class DisplayProfileData extends React.Component {
  render() {
    if (this.props.profile == null) {
      return null;
    } else if (this.props.profile.Error !== undefined) {
      return (
        <React.Fragment>
          <p>
            Shoots. Looks like something went wrong. Here is the error we got:
          </p>
          <p>{this.props.profile.Error}</p>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <ul>
            <li>Company Name: {this.props.profile.profile.companyName}</li>
            <li>Price: ${this.props.profile.profile.price}</li>
            <li>
              Changes (%): ${this.props.profile.profile.changes}{" "}
              {this.props.profile.profile.changesPercentage}
            </li>
            <li>Exchange: {this.props.profile.profile.exchange}</li>
            <li>Industry: {this.props.profile.profile.industry}</li>
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default DisplayProfileData;
