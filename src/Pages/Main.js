import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Data from '../Components/Data';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="App container" >
                <div className="row justify-content-center m-4">
                    <div className="col-6">
                        <InputGroup >
                            <FormControl
                                placeholder="Symbol"
                                aria-label="Symbol"
                                id="symbol-search"
                            />
                            <InputGroup.Append>
                                <Button >Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </div>
                <div className="row">
                    <Data symbol={this.symbol} />
                </div>
            </div>
        );
    }
}

export default Main;