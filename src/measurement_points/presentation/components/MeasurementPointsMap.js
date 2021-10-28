import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Marker, Popup, TileLayer } from "react-leaflet";
import MeasurementPointsMapStyled from "../../../styles/measurementPoints/components/MeasurementPointsMapStyled";
import {
  FLOAT_SENSOR_PATH,
  MEASUREMENT_PATH,
} from "../../../constants/apiPath";

export default function MeasurementPointsMap({ measurementPoints }) {
  const history = useHistory();
  const { sensors } = useSelector((state) => state.sensors);
  const navigateToMeasurementPage = (e, id) => {
    history.push(FLOAT_SENSOR_PATH + id + MEASUREMENT_PATH);
  };
  return (
    <MeasurementPointsMapStyled
      zoom={5}
      center={[49.187116, 31.062168]}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {measurementPoints.map((measurementPoint, index) =>
        sensors
          .filter(
            (sensor) => sensor.measurement_point_id === measurementPoint.id
          )
          .map((float_sensor, index) => {
            let point = float_sensor.geo_point
              .replace("POINT(", "")
              .replace(")", "")
              .split(" ");
            return (
              <Marker position={[parseFloat(point[0]), parseFloat(point[1])]}>
                <Popup>
                  <button
                    className="popup-button"
                    onClick={(e) =>
                      navigateToMeasurementPage(e, float_sensor.id)
                    }
                  >
                    {measurementPoint.locality.settlement}
                  </button>
                </Popup>
              </Marker>
            );
          })
      )}
    </MeasurementPointsMapStyled>
  );
}
