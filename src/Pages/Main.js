import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DisplayStockData from '../Components/DisplayStockData';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.symbolRef = React.createRef();
        this.state = {
            result: null
        }
    }

    search = async (event) => {
        event.preventDefault();
        const symbol = this.symbolRef.current.value.toUpperCase();
        try {
            const res = await fetch(`https://financialmodelingprep.com/api/v3/company/profile/${symbol}`);
            this.setState({result: await res.json()});
        } catch (error) {
            this.setState({result: {error: error}})
        }
    }

    render() {
        return (
            <div className="App container" >
                <div className="row justify-content-center m-4">
                        <Form inline onSubmit={this.search}>
                            <Form.Group>
                                <Form.Label className="m-2">Stock Symbol </Form.Label>
                                <Form.Control className="m-2" type="text" ref={this.symbolRef} placeholder="Enter symbol" />
                            </Form.Group>
                            <Button variant="primary" className="m-2" type="submit">
                                Submit
                            </Button>
                        </Form>
                </div>
                <div className="row justify-content-center m-4">
                    <DisplayStockData data={this.state.result} />
                </div>
            </div>
        );
    }
}

export default Main;