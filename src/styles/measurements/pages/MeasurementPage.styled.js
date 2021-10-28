import styled from "styled-components";

const MeasurementPageStyled = styled.div`
  .header {
    font-family: "Nunito", sans-serif;
    font-size: 25px;
    font-weight: 700;
    color: #3c404a;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 30px;
  }
  .delete-button,
  .edit-button {
    display: ${({ selectedRows }) => (selectedRows.length ? "block" : "none")};
    border: none;
    width: 140px;
    color: #3c404a;
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    font-family: "Nunito", sans-serif;
  }
  .add-button {
    border: none;
    width: 100%;
    color: #3c404a;
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    font-family: "Nunito", sans-serif;
    margin: 10px 0;
    text-align: end;
  }
`;

export default MeasurementPageStyled;
