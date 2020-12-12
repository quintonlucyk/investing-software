import {
  FETCH_PICK_DATA_SUCCESS,
  FETCH_PICK_DATA_STARTED,
  FETCH_PICK_DATA_ERROR,
} from "../Actions/Types";

const initialState = {
  pickError: false,
  pickLoading: false,
  symbolsList: null,
};

const pickDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PICK_DATA_SUCCESS:
      let symbolsList = "";
      action.payload.symbolsList.symbolsList.forEach((entry) => {
        if (entry.symbol) {
          symbolsList += entry.symbol + ",";
        }
      });
      if (symbolsList.length > 0) {
        symbolsList = symbolsList.slice(0, -1); //Take of trailing comma
      }
      return {
        ...state,
        pickLoading: false,
        symbolsList: symbolsList,
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
};

export default pickDataReducer;
