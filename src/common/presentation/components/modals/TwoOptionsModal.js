import React from "react";
import info from "../../../../images/icons/info.svg";
import error from "../../../../images/icons/error.svg";
import success from "../../../../images/icons/success.svg";
import BackgroundShadow from "../../../../styles/common/components/modals/BackgroundShadow";
import TwoOptionsModalStyled from "../../../../styles/common/components/modals/TwoOptionsModal.styled";

export default function TwoOptionsModal({
  show,
  question,
  showInfo,
  showError,
  showSuccess,
  firstOption,
  secondOption,
  onOverlayClick,
  actionOnFirstOption,
  actionOnSecondOption,
}) {
  const modalClickHandler = (e) => e.stopPropagation();

  return (
    <BackgroundShadow show={show} onClick={onOverlayClick}>
      <TwoOptionsModalStyled
        show={show}
        showInfo={showInfo}
        onClick={modalClickHandler}
        hasIcon={showSuccess || showError || showInfo}
      >
        {showInfo && <img src={info} alt="info" />}
        {showError && <img src={error} alt="error" />}
        {showSuccess && <img src={success} alt="success" />}
        {question.split("\n").map((line, index) => (
          <p key={index} className="question">
            {line}
          </p>
        ))}
        <div className="options">
          {firstOption && (
            <button className="firstOption" onClick={actionOnFirstOption}>
              {firstOption}
            </button>
          )}
          {secondOption && (
            <button className="secondOption" onClick={actionOnSecondOption}>
              {secondOption}
            </button>
          )}
        </div>
      </TwoOptionsModalStyled>
    </BackgroundShadow>
  );
}
