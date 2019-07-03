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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { fetchData } from "../Actions/DataAction";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.symbolRef = React.createRef();
    this.state = {
      noSymbolSearch: false
    };
  }

  search = event => {
    event.preventDefault();
    if (this.symbolRef.current.value !== "") {
      this.setState({ noSymbolSearch: false });
      const symbol = this.symbolRef.current.value.toUpperCase();
      this.props.fetchData(symbol);
    } else {
      this.setState({ noSymbolSearch: true });
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
          {this.state.noSymbolSearch && (
            <Alert variant="danger">
              <p className="m-0">
                You need to enter a stock symbol to search for.
              </p>
            </Alert>
          )}
          {console.log("this.props", this.props)}
          {!this.state.noSymbolSearch && this.props.fetchedData.loading && (
            <FontAwesomeIcon className="fa-spin" size="lg" icon="spinner" />
          )}
          {!this.state.noSymbolSearch &&
            this.props.fetchedData.profile &&
            this.props.fetchedData.profile.apiError && (
              <Alert variant="danger">
                <p className="m-0">
                  Looks like we got an error from where the data comes from...
                </p>
              </Alert>
            )}
          {!this.state.noSymbolSearch &&
            this.props.fetchedData.profile &&
            this.props.fetchedData.profile.Error && (
              <React.Fragment>
                <p>
                  Shoots. Looks like something went wrong. Here is the error we
                  got:
                </p>
                <p>{this.props.fetchedData.profile.Error}</p>
              </React.Fragment>
            )}
          {!this.state.noSymbolSearch &&
            this.props.fetchedData.profile &&
            !this.props.fetchedData.profile.Error && (
              <Tabs
                defaultActiveKey="quinton"
                className="w-100 d-flex justify-content-center mb-4"
              >
                <Tab eventKey="quinton" title="Quinton">
                  <div className="row justify-content-center mb-3 ">
                    <DisplayProfileData />
                  </div>
                  <div className="row justify-content-center mb-3 ">
                    <DisplayTableData />
                  </div>
                  <div className="row justify-content-center mb-3 ">
                    <DisplayRecommendation />
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

const mapStateToProps = state => ({
  fetchedData: state.fetchedData
});

export default connect(
  mapStateToProps,
  { fetchData }
)(Main);
