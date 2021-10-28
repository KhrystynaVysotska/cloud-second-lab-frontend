import React from "react";
import FloatSensorAddCardStyled from "../../styles/float_sensors/components/FloatSensorAddCard.styled";

export default function FloatSensorAddCard({ onClick }) {
  return (
    <FloatSensorAddCardStyled onClick={onClick}>
      <div>
        <p className="add-float-sensor">Додати датчик</p>
      </div>
    </FloatSensorAddCardStyled>
  );
}
