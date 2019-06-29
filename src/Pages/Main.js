import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DisplayProfileData from '../Components/DisplayProfileData';
import { profileCall, ratiosCall } from '../APICalls/FinancialModellingPrep';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner);

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.symbolRef = React.createRef();
        this.state = {
            loading: false,
            profile: null,
            ratios: null,
        }
    }

    search = async (event) => {
        event.preventDefault();
        const symbol = this.symbolRef.current.value.toUpperCase();
        this.setState({
            loading: true,
            profile: null,
            ratios: null,
        });
        const profile = await profileCall(symbol);
        const ratios = await ratiosCall(symbol);
        console.log('profile', profile);
        console.log('ratios', ratios);
        this.setState({
            loading: false,
            profile: profile,
            ratios: ratios
        });
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
                    {this.state.loading && (
                        <FontAwesomeIcon className="fa-spin" size="lg" icon="spinner" />
                    )}
                    <DisplayProfileData profile={this.state.profile} />
                </div>
            </div>
        );
    }
}

export default Main;