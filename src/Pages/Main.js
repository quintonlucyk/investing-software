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
import DisplayMyTableData from "../Components/DisplayMyTableData";
import DisplayEllenTableData from "../Components/DisplayEllenTableData";
import DisplayRecommendation from "../Components/DisplayRecommendation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { fetchData } from "../Actions/DataAction";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.symbolRef = React.createRef();
    // let key;
    // if (window.location.href.toLowerCase().includes("ellen")) {
    //   key = 2;
    // } else {
    //   key = 1;
    // }
    // console.log(key);
    this.state = {
      noSymbolSearch: false
      // key: key
    };
  }

  // setKey = key => {
  //   if (key === 2) {
  //     window.location.hash = "#ellen";
  //   } else {
  //     window.location.hash = "#";
  //   }
  //   console.log(window.location);
  //   this.setState({ key: key });
  // };

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
            Object.entries(this.props.fetchedData.profile).length === 0 && (
              <Alert variant="danger">
                <p className="m-0">Looks like we got an error on our side...</p>
              </Alert>
            )}
          {!this.state.noSymbolSearch &&
            this.props.fetchedData.profile &&
            Object.entries(this.props.fetchedData.profile).length !== 0 && (
              <Tabs className="w-100 d-flex justify-content-center mb-4">
                <Tab eventKey="1" title="Quinton">
                  <div className="row justify-content-center mb-3 ">
                    <DisplayProfileData />
                  </div>
                  <div className="row justify-content-center mb-3 ">
                    <DisplayMyTableData />
                  </div>
                  <DisplayRecommendation />
                </Tab>
                <Tab eventKey="2" title="Ellen">
                  <div className="row justify-content-center mb-3 ">
                    <DisplayEllenTableData />
                  </div>
                </Tab>
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
