import React from 'react';
import Data from '../Components/Data';
import DataTwo from '../Components/DataTwo';
import DataThree from '../Components/DataThree';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchedSymbol: ""
        }
        this.symbolRef = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ searchedSymbol: this.symbolRef.current.value.toUpperCase() });
    };

    render() {
        return (
            <div className="App container" >
                <div className="row justify-content-center m-4">
                    <div className="col-6">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" ref={this.symbolRef} placeholder="Enter symbol here" />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                {this.state.searchedSymbol && (
                    // <Data symbol={this.state.searchedSymbol} />
                    // <DataTwo symbol={this.state.searchedSymbol} />
                    <DataThree symbol={this.state.searchedSymbol} />
                )}
            </div>
        );
    }
}

export default Main;