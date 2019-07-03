import { SET_MIN_PE } from "../Actions/Types";

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MIN_PE:
      return action.payload;
    default:
      return state;
  }
}
