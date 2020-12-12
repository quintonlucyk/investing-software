import { combineReducers } from "redux";
import DataReducer from "./DataReducer";
import PickDataReducer from "./PickDataReducer";
import MinPEReducer from "./MinPEReducer";

export default combineReducers({
  fetchedData: DataReducer,
  fetchedPickData: PickDataReducer,
  minPE: MinPEReducer,
});
