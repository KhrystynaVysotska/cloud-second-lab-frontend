import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMeasurementPointsByRiverId } from "../../business/middleware/measurementPointMiddleware";
import MeasurementPointsPageStyled from "../../../styles/measurementPoints/pages/MeasurementPointsPage.styled";
import MeasurementPointCard from "../components/MeasurementPointCard";
import MeasurementPointCards from "../../../styles/measurementPoints/components/MeasurementPointCards.styled";
import MeasurementPointsMap from "../components/MeasurementPointsMap";
import MeasurementPointAddCard from "../components/MeasurementPointAddCard";
import MeasurementPointAddForm from "../components/forms/MeasurementPointAddForm";

export default function MeasurementPointsPage() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = React.useState(false);
  const { measurementPoints } = useSelector((state) => state.measurementPoints);

  useEffect(() => {
    dispatch(getMeasurementPointsByRiverId(id));
  }, [dispatch, id]);

  return (
    <>
      <MeasurementPointsPageStyled>
        <p className="header">Оберіть точку заміру:</p>
        <div className="content">
          <MeasurementPointCards>
            {measurementPoints.map((point, index) => (
              <React.Fragment key={index}>
                <MeasurementPointCard measurementPoint={point} />
              </React.Fragment>
            ))}
            <MeasurementPointAddCard onClick={() => setShowAddForm(true)} />
          </MeasurementPointCards>
          <MeasurementPointsMap measurementPoints={measurementPoints} />
        </div>
      </MeasurementPointsPageStyled>
      <MeasurementPointAddForm
        river_id={id}
        showAddForm={showAddForm}
        setShowAddForm={setShowAddForm}
      />
    </>
  );
}
