import {
  getDbMeasurementPoint,
  getDbMeasurementPoints,
  createDbMeasurementPoint,
  deleteDbMeasurementPoint,
  updateDbMeasurementPoint,
  getDbMeasurementPointByRiverId,
} from "../../api/measurementPointDbApi";
import {
  addMeasurementPoint,
  setMeasurementPoints,
  updateMeasurementPoint,
  deleteMeasurementPoint,
  failedMeasurementPoints,
  loadingMeasurementPoints,
} from "../redux/measurementPointSlice";

export const getMeasurementPoints = () => (dispatch) => {
  dispatch(loadingMeasurementPoints());
  getDbMeasurementPoints()
    .then(({ data }) => dispatch(setMeasurementPoints(data)))
    .catch((err) => dispatch(failedMeasurementPoints(err.message)));
};

export const getMeasurementPointsByRiverId = (river_id) => (dispatch) => {
  dispatch(loadingMeasurementPoints());
  getDbMeasurementPointByRiverId(river_id)
    .then(({ data }) => dispatch(setMeasurementPoints(data)))
    .catch((err) => dispatch(failedMeasurementPoints(err.message)));
};

export const deleteMeasurementPointById = (id) => async (dispatch) => {
  return deleteDbMeasurementPoint(id).then(() =>
    dispatch(deleteMeasurementPoint(id))
  );
};

export const getMeasurementPointById = async (id) => {
  return getDbMeasurementPoint(id).then(({ data }) => data[0]);
};

export const createMeasurementPoint =
  (measurementPoint) => async (dispatch) => {
    return createDbMeasurementPoint(measurementPoint).then(({ data }) => {
      dispatch(addMeasurementPoint(data));
      return data;
    });
  };

export const updateExistingMeasurementPoint =
  (id, measurementPoint) => async (dispatch) => {
    return updateDbMeasurementPoint(id, measurementPoint).then(({ data }) => {
      dispatch(updateMeasurementPoint({ id: id, body: data }));
      return data;
    });
  };
