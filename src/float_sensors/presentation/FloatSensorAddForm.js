import React from "react";
import { useDispatch } from "react-redux";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import BackgroundShadow from "../../styles/common/components/modals/BackgroundShadow";
import FloatSensorAddFormStyled from "../../styles/float_sensors/components/FloatSensorAddForm.styled";
import { createSensor } from "../business/middleware/floatSensorMiddleware";

export default function FloatSensorAddForm({
  showAddForm,
  setShowAddForm,
  measurementPointId,
}) {
  const dispatch = useDispatch();
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");

  const onCancel = () => {
    setLatitude("");
    setLongitude("");
    setShowAddForm(false);
  };

  const onSubmit = () => {
    dispatch(
      createSensor({
        geo_point: "POINT(" + latitude + " " + longitude + ")",
        measurement_point_id: measurementPointId,
      })
    )
      .then(onCancel)
      .catch((err) => console.log(err));
  };

  const handleLatitudeInputChange = (e) => {
    setLatitude(e.target.value);
  };

  const handleLongitudeInputChange = (e) => {
    setLongitude(e.target.value);
  };

  return (
    <BackgroundShadow show={showAddForm} onClick={onCancel}>
      <FloatSensorAddFormStyled
        show={showAddForm}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="header">Додати датчик</p>
        <div className="form">
          <div className="inputs">
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="latitude">Широта *</InputLabel>
              <Input
                required
                label="Широта"
                id="latitude"
                value={latitude}
                onChange={handleLatitudeInputChange}
              />
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="longitude">Довгота *</InputLabel>
              <Input
                required
                label="Довгота"
                id="longitude"
                value={longitude}
                onChange={handleLongitudeInputChange}
              />
            </FormControl>
          </div>
        </div>
        <div className="buttons">
          <button className="cancel" onClick={onCancel}>
            Скасувати
          </button>
          <button className="apply" onClick={onSubmit}>
            Створити
          </button>
        </div>
      </FloatSensorAddFormStyled>
    </BackgroundShadow>
  );
}
