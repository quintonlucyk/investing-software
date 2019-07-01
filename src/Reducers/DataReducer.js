import { FETCH_DATA } from "../Actions/Types";

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
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
