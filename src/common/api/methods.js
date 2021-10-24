import { Axios } from "./config";

export const getDbItems = (path) => Axios.get(path);

export const createDbItem = (path, item) => Axios.post(path, item);

export const updateDbItem = (path, id, item) => Axios.put(path + id, item);

export const deleteDbItem = (path, id) => Axios.delete(path + id);

export const getDbItem = (path, params) =>
  Axios.get(path, {
    params,
  });
