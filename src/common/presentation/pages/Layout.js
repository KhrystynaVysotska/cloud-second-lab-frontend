import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  FLOAT_SENSOR_PATH,
  MEASUREMENT_PATH,
  MEASUREMENT_POINT_PATH,
  RIVER_PATH,
} from "../../../constants/apiPath";
import MeasurementPage from "../../../measurements/presentation/pages/MeasurementPage";
import MeasurementPointsPage from "../../../measurement_points/presentation/pages/MeasurementPointsPage";
import RiversPage from "../../../rivers/presentation/pages/RiversPage";

function Layout() {
  return (
    <Switch>
      <Route exact path="/">
        <RiversPage />
      </Route>
      <Route exact path={RIVER_PATH + ":id" + MEASUREMENT_POINT_PATH}>
        <MeasurementPointsPage />
      </Route>
      <Route exact path={FLOAT_SENSOR_PATH + ":id" + MEASUREMENT_PATH}>
        <MeasurementPage />
      </Route>
      <Route path="*">
        <div>404 Not found </div>
      </Route>
    </Switch>
  );
}

export default Layout;
