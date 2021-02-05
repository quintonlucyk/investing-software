import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const initialState = {
  fetchedData: {
    error: false,
    loading: false,
    pickError: false,
    pickLoading: false,
    profile: null,
    metrics: null,
    balance: null,
    income: null,
    cash: null,
    growth: null,
    statistics: null,
    historicalPrice: null,
    historicalAdjusted: null,
  },
  fetchedPickData: {
    pickError: false,
    pickLoading: false,
    symbolsList: null,
  },
  fetchedPickBatch: {
    batchError: false,
    batchLoading: false,
    batchData: null,
  },
  minPE: null,
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
