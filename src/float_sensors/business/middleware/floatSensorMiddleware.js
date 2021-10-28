import {
  getDbFloatSensor,
  getDbFloatSensors,
  createDbFloatSensor,
  deleteDbFloatSensor,
  updateDbFloatSensor,
} from "../../api/floatSensorDbApi";
import {
  addSensor,
  setSensors,
  updateSensor,
  deleteSensor,
  failedSensors,
  loadingSensors,
} from "../redux/floatSensorSlice";

export const getSensors = () => (dispatch) => {
  dispatch(loadingSensors());
  getDbFloatSensors()
    .then(({ data }) => dispatch(setSensors(data)))
    .catch((err) => dispatch(failedSensors(err.message)));
};

export const deleteSensorById = (id) => async (dispatch) => {
  return deleteDbFloatSensor(id).then(() => dispatch(deleteSensor(id)));
};

export const getSensorById = async (id) => {
  return getDbFloatSensor(id).then(({ data }) => data[0]);
};

export const createSensor = (sensor) => async (dispatch) => {
  return createDbFloatSensor(sensor).then(({ data }) => {
    dispatch(addSensor(data));
    return data;
  });
};

export const updateExistingSensor = (id, sensor) => async (dispatch) => {
  return updateDbFloatSensor(id, sensor).then(({ data }) => {
    dispatch(updateSensor({ id: id, body: data }));
    return data;
  });
};
