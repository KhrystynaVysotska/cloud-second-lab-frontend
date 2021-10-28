import {
  getDbLocality,
  getDbLocalities,
  createDbLocality,
  deleteDbLocality,
  updateDbLocality,
} from "../../api/localityDbApi";
import {
  addLocality,
  setLocalities,
  updateLocality,
  deleteLocality,
  failedLocalities,
  loadingLocalities,
} from "../redux/localitySlice";

export const getLocalities = () => (dispatch) => {
  dispatch(loadingLocalities());
  getDbLocalities()
    .then(({ data }) => dispatch(setLocalities(data)))
    .catch((err) => dispatch(failedLocalities(err.message)));
};

export const deleteLocalityById = (id) => async (dispatch) => {
  return deleteDbLocality(id).then(() => dispatch(deleteLocality(id)));
};

export const getLocalityById = async (id) => {
  return getDbLocality(id).then(({ data }) => data[0]);
};

export const createLocality = (locality) => async (dispatch) => {
  return createDbLocality(locality).then(({ data }) => {
    dispatch(addLocality(data));
    return data;
  });
};

export const updateExistingLocality = (id, locality) => async (dispatch) => {
  return updateDbLocality(id, locality).then(({ data }) => {
    dispatch(updateLocality({ id: id, body: data }));
    return data;
  });
};
