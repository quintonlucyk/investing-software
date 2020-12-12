import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_STARTED,
  FETCH_DATA_ERROR,
} from "../Actions/Types";

const initialState = {
  error: false,
  loading: false,
  profile: null,
  metrics: null,
  balance: null,
  income: null,
  cash: null,
  growth: null,
  historicalPrice: null,
  historicalAdjusted: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case FETCH_DATA_STARTED:
      return {
        ...initialState,
        loading: true,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
