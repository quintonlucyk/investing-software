import {
  FETCH_PICK_DATA_SUCCESS,
  FETCH_PICK_DATA_ERROR,
  FETCH_PICK_DATA_STARTED,
  FETCH_PICK_BATCH_SUCCESS,
  FETCH_PICK_BATCH_ERROR,
  FETCH_PICK_BATCH_STARTED,
} from "./Types";
import { symbolsListCall } from "../APICalls/FinancialModellingPrep"; //batchCall
import { SampleSymbolsList } from "../APICalls/SampleSymbolsList";

const inDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

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
  const symbolsList = inDev ? SampleSymbolsList : await symbolsListCall();

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

const fetchPickBatchError = () => {
  return { type: FETCH_PICK_BATCH_ERROR };
};

const fetchPickBatchStarted = () => {
  return { type: FETCH_PICK_BATCH_STARTED };
};

const fetchPickBatchSuccess = (data) => {
  return { type: FETCH_PICK_BATCH_SUCCESS, payload: data };
};

export const fetchPickBatch = (symbols) => async (dispatch) => {
  dispatch(fetchPickBatchStarted());
  // const symbolsList = inDev ? SampleSymbolsList : await symbolsListCall();
  const batchData = {}; //await batchCall(symbols);

  if (!batchData.apiError) {
    dispatch(
      fetchPickBatchSuccess({
        batchData,
      })
    );
  } else {
    dispatch(fetchPickBatchError);
  }
};
