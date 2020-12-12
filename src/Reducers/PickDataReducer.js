import {
  FETCH_PICK_DATA_SUCCESS,
  FETCH_PICK_DATA_STARTED,
  FETCH_PICK_DATA_ERROR,
} from "../Actions/Types";

const initialState = {
  pickError: false,
  pickLoading: false,
  symbolList: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PICK_DATA_SUCCESS:
      return {
        ...state,
        pickLoading: false,
        ...action.payload,
      };
    case FETCH_PICK_DATA_STARTED:
      return {
        ...initialState,
        pickLoading: true,
      };
    case FETCH_PICK_DATA_ERROR:
      return {
        ...state,
        pickLoading: false,
        pickError: true,
      };
    default:
      return state;
  }
}
