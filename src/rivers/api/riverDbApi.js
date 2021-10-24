import * as methods from "../../common/api/methods";
import { RIVER_PATH } from "../../constants/apiPath";

export const getDbRivers = () => methods.getDbItems(RIVER_PATH);

export const getDbRiver = (id) => methods.getDbItem(RIVER_PATH, { id });

export const createDbRiver = (river) => methods.createDbItem(RIVER_PATH, river);

export const updateDbRiver = (id, river) =>
  methods.updateDbItem(RIVER_PATH, id, river);

export const deleteDbRiver = (id) => methods.deleteDbItem(RIVER_PATH, id);
