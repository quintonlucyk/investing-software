import {
  FETCH_PICK_DATA_SUCCESS,
  FETCH_PICK_DATA_ERROR,
  FETCH_PICK_DATA_STARTED,
} from "./Types";

import { symbolListCall } from "../APICalls/FinancialModellingPrep";

const fetchPickDataError = () => {
  return { type: FETCH_PICK_DATA_ERROR };
};

const fetchPickDataStarted = () => {
  return { type: FETCH_PICK_DATA_STARTED };
};

const fetchPickDataSuccess = (data) => {
  return { type: FETCH_PICK_DATA_SUCCESS, payload: data };
};

export const fetchPickData = () => async (dispatch) => {
  dispatch(fetchPickDataStarted());
  const symbolList = await symbolListCall();

  if (!symbolList.apiError) {
    dispatch(
      fetchPickDataSuccess({
        symbolList,
      })
    );
  } else {
    dispatch(fetchPickDataError);
  }
};
