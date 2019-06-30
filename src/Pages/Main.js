import React from "react";
import {
  Form,
  Button,
  ButtonToolbar,
  OverlayTrigger,
  Popover,
  Alert,
  Tabs,
  Tab
} from "react-bootstrap";
import DisplayProfileData from "../Components/DisplayProfileData";
import DisplayTableData from "../Components/DisplayTableData";
import DisplayRecommendation from "../Components/DisplayRecommendation";
import {
  profileCall,
  metricsCall,
  balanceCall,
  incomeCall,
  cashCall
} from "../APICalls/FinancialModellingPrep";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.symbolRef = React.createRef();
    this.state = {
      error: false,
      loading: false,
      profile: null,
      metrics: null,
      balance: null,
      income: null,
      cash: null
    };
  }

  search = async event => {
    event.preventDefault();
    if (this.symbolRef.current.value !== "") {
      const symbol = this.symbolRef.current.value.toUpperCase();
      this.setState({
        error: false,
        loading: true,
        profile: null,
        metrics: null,
        balance: null,
        income: null,
        cash: null
      });
      const profile = await profileCall(symbol);
      const metrics = await metricsCall(symbol);
      const balance = await balanceCall(symbol);
      const income = await incomeCall(symbol);
      const cash = await cashCall(symbol);
      this.setState({
        loading: false,
        profile: profile,
        metrics: metrics,
        balance: balance,
        income: income,
        cash: cash
      });
    } else {
      this.setState({
        error: true,
        loading: false,
        profile: null,
        metrics: null,
        balance: null,
        income: null,
        cash: null
      });
    }
  };

  render() {
    return (
      <div className="App container">
        <div className="row justify-content-center m-4">
          <Form inline onSubmit={this.search}>
            <Form.Group>
              <Form.Label className="m-2">Stock Symbol</Form.Label>
              <Form.Control
                className="m-2"
                type="text"
                ref={this.symbolRef}
                placeholder="(e.g. 'aapl')"
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
          {this.state.error && (
            <Alert variant="danger">
              <p className="m-0">
                You need to enter a stock symbol to search for.
              </p>
            </Alert>
          )}
          {this.state.loading && (
            <FontAwesomeIcon className="fa-spin" size="lg" icon="spinner" />
          )}
          {this.state.metrics && (
            <Tabs defaultActiveKey="quinton" className="w-100">
              <Tab eventKey="quinton" title="Quinton">
                <div className="row justify-content-center">
                  <DisplayProfileData profile={this.state.profile} />
                  <DisplayTableData
                    metrics={this.state.metrics}
                    balance={this.state.balance}
                    income={this.state.income}
                    cash={this.state.cash}
                  />
                  <DisplayRecommendation
                    profile={this.state.profile}
                    metrics={this.state.metrics}
                    balance={this.state.balance}
                    income={this.state.income}
                    cash={this.state.cash}
                  />
                </div>
              </Tab>
              <Tab eventKey="ellen" title="Ellen" />
            </Tabs>
          )}
        </div>
      </div>
    );
  }
}

export default Main;
