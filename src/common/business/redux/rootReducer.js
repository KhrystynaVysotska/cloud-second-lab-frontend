import { combineReducers } from "@reduxjs/toolkit";
import riverReducer from "../../../rivers/business/redux/riverSlice";

const rootReducer = combineReducers({
  rivers: riverReducer,
});

export default rootReducer;
