import { combineReducers } from "@reduxjs/toolkit";
import { responseReducer, regionsReducer } from "../features/slice";

export default combineReducers({
  responseReducer,
  regionsReducer,
});
