import React, { useEffect } from "react";
import RiverEditFormStyled from "../../../../styles/rivers/components/forms/RiverEditForm.styled";
import BackgroundShadow from "../../../../styles/common/components/modals/BackgroundShadow";
import Input from "@mui/material/Input";
import { useDispatch } from "react-redux";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { updateExistingRiver } from "../../../business/middleware/riverMiddleware";

export default function RiverEditForm({
  river,
  showEditForm,
  setShowEditForm,
}) {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [length, setLength] = React.useState();
  const [basinArea, setBasinArea] = React.useState();

  useEffect(() => {
    setName(river.name);
    setImage(river.image_url);
    setLength(river.length_in_km);
    setBasinArea(river.basin_area_in_sq_km);
  }, [river]);

  const onCancel = () => {
    setName(river.name);
    setLength(river.length_in_km);
    setBasinArea(river.basin_area_in_sq_km);
    setShowEditForm(false);
  };

  const onSubmit = () => {
    dispatch(
      updateExistingRiver(river.id, {
        name: name,
        length_in_km: length,
        basin_area_in_sq_km: basinArea,
        image_url: image,
      })
    )
      .then((data) => {
        setName(data.name);
        setLength(data.length_in_km);
        setBasinArea(data.basin_area_in_sq_km);
        setImage(data.image_url);
        setShowEditForm(false);
      })
      .catch((err) => console.log(err));
  };

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };

  const handleLengthInputChange = (e) => {
    setLength(e.target.value);
  };

  const handleBasinAreaInputChange = (e) => {
    setBasinArea(e.target.value);
  };

  return (
    <BackgroundShadow show={showEditForm} onClick={onCancel}>
      <RiverEditFormStyled
        show={showEditForm}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="header">???????????????????? ?????????? {river.name}</p>
        <div className="form">
          <img src={image} alt="river" className="image" />
          <div className="inputs">
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="name">?????????? *</InputLabel>
              <Input
                required
                label="??????????"
                id="name"
                value={name}
                onChange={handleNameInputChange}
              />
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="length">?????????????? *</InputLabel>
              <Input
                type="number"
                required
                label="??????????????"
                id="length"
                value={length}
                onChange={handleLengthInputChange}
                endAdornment={
                  <InputAdornment position="end">????</InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="basin_area">?????????? ?????????????? *</InputLabel>
              <Input
                required
                type="number"
                label="?????????? ??????????????"
                id="basin_area"
                value={basinArea}
                onChange={handleBasinAreaInputChange}
                endAdornment={
                  <InputAdornment position="end">??????</InputAdornment>
                }
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
      </RiverEditFormStyled>
    </BackgroundShadow>
  );
}
