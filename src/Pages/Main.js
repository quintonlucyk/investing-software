import React from "react";
import {
  Form,
  Button,
  ButtonToolbar,
  OverlayTrigger,
  Popover
} from "react-bootstrap";
import DisplayProfileData from "../Components/DisplayProfileData";
import DisplayTableData from "../Components/DisplayTableData";
import {
  profileCall,
  metricsCall,
  balanceCall
} from "../APICalls/FinancialModellingPrep";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.symbolRef = React.createRef();
    this.state = {
      loading: false,
      profile: null,
      metrics: null,
      balance: null
    };
  }

  search = async event => {
    event.preventDefault();
    const symbol = this.symbolRef.current.value.toUpperCase();
    this.setState({
      loading: true,
      profile: null,
      metrics: null,
      balance: null
    });
    const profile = await profileCall(symbol);
    const metrics = await metricsCall(symbol);
    const balance = await balanceCall(symbol);
    this.setState({
      loading: false,
      profile: profile,
      metrics: metrics,
      balance: balance
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
                    Good things come to those who wait.
                    <span role="img" aria-label="Smiley face">
                      😊
                    </span>
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
          <DisplayTableData
            metrics={this.state.metrics}
            balance={this.state.balance}
          />
        </div>
      </div>
    );
  }
}

export default Main;
