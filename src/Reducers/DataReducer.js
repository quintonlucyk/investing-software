import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_ERROR
} from "../Actions/Types";

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

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case FETCH_DATA_START:
      return {
        ...state,
        data: action.payload
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
