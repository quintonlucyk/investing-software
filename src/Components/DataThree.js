import React from 'react';

class DataThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        console.log(this.props.symbol);
        fetch(`https://api-v2.intrinio.com/companies/${this.props.symbol}?api_key=OmQxOTk5MGUxYzIyNzhjOTZlMjdhZTBlNmJiMWI4MDY2`)
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

export default DataThree;