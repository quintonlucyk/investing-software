import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const initialState = {
  error: false,
  loading: false,
  profile: null,
  metrics: null,
  balance: null,
  income: null,
  cash: null,
  growth: null
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
