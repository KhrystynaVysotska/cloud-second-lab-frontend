import React from "react";
import { Switch, Route } from "react-router-dom";
import RiverPage from "../../../rivers/presentation/pages/RiversPage";
import { RIVER_PATH } from "../../../constants/apiPath";

function Layout() {
  return (
    <Switch>
      {/* <Route exact path="/">
        <RiverPage />
      </Route> */}
      <Route exact path={RIVER_PATH}>
        <RiverPage />
      </Route>
      {/* <Route exact path={EDIT_MOTOR_PATH + "/:id"}>
        <EditMotor />
      </Route>
      <Route exact path={MOTORS_PATH + "/:id"}>
        <MotorPage />
      </Route>
      <Route exact path={MOTORS_PATH}>
        <MotorsPage />
      </Route>
      <Route path={WORKERS_PATH}>
        <Workers />
      </Route>
      <Route path={SETTINGS_PATH}>
        <Settings />
      </Route>
      <Route path={NOTIFICATIONS_PATH}>
        <Notifications />
      </Route> */}
      <Route path="*">
        <div>404 Not found </div>
      </Route>
    </Switch>
  );
}

export default Layout;
