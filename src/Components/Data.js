import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.props.symbol}&interval=5min&apikey=DG61VKY2XF1OVBWJ`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else if (items["Meta Data"]) {
            return (
                <ListGroup variant="flush">
                    <ListGroup.Item>{`1. Information: ${items["Meta Data"][["1. Information"]]}`}</ListGroup.Item>
                    <ListGroup.Item>{`2. Symbol: ${items["Meta Data"][["2. Symbol"]]}`}</ListGroup.Item>
                    <ListGroup.Item>{`3. Last Refreshed: ${items["Meta Data"][["3. Last Refreshed"]]}`}</ListGroup.Item>
                    <ListGroup.Item>{`4. Interval: ${items["Meta Data"][["4. Interval"]]}`}</ListGroup.Item>
                    <ListGroup.Item>{`5. Output Size: ${items["Meta Data"][["5. Output Size"]]}`}</ListGroup.Item>
                </ListGroup>
            );
        } else if (items["Error Message"]) {
            return (
                <ListGroup>
                    <ListGroup.Item variant="danger">No Luck for That Symbol</ListGroup.Item>
                </ListGroup>
            );
        } else {
            return null;
        }
    }
}

export default Data;