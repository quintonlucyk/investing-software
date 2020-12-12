import {
  FETCH_PICK_DATA_SUCCESS,
  FETCH_PICK_DATA_ERROR,
  FETCH_PICK_DATA_STARTED,
} from "./Types";
// import { symbolsListCall } from "../APICalls/FinancialModellingPrep";
import { SampleFinSymbolsList } from "../APICalls/SampleFinSymbolsList";

// const inDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

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
  // const symbolsList = inDev ? SampleFinSymbolsList : await symbolsListCall();
  const symbolsList = SampleFinSymbolsList;

  if (!symbolsList.apiError) {
    dispatch(
      fetchPickDataSuccess({
        symbolsList,
      })
    );
  } else {
    dispatch(fetchPickDataError);
  }
};
