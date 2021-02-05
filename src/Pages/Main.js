import React from "react";
import {
  Form,
  Button,
  ButtonToolbar,
  OverlayTrigger,
  Popover,
  Alert,
  Tabs,
  Tab,
} from "react-bootstrap";
import DisplayProfileData from "../Components/DisplayProfileData";
import DisplayMyTableData from "../Components/DisplayMyTableData";
import DisplayEllenTableData from "../Components/DisplayEllenTableData";
import DisplayPicks from "../Components/DisplayPicks";
import DisplayImportantStats from "../Components/DisplayImportantStats";
import DisplayRecommendation from "../Components/DisplayRecommendation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { fetchData } from "../Actions/DataAction";
import { fetchPickData, fetchPickBatch } from "../Actions/PickDataAction";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.symbolRef = React.createRef();
    this.state = {
      noSymbolSearch: false,
    };
  }

  componentDidMount() {
    this.props.fetchPickData();
  }

  componentDidUpdate(prevProps) {
    const {
      fetchedPickData: { symbolsList: prevSymbolsList },
    } = prevProps;
    const { fetchedPickData } = this.props;
    const { pickError, pickLoading, symbolsList } = fetchedPickData;
    if (
      !pickError &&
      !pickLoading &&
      symbolsList?.length > 0 &&
      symbolsList !== prevSymbolsList
    ) {
      this.props.fetchPickBatch(symbolsList);
    }
  }

  search = (event) => {
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
                  </Popover>
                }
              >
                <FontAwesomeIcon icon="question-circle" />
              </OverlayTrigger>
            </ButtonToolbar>
          </Form>
        </div>
        <Tabs className="w-100 d-flex justify-content-center mb-4">
          <Tab eventKey="1" title="Quinton">
            <div className="row justify-content-center mb-3 ">
              <DisplayProfileData />
            </div>
            <div className="row justify-content-center mb-3 ">
              <div className="col-xl-8 text-center">
                <DisplayMyTableData />
              </div>
            </div>
            <DisplayImportantStats />
            <DisplayRecommendation />
          </Tab>
          <Tab eventKey="2" title="Picks">
            <div className="row justify-content-center mb-3 ">
              <div className="col-xl-8 text-center">
                <DisplayPicks />
              </div>
            </div>
          </Tab>
          <Tab eventKey="3" title="Ellen">
            <div className="row justify-content-center mb-3 ">
              <div className="col-xl-8 text-center">
                <DisplayEllenTableData />
              </div>
            </div>
          </Tab>
        </Tabs>
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetchedData: state.fetchedData,
  fetchedPickData: state.fetchedPickData,
});

export default connect(mapStateToProps, {
  fetchData,
  fetchPickData,
  fetchPickBatch,
})(Main);
