import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MeasurementPointCardStyled from "../../../styles/measurementPoints/components/MeasurementPointCard.styled";
import MeasurementPointCardHiddenList from "./MeasurementPointCardHiddenList";
import image_placeholder from "../../../images/image_placeholder.png";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MeasurementPointEditForm from "./forms/MeasurementPointEditForm";
import { deleteMeasurementPointById } from "../../business/middleware/measurementPointMiddleware";
import { getSensors } from "../../../float_sensors/business/middleware/floatSensorMiddleware";

export default function MeasurementPointCard({ measurementPoint }) {
  const dispatch = useDispatch();
  const { sensors } = useSelector((state) => state.sensors);
  const [showEditForm, setShowEditForm] = React.useState(false);
  const [showHiddenList, setShowHiddenList] = React.useState(false);

  useEffect(() => {
    dispatch(getSensors());
  }, [dispatch, measurementPoint]);

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteMeasurementPointById(measurementPoint.id));
  };

  return (
    <>
      <MeasurementPointCardStyled
        onClick={(e) => {
          e.stopPropagation();
          setShowHiddenList(!showHiddenList);
        }}
      >
        <img
          src={
            measurementPoint.locality.image_url
              ? measurementPoint.locality.image_url
              : image_placeholder
          }
          alt="measurement_point"
        />
        <div className="locality-info">
          <p className="settlement">{measurementPoint.locality.settlement}</p>
          <p className="country-region">
            {measurementPoint.locality.country},{" "}
            {measurementPoint.locality.region}
          </p>
        </div>
        <div className="icons">
          <EditOutlinedIcon
            className="edit-icon"
            onClick={(e) => {
              e.stopPropagation();
              setShowEditForm(true);
            }}
          />
          <DeleteOutlineOutlinedIcon
            className="delete-icon"
            onClick={handleDelete}
          />
        </div>
        {showHiddenList ? (
          <KeyboardArrowDownIcon className="arrow" fontSize={"medium"} />
        ) : (
          <KeyboardArrowRightIcon className="arrow" fontSize={"medium"} />
        )}
      </MeasurementPointCardStyled>
      {showHiddenList && (
        <MeasurementPointCardHiddenList
          sensors={sensors}
          measurementPointId={measurementPoint.id}
        />
      )}
      <MeasurementPointEditForm
        showEditForm={showEditForm}
        setShowEditForm={setShowEditForm}
        measurementPoint={measurementPoint}
      />
    </>
  );
}
