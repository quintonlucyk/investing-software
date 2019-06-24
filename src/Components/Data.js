import React from 'react';

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
        fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=DG61VKY2XF1OVBWJ")
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
        } else {
            return (
                <ul>
                    {console.log(items["Meta Data"])}
                    <li>{`1. Information: ${items["Meta Data"][["1. Information"]]}`}</li>
                    <li>{`2. Symbol: ${items["Meta Data"][["2. Symbol"]]}`}</li>
                    <li>{`3. Last Refreshed: ${items["Meta Data"][["3. Last Refreshed"]]}`}</li>
                    <li>{`4. Interval: ${items["Meta Data"][["4. Interval"]]}`}</li>
                    <li>{`5. Output Size: ${items["Meta Data"][["5. Output Size"]]}`}</li>
                    <li>{`6. Time Zone: ${items["Meta Data"][["6. Time Zone"]]}`}</li>
                </ul>
            );
        }
    }
}

export default Data;