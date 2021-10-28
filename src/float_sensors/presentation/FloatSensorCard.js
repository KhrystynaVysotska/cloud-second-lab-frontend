import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FloatSensorEditForm from "../presentation/FloatSensorEditForm";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FloatSensorCardStyled from "../../styles/float_sensors/components/FloatSensorCard.styled";
import { deleteSensorById } from "../business/middleware/floatSensorMiddleware";
import { FLOAT_SENSOR_PATH, MEASUREMENT_PATH } from "../../constants/apiPath";

export default function FloatSensorCard({ sensor }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = React.useState(false);

  const handleEdit = (e) => {
    e.stopPropagation();
    setShowEditForm(true);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteSensorById(sensor.id));
  };

  const navigateToMeasurementPage = () => {
    history.push(FLOAT_SENSOR_PATH + sensor.id + MEASUREMENT_PATH);
  };

  return (
    <>
      <FloatSensorCardStyled onClick={navigateToMeasurementPage}>
        <LocationOnIcon fontSize={"small"} className="location_icon" />
        <p className="float-sensor-number">Датчик #{sensor.id}</p>
        <div className="icons">
          <EditOutlinedIcon className="edit-icon" onClick={handleEdit} />
          <DeleteOutlineOutlinedIcon
            className="delete-icon"
            onClick={handleDelete}
          />
        </div>
      </FloatSensorCardStyled>
      <FloatSensorEditForm
        sensor={sensor}
        showEditForm={showEditForm}
        setShowEditForm={setShowEditForm}
      />
    </>
  );
}
