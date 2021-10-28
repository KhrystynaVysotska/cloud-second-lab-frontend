import styled from "styled-components";
import { MapContainer } from "react-leaflet";

const MeasurementPointsMapStyled = styled(MapContainer)`
  width: 500px;
  height: 500px;
  .popup-button {
    background: transparent;
    border: none;
  }
`;

export default MeasurementPointsMapStyled;
