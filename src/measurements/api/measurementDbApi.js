import * as methods from "../../common/api/methods";
import {
  MEASUREMENT_LATEST_PATH,
  MEASUREMENT_PATH,
} from "../../constants/apiPath";

export const getDbLatestMeasurements = () =>
  methods.getDbItems(MEASUREMENT_LATEST_PATH);

export const getDbMeasurements = () => methods.getDbItems(MEASUREMENT_PATH);

export const getDbMeasurement = (id) =>
  methods.getDbItem(MEASUREMENT_PATH, { id });

export const getDbMeasurementsBySensorId = (float_sensor_id) =>
  methods.getDbItem(MEASUREMENT_PATH, { float_sensor_id });

export const createDbMeasurement = (measurement) =>
  methods.createDbItem(MEASUREMENT_PATH, measurement);

export const updateDbMeasurement = (id, measurement) =>
  methods.updateDbItem(MEASUREMENT_PATH, id, measurement);

export const deleteDbMeasurement = (id) =>
  methods.deleteDbItem(MEASUREMENT_PATH, id);
