import React from "react";
import BackgroundShadow from "../../../../styles/common/components/modals/BackgroundShadow";
import Input from "@mui/material/Input";
import { useDispatch } from "react-redux";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import RiverAddFormStyled from "../../../../styles/rivers/components/forms/RiverAddForm.styled";
import { imageUploader } from "../../../../common/business/imageTools/imageUploader";
import UploadCard from "../../../../common/presentation/components/UploadCard";
import { createRiver } from "../../../business/middleware/riverMiddleware";

export default function RiverAddForm({ showAddForm, setShowAddForm }) {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [length, setLength] = React.useState("");
  const [basinArea, setBasinArea] = React.useState("");

  const onCancel = () => {
    setName("");
    setImage("");
    setLength("");
    setBasinArea("");
    setShowAddForm(false);
  };

  const onSubmit = () => {
    dispatch(
      createRiver({
        name: name,
        length_in_km: length,
        basin_area_in_sq_km: basinArea,
        image_url: image,
      })
    )
      .then(onCancel)
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

  const onFileChange = (e) => {
    imageUploader(e, image, setImage);
  };

  return (
    <BackgroundShadow show={showAddForm} onClick={onCancel}>
      <RiverAddFormStyled
        show={showAddForm}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="header">Додати річку</p>
        <div className="form">
          <label htmlFor="upload-button" className="image">
            {!image && <UploadCard title={"Завантажити"} />}
            {image && <img src={image} alt="river" className="image" />}
          </label>

          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={onFileChange}
          />
          <div className="inputs">
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="name">Назва *</InputLabel>
              <Input
                required
                label="Назва"
                id="name"
                value={name}
                onChange={handleNameInputChange}
              />
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="length">Довжина *</InputLabel>
              <Input
                type="number"
                required
                label="Довжина"
                id="length"
                value={length}
                onChange={handleLengthInputChange}
                endAdornment={
                  <InputAdornment position="end">км</InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "50ch" }}>
              <InputLabel htmlFor="basin_area">Площа басейну *</InputLabel>
              <Input
                required
                type="number"
                label="Площа басейну"
                id="basin_area"
                value={basinArea}
                onChange={handleBasinAreaInputChange}
                endAdornment={
                  <InputAdornment position="end">км²</InputAdornment>
                }
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
      </RiverAddFormStyled>
    </BackgroundShadow>
  );
}
