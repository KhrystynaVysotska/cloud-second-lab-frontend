import React, { useEffect } from "react";
import Input from "@mui/material/Input";
import { useDispatch } from "react-redux";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import BackgroundShadow from "../../styles/common/components/modals/BackgroundShadow";
import FloatSensorEditFormStyled from "../../styles/float_sensors/components/FloatSensorEditForm.styled";
import { updateExistingSensor } from "../business/middleware/floatSensorMiddleware";

export default function FloatSensorEditForm({
  sensor,
  showEditForm,
  setShowEditForm,
}) {
  const dispatch = useDispatch();
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");

  useEffect(() => {
    setLatitude(
      sensor.geo_point.replace("POINT(", "").replace(")", "").split(" ")[0]
    );
    setLongitude(
      sensor.geo_point.replace("POINT(", "").replace(")", "").split(" ")[1]
    );
  }, [sensor]);

  const onCancel = () => {
    let point = sensor.geo_point
      .replace("POINT(", "")
      .replace(")", "")
      .split(" ");
    setLatitude(point[0]);
    setLongitude(point[1]);
    setShowEditForm(false);
  };

  const onSubmit = () => {
    dispatch(
      updateExistingSensor(sensor.id, {
        geo_point: "POINT(" + latitude + " " + longitude + ")",
        measurement_point_id: sensor.measurement_point_id,
      })
    )
      .then((data) => {
        let point = data.geo_point
          .replace("POINT(", "")
          .replace(")", "")
          .split(" ");
        setLatitude(point[0]);
        setLongitude(point[1]);
        setShowEditForm(false);
      })
      .catch((err) => console.log(err));
  };

  const handleLatitudeInputChange = (e) => {
    setLatitude(e.target.value);
  };

  const handleLongitudeInputChange = (e) => {
    setLongitude(e.target.value);
  };

  return (
    <BackgroundShadow show={showEditForm} onClick={onCancel}>
      <FloatSensorEditFormStyled
        show={showEditForm}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="header">Редагувати датчик</p>
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
            Застосувати
          </button>
        </div>
      </FloatSensorEditFormStyled>
    </BackgroundShadow>
  );
}
