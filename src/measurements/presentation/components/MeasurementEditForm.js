import React, { useEffect } from "react";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import BackgroundShadow from "../../../styles/common/components/modals/BackgroundShadow";
import { updateDbMeasurement } from "../../api/measurementDbApi";
import MeasurementEditFormStyled from "../../../styles/measurements/components/forms/MeasurementEditForm.styled";

export default function MeasurementEditForm({
  handleEdit,
  measurement,
  showEditForm,
  setShowEditForm,
}) {
  const [timestamp, setTimestamp] = React.useState("");
  const [waterLevel, setWaterLevel] = React.useState("");

  useEffect(() => {
    if (measurement.length) {
      setTimestamp(measurement[0].timestamp);
      setWaterLevel(measurement[0].water_level_in_metres);
    }
  }, [measurement]);

  const onCancel = () => {
    if (measurement.length) {
      setTimestamp(measurement[0].timestamp);
      setWaterLevel(measurement[0].water_level_in_metres);
    }
    setShowEditForm(false);
  };

  const onSubmit = () => {
    updateDbMeasurement(measurement[0].id, {
      float_sensor_id: measurement[0].float_sensor_id,
      timestamp: timestamp,
      water_level_in_metres: waterLevel,
    })
      .then(({ data }) => {
        setTimestamp(data.timestamp);
        setWaterLevel(data.water_level_in_metres);
        handleEdit(data.id, data);
        setShowEditForm(false);
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
    <BackgroundShadow show={showEditForm} onClick={onCancel}>
      <MeasurementEditFormStyled
        show={showEditForm}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="header">Редагувати запис</p>
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
      </MeasurementEditFormStyled>
    </BackgroundShadow>
  );
}
