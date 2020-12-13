import {
  FETCH_PICK_BATCH_SUCCESS,
  FETCH_PICK_BATCH_STARTED,
  FETCH_PICK_BATCH_ERROR,
} from "../Actions/Types";

const initialState = {
  batchError: false,
  batchLoading: false,
  symbolsList: null,
};

const pickBatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PICK_BATCH_SUCCESS:
      return {
        ...state,
        pickLoading: false,
        ...action.payload,
      };
    case FETCH_PICK_BATCH_STARTED:
      return {
        ...initialState,
        pickLoading: true,
      };
    case FETCH_PICK_BATCH_ERROR:
      return {
        ...state,
        pickLoading: false,
        pickError: true,
      };
    default:
      return state;
  }
};

export default pickBatchReducer;
