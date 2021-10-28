import React from "react";
import MeasurementPointCardHiddenListStyled from "../../../styles/measurementPoints/components/MeasurementPointCardHiddenList.styled";
import FloatSensorCard from "../../../float_sensors/presentation/FloatSensorCard";
import FloatSensorAddCard from "../../../float_sensors/presentation/FloatSensorAddCard";
import FloatSensorAddForm from "../../../float_sensors/presentation/FloatSensorAddForm";

export default function MeasurementPointCardHiddenList({
  sensors,
  measurementPointId,
}) {
  const [showAddForm, setShowAddForm] = React.useState(false);

  return (
    <>
      <MeasurementPointCardHiddenListStyled>
        {sensors
          .filter(
            (sensor) => sensor.measurement_point_id === measurementPointId
          )
          .map((sensor, index) => (
            <FloatSensorCard key={index} sensor={sensor} />
          ))}
        <FloatSensorAddCard onClick={() => setShowAddForm(true)} />
      </MeasurementPointCardHiddenListStyled>
      <FloatSensorAddForm
        showAddForm={showAddForm}
        setShowAddForm={setShowAddForm}
        measurementPointId={measurementPointId}
      />
    </>
  );
}
