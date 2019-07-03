import { combineReducers } from "redux";
import DataReducer from "./DataReducer";
import MinPEReducer from "./MinPEReducer";

export default combineReducers({
  fetchedData: DataReducer,
  minPE: MinPEReducer
});
