import { SET_MIN_PE } from "./Types";

export const setMinPE = pe => dispatch => {
  dispatch({ type: SET_MIN_PE, payload: pe });
};
