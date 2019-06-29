import React from "react";

class DisplayProfileData extends React.Component {
  render() {
    if (this.props.ratios == null) {
      return null;
    } else if (this.props.ratios.Error !== undefined) {
      return (
        <React.Fragment>
          <p>
            Shoots. Looks like something went wrong. Here is the error we got:
          </p>
          <p>{this.props.ratios.Error}</p>
        </React.Fragment>
      );
    } else {
      console.log(this.props.ratios);
      return (
        <React.Fragment>
          <ul>{/* <li>{this.props.ratios}</li> */}</ul>
        </React.Fragment>
      );
    }
  }
}

export default DisplayProfileData;
