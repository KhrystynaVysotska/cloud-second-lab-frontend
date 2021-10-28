import React from "react";
import MeasurementPointAddCardStyled from "../../../styles/measurementPoints/components/MeasurementPointAddCard.styled";

export default function MeasurementPointAddCard({ onClick }) {
  return (
    <MeasurementPointAddCardStyled onClick={onClick}>
      <div className="dashed-border">
        <p className="add-measurement-point">Додати точку заміру</p>
      </div>
    </MeasurementPointAddCardStyled>
  );
}
