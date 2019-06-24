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
        fetch(`https://cloud-sse.iexapis.com/stable/stocksUS?token=pk_4d65f48c062e4b32addd9bb185f608a6&symbols=${this.props.symbol}`)
            //https://cloud.iexapis.com/stable/stock/${this.props.symbol}/quote?token=pk_4d65f48c062e4b32addd9bb185f608a6
            //https://cloud-sse.iexapis.com/stable/stocksUS?token=YOUR_TOKEN&symbols=spy
            //pk_4d65f48c062e4b32addd9bb185f608a6
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
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
            console.log(items);
            return <div>Success</div>;
        }
    }
}

export default Data;