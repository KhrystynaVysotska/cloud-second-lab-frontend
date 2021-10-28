import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TwoOptionsModal from "../../../common/presentation/components/modals/TwoOptionsModal";
import RiversPageStyled from "../../../styles/rivers/pages/RiversPage.styled";
import {
  getRivers,
  deleteRiverById,
} from "../../business/middleware/riverMiddleware";
import RiverCard from "../components/RiverCard";
import RiverCardsStyled from "../../../styles/rivers/components/RiverCards.styled";
import RiverAddCard from "../components/RiverAddCard";
import RiverAddForm from "../components/forms/RiverAddForm";
import { useHistory } from "react-router-dom";
import { MEASUREMENT_POINT_PATH, RIVER_PATH } from "../../../constants/apiPath";

function RiversPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { rivers } = useSelector((state) => state.rivers);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showModal, setShowModal] = useState({
    show: false,
    info: false,
    error: false,
    success: false,
    question: "",
    firstOption: "",
    secondOption: "",
    actionOnFirstOption: null,
    actionOnSecondOption: null,
    actionOnOverlayClick: null,
  });

  useEffect(() => {
    dispatch(getRivers());
  }, [dispatch]);

  const resetModal = () => {
    setShowModal({
      show: false,
      info: false,
      error: false,
      success: false,
      question: "",
      firstOption: "",
      secondOption: "",
      actionOnFirstOption: null,
      actionOnSecondOption: null,
      actionOnOverlayClick: null,
    });
  };

  const onDeletionSuccess = () => {
    console.log("Річку видалено успішно");
  };

  const onDeletionFailure = () => {
    setShowModal({
      show: true,
      error: true,
      success: false,
      info: false,
      question: "Виникла помилка при видаленні. Річку не видалено.",
      firstOption: "",
      secondOption: "Ок",
      actionOnFirstOption: null,
      actionOnSecondOption: resetModal,
      actionOnOverlayClick: null,
    });
  };

  const onDeletionSubmit = (id) => {
    resetModal();
    dispatch(deleteRiverById(id))
      .then(onDeletionSuccess)
      .catch(onDeletionFailure);
  };

  const deleteRiver = (e, name, id) => {
    e.stopPropagation();
    setShowModal({
      info: true,
      show: true,
      error: false,
      success: false,
      question: "Бажаєте видалити річку " + name + "?",
      firstOption: "Скасувати",
      secondOption: "Видалити",
      actionOnFirstOption: resetModal,
      actionOnSecondOption: () => onDeletionSubmit(id),
      actionOnOverlayClick: resetModal,
    });
  };

  const pushRiverMeasurementPoints = (id) => {
    history.push(RIVER_PATH + id + MEASUREMENT_POINT_PATH);
  };
  return (
    <>
      <RiversPageStyled>
        <p className="header">Оберіть річку</p>
        <RiverCardsStyled>
          {rivers.map((river, index) => {
            return (
              <React.Fragment key={index}>
                <RiverCard
                  river={river}
                  onDelete={deleteRiver}
                  onClick={pushRiverMeasurementPoints}
                />
              </React.Fragment>
            );
          })}
          <RiverAddCard onClick={() => setShowAddForm(true)} />
        </RiverCardsStyled>
      </RiversPageStyled>
      <RiverAddForm showAddForm={showAddForm} setShowAddForm={setShowAddForm} />
      <TwoOptionsModal
        show={showModal.show}
        showInfo={showModal.info}
        showError={showModal.error}
        question={showModal.question}
        showSuccess={showModal.success}
        firstOption={showModal.firstOption}
        secondOption={showModal.secondOption}
        onOverlayClick={showModal.actionOnOverlayClick}
        actionOnFirstOption={showModal.actionOnFirstOption}
        actionOnSecondOption={showModal.actionOnSecondOption}
      />
    </>
  );
}

export default RiversPage;
