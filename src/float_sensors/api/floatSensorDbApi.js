import * as methods from "../../common/api/methods";
import { FLOAT_SENSOR_PATH } from "../../constants/apiPath";

export const getDbFloatSensors = () => methods.getDbItems(FLOAT_SENSOR_PATH);

export const getDbFloatSensor = (id) =>
  methods.getDbItem(FLOAT_SENSOR_PATH, { id });

export const createDbFloatSensor = (floatSensor) =>
  methods.createDbItem(FLOAT_SENSOR_PATH, floatSensor);

export const updateDbFloatSensor = (id, floatSensor) =>
  methods.updateDbItem(FLOAT_SENSOR_PATH, id, floatSensor);

export const deleteDbFloatSensor = (id) =>
  methods.deleteDbItem(FLOAT_SENSOR_PATH, id);
