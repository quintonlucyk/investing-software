import React from "react";
import {
  Form,
  Button,
  ButtonToolbar,
  OverlayTrigger,
  Popover
} from "react-bootstrap";
import DisplayProfileData from "../Components/DisplayProfileData";
import DisplayMetricsData from "../Components/DisplayMetricsData";
import { profileCall, metricsCall } from "../APICalls/FinancialModellingPrep";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner, faQuestionCircle);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.symbolRef = React.createRef();
    this.state = {
      loading: false,
      profile: null,
      metrics: null
    };
  }

  search = async event => {
    event.preventDefault();
    const symbol = this.symbolRef.current.value.toUpperCase();
    this.setState({
      loading: true,
      profile: null,
      metrics: null
    });
    const profile = await profileCall(symbol);
    const metrics = await metricsCall(symbol);
    this.setState({
      loading: false,
      profile: profile,
      metrics: metrics
    });
  };

  render() {
    return (
      <div className="App container">
        <div className="row justify-content-center m-4">
          <Form inline onSubmit={this.search}>
            <Form.Group>
              <Form.Label className="m-2">Stock Symbol </Form.Label>
              <Form.Control
                className="m-2"
                type="text"
                ref={this.symbolRef}
                placeholder="Enter symbol"
              />
            </Form.Group>
            <Button variant="primary" className="m-2" type="submit">
              Submit
            </Button>
            <ButtonToolbar className="m-2">
              <OverlayTrigger
                placement="right"
                overlay={
                  <Popover id="popover-basic" title="What is this all about?">
                    Easier company evaluation
                  </Popover>
                }
              >
                <FontAwesomeIcon icon="question-circle" />
              </OverlayTrigger>
            </ButtonToolbar>
          </Form>
        </div>
        <div className="row justify-content-center m-4">
          {this.state.loading && (
            <FontAwesomeIcon className="fa-spin" size="lg" icon="spinner" />
          )}
          <DisplayProfileData profile={this.state.profile} />
          <DisplayMetricsData metrics={this.state.metrics} />
        </div>
      </div>
    );
  }
}

export default Main;
