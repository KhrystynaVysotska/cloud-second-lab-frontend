import React, { useEffect } from "react";
import MeasurementPointEditFormStyled from "../../../../styles/measurementPoints/components/forms/MeasurementPointEditForm.styled";
import BackgroundShadow from "../../../../styles/common/components/modals/BackgroundShadow";
import Input from "@mui/material/Input";
import { useDispatch } from "react-redux";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { updateExistingLocality } from "../../../../localities/business/middleware/localityMiddleware";
import { updateExistingMeasurementPoint } from "../../../business/middleware/measurementPointMiddleware";

export default function MeasurementPointEditForm({
  showEditForm,
  setShowEditForm,
  measurementPoint,
}) {
  const dispatch = useDispatch();
  const [country, setCountry] = React.useState();
  const [image, setImage] = React.useState();
  const [region, setRegion] = React.useState();
  const [settlement, setSettlement] = React.useState();
  const [maxWaterLevel, setMaxWaterLevel] = React.useState();
  const [zeroPoint, setZeroPoint] = React.useState();

  useEffect(() => {
    setCountry(measurementPoint.locality.country);
    setImage(measurementPoint.locality.image_url);
    setRegion(measurementPoint.locality.region);
    setSettlement(measurementPoint.locality.settlement);
    setMaxWaterLevel(measurementPoint.max_water_level_in_metres);
    setZeroPoint(measurementPoint.zero_point_in_metres);
  }, [measurementPoint]);

  const onCancel = () => {
    setCountry(measurementPoint.locality.country);
    setImage(measurementPoint.locality.image_url);
    setRegion(measurementPoint.locality.region);
    setSettlement(measurementPoint.locality.settlement);
    setMaxWaterLevel(measurementPoint.max_water_level_in_metres);
    setZeroPoint(measurementPoint.zero_point_in_metres);
    setShowEditForm(false);
  };

  const onSubmit = () => {
    dispatch(
      updateExistingLocality(measurementPoint.locality.id, {
        country: country,
        image_url: image,
        region: region,
        settlement: settlement,
      })
    )
      .then(() =>
        dispatch(
          updateExistingMeasurementPoint(measurementPoint.id, {
            locality_id: measurementPoint.locality.id,
            river_id: measurementPoint.river.id,
            max_water_level_in_metres: maxWaterLevel,
            zero_point_in_metres: zeroPoint,
          })
        )
      )
      .then((data) => {
        setCountry(data.locality.country);
        setImage(data.locality.image_url);
        setRegion(data.locality.region);
        setSettlement(data.locality.settlement);
        setMaxWaterLevel(data.max_water_level_in_metres);
        setZeroPoint(data.zero_point_in_metres);
        setShowEditForm(false);
      })
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

  return (
    <BackgroundShadow show={showEditForm} onClick={onCancel}>
      <MeasurementPointEditFormStyled
        show={showEditForm}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="header">???????????????????? ?????????? ????????????</p>
        <div className="form">
          <img src={image} alt="measurement_point" className="image" />
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
            ??????????????????????
          </button>
        </div>
      </MeasurementPointEditFormStyled>
    </BackgroundShadow>
  );
}
