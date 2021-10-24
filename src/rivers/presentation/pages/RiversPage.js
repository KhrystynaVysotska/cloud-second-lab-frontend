import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TwoOptionsModal from "../../../common/presentation/components/modals/TwoOptionsModal";
import {
  getRivers,
  deleteRiverById,
} from "../../business/middleware/riverMiddleware";

function RiversPage() {
  const dispatch = useDispatch();
  const { rivers } = useSelector((state) => state.rivers);
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

  const deleteRiver = (name, id) => {
    setShowModal({
      show: true,
      error: false,
      success: false,
      info: true,
      question: "Бажаєте видалити річку " + name + "?",
      firstOption: "Скасувати",
      secondOption: "Видалити",
      actionOnFirstOption: resetModal,
      actionOnSecondOption: () => onDeletionSubmit(id),
      actionOnOverlayClick: resetModal,
    });
  };

  return (
    <>
      <div>
        {rivers.map((river, index) => {
          return (
            <React.Fragment key={index}>
              <div>
                <p>{river.name}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
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
