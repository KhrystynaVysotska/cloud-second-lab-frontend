import * as methods from "../../common/api/methods";
import { MEASUREMENT_POINT_PATH } from "../../constants/apiPath";

export const getDbMeasurementPoints = () =>
  methods.getDbItems(MEASUREMENT_POINT_PATH);

export const getDbMeasurementPoint = (id) =>
  methods.getDbItem(MEASUREMENT_POINT_PATH, { id });

export const getDbMeasurementPointByRiverId = (river_id) =>
  methods.getDbItem(MEASUREMENT_POINT_PATH, { river_id });

export const createDbMeasurementPoint = (measurement_point) =>
  methods.createDbItem(MEASUREMENT_POINT_PATH, measurement_point);

export const updateDbMeasurementPoint = (id, measurement_point) =>
  methods.updateDbItem(MEASUREMENT_POINT_PATH, id, measurement_point);

export const deleteDbMeasurementPoint = (id) =>
  methods.deleteDbItem(MEASUREMENT_POINT_PATH, id);
