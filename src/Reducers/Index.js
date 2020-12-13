import { combineReducers } from "redux";
import DataReducer from "./DataReducer";
import PickDataReducer from "./PickDataReducer";
import PickBatchReducer from "./PickBatchReducer";
import MinPEReducer from "./MinPEReducer";

export default combineReducers({
  fetchedData: DataReducer,
  fetchedPickData: PickDataReducer,
  fetchedPickBatch: PickBatchReducer,
  minPE: MinPEReducer,
});
