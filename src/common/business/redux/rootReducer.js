import { combineReducers } from "@reduxjs/toolkit";
import measurementPointReducer from "../../../measurement_points/business/redux/measurementPointSlice";
import riverReducer from "../../../rivers/business/redux/riverSlice";
import sensorReducer from "../../../float_sensors/business/redux/floatSensorSlice";

const rootReducer = combineReducers({
  rivers: riverReducer,
  sensors: sensorReducer,
  measurementPoints: measurementPointReducer,
});

export default rootReducer;
