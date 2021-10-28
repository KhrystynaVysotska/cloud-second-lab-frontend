import React from "react";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import BackgroundShadow from "../../../styles/common/components/modals/BackgroundShadow";
import { createDbMeasurement } from "../../api/measurementDbApi";
import MeasurementAddFormStyled from "../../../styles/measurements/components/forms/MeasurementAddForm.styled";

export default function MeasurementAddForm({
  handleCreate,
  showAddForm,
  floatSensorId,
  setShowAddForm,
}) {
  const [timestamp, setTimestamp] = React.useState("");
  const [waterLevel, setWaterLevel] = React.useState("");

  const onCancel = () => {
    setTimestamp("");
    setWaterLevel("");
    setShowAddForm(false);
  };

  const onSubmit = () => {
    createDbMeasurement({
      float_sensor_id: floatSensorId,
      timestamp: timestamp,
      water_level_in_metres: waterLevel,
    })
      .then(({ data }) => {
        handleCreate(data);
        onCancel();
      })
      .catch((err) => console.log(err));
  };

  const handleTimestampInputChange = (e) => {
    setTimestamp(e.target.value);
  };

  const handleWaterLevelInputChange = (e) => {
    setWaterLevel(e.target.value);
  };

  return (
    <BackgroundShadow show={showAddForm} onClick={onCancel}>
      <MeasurementAddFormStyled
        show={showAddForm}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="header">Створити запис</p>
        <div className="form">
          <div className="inputs">
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="timestamp">Дата та час *</InputLabel>
              <Input
                required
                label="Дата та час"
                id="timestamp"
                value={timestamp}
                onChange={handleTimestampInputChange}
              />
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="waterLevel">Рівень води *</InputLabel>
              <Input
                required
                label="Рівень води"
                id="waterLevel"
                value={waterLevel}
                onChange={handleWaterLevelInputChange}
              />
            </FormControl>
          </div>
        </div>
        <div className="buttons">
          <button className="cancel" onClick={onCancel}>
            Скасувати
          </button>
          <button className="apply" onClick={onSubmit}>
            Застосувати
          </button>
        </div>
      </MeasurementAddFormStyled>
    </BackgroundShadow>
  );
}
