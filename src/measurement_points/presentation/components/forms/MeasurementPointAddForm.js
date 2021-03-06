import React from "react";
import BackgroundShadow from "../../../../styles/common/components/modals/BackgroundShadow";
import Input from "@mui/material/Input";
import { useDispatch } from "react-redux";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { imageUploader } from "../../../../common/business/imageTools/imageUploader";
import UploadCard from "../../../../common/presentation/components/UploadCard";
import { createMeasurementPoint } from "../../../business/middleware/measurementPointMiddleware";
import { createLocality } from "../../../../localities/business/middleware/localityMiddleware";
import MeasurementPointAddFormStyled from "../../../../styles/measurementPoints/components/forms/MeasurementPointAddForm.styled";

export default function MeasurementPointAddForm({
  river_id,
  showAddForm,
  setShowAddForm,
}) {
  const dispatch = useDispatch();
  const [country, setCountry] = React.useState("");
  const [image, setImage] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [settlement, setSettlement] = React.useState("");
  const [maxWaterLevel, setMaxWaterLevel] = React.useState("");
  const [zeroPoint, setZeroPoint] = React.useState("");

  const onCancel = () => {
    setCountry("");
    setImage("");
    setRegion("");
    setSettlement("");
    setMaxWaterLevel("");
    setZeroPoint("");
    setShowAddForm(false);
  };

  const onSubmit = () => {
    dispatch(
      createLocality({
        country: country,
        image_url: image,
        region: region,
        settlement: settlement,
      })
    )
      .then((data) =>
        dispatch(
          createMeasurementPoint({
            locality_id: data.id,
            river_id: river_id,
            max_water_level_in_metres: maxWaterLevel,
            zero_point_in_metres: zeroPoint,
          })
        )
      )
      .then(onCancel)
      .catch((err) => console.log(err));
  };

  const handleCountryInputChange = (e) => {
    setCountry(e.target.value);
  };

  const handleRegionInputChange = (e) => {
    setRegion(e.target.value);
  };

  const handleSettlementInputChange = (e) => {
    setSettlement(e.target.value);
  };

  const handleMaxWaterLevelInputChange = (e) => {
    setMaxWaterLevel(e.target.value);
  };

  const handleZeroPointInputChange = (e) => {
    setZeroPoint(e.target.value);
  };

  const onFileChange = (e) => {
    imageUploader(e, image, setImage);
  };

  return (
    <BackgroundShadow show={showAddForm} onClick={onCancel}>
      <MeasurementPointAddFormStyled
        show={showAddForm}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="header">???????????? ?????????? ????????????</p>
        <div className="form">
          <label htmlFor="upload-button" className="image">
            {!image && <UploadCard title={"??????????????????????"} />}
            {image && (
              <img src={image} alt="measurement_point" className="image" />
            )}
          </label>

          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={onFileChange}
          />
          <div className="inputs">
            <FormControl
              variant="standard"
              sx={{ m: 1, mt: 3, width: "50ch" }}
              className="country-input"
            >
              <InputLabel htmlFor="country">???????????? *</InputLabel>
              <Input
                required
                label="????????????"
                id="country"
                value={country}
                onChange={handleCountryInputChange}
              />
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="region">?????????????? *</InputLabel>
              <Input
                required
                label="??????????????"
                id="region"
                value={region}
                onChange={handleRegionInputChange}
              />
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="settlement">?????????????????? ?????????? *</InputLabel>
              <Input
                required
                label="?????????????????? ??????????"
                id="settlement"
                value={settlement}
                onChange={handleSettlementInputChange}
              />
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="maxWaterLevel">
                ???????????????????????? ???????????? ???????? *
              </InputLabel>
              <Input
                required
                type="number"
                label="???????????????????????? ???????????? ????????"
                id="maxWaterLevel"
                value={maxWaterLevel}
                onChange={handleMaxWaterLevelInputChange}
                endAdornment={<InputAdornment position="end">??</InputAdornment>}
              />
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="zeroPoint">?????????? ???????? *</InputLabel>
              <Input
                required
                type="number"
                label="?????????? ????????"
                id="zeroPoint"
                value={zeroPoint}
                onChange={handleZeroPointInputChange}
                endAdornment={<InputAdornment position="end">??</InputAdornment>}
              />
            </FormControl>
          </div>
        </div>
        <div className="buttons">
          <button className="cancel" onClick={onCancel}>
            ??????????????????
          </button>
          <button className="apply" onClick={onSubmit}>
            ????????????????
          </button>
        </div>
      </MeasurementPointAddFormStyled>
    </BackgroundShadow>
  );
}
