import * as methods from "../../common/api/methods";
import { MEASUREMENT_LATEST_PATH } from "../../constants/apiPath";

export const getDbLatestMeasurements = () => methods.getDbItems(MEASUREMENT_LATEST_PATH);
