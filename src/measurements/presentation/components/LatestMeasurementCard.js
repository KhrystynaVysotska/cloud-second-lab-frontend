import React from "react";
import LatestMeasurementCardStyled from "../../../styles/measurements/components/LatestMeasurementCard.styled";

export default function LatestMeasurementCard({ measurement }) {
  const deviation =
    measurement.measurement_point.max_water_level_in_metres -
    measurement.measurement.water_level_in_metres;
  const max_water_level =
    measurement.measurement_point.max_water_level_in_metres;
  const water_level = measurement.measurement.water_level_in_metres;
  const river = measurement.measurement_point.river.name;
  const locality = measurement.measurement_point.locality.settlement;

  const date = measurement.measurement.timestamp.split("T")[0].split("-");
  const dd_mm = date[2] + "/" + date[1];

  const time = measurement.measurement.timestamp.split("T")[1].split(":");
  const hh_mm = time[0] + ":" + time[1];

  return (
    <LatestMeasurementCardStyled alert={deviation < 0}>
      <p className="river">{river}</p>
      <div className="value">
        <p className="actualValue">{water_level} м</p>
        <p className="maxValue">{max_water_level} м</p>
      </div>
      <div className="locality_datetime">
        <p className="locality">{locality}</p>
        <p className="datetime">
          {dd_mm} {hh_mm}
        </p>
      </div>
    </LatestMeasurementCardStyled>
  );
}
