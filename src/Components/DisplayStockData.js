import React from 'react';

class DisplayStockData extends React.Component {
    render(){
        if (this.props.data == null) {
            return (
                <p>Excited to pull some data for you!</p>
            );
        } else if (this.props.data.error !== undefined) {
            return (
                <React.Fragment>
                    <p>Shoots, looks like something went wrong. Here is the error you got</p>
                    <p>{this.props.data.error}</p>
                </React.Fragment>
            );
        } else {
            return (
                <p>Success on the call!</p>
            );
        }
    }
}

export default DisplayStockData;