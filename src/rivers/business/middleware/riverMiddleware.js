import {
  getDbRiver,
  getDbRivers,
  createDbRiver,
  deleteDbRiver,
  updateDbRiver,
} from "../../api/riverDbApi";
import {
  addRiver,
  setRivers,
  updateRiver,
  deleteRiver,
  failedRivers,
  loadingRivers,
} from "../redux/riverSlice";

export const getRivers = () => (dispatch) => {
  dispatch(loadingRivers());
  getDbRivers()
    .then(({ data }) => dispatch(setRivers(data)))
    .catch((err) => dispatch(failedRivers(err.message)));
};

export const deleteRiverById = (id) => async (dispatch) => {
  return deleteDbRiver(id).then(() => dispatch(deleteRiver(id)));
};

export const getRiverById = async (id) => {
  return getDbRiver(id).then(({ data }) => data[0]);
};

export const createRiver = (river) => async (dispatch) => {
  return createDbRiver(river).then(({ data }) => {
    dispatch(addRiver(data));
    return data;
  });
};

export const updateExistingRiver = (id, river) => async (dispatch) => {
  return updateDbRiver(id, river).then(({ data }) => {
    dispatch(updateRiver({ id: id, body: data }));
    return data;
  });
};
