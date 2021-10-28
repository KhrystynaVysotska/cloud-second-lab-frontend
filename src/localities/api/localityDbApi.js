import * as methods from "../../common/api/methods";
import { LOCALITY_PATH } from "../../constants/apiPath";

export const getDbLocalities = () => methods.getDbItems(LOCALITY_PATH);

export const getDbLocality = (id) => methods.getDbItem(LOCALITY_PATH, { id });

export const createDbLocality = (locality) =>
  methods.createDbItem(LOCALITY_PATH, locality);

export const updateDbLocality = (id, locality) =>
  methods.updateDbItem(LOCALITY_PATH, id, locality);

export const deleteDbLocality = (id) => methods.deleteDbItem(LOCALITY_PATH, id);
