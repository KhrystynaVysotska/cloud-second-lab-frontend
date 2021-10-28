import styled from "styled-components";

const MeasurementPointAddCardStyled = styled.div`
  width: 390px;
  height: 80px;
  background-color: #fff;
  box-shadow: 0px 0px 15px -4px rgba(110, 155, 189, 0.2);
  border-radius: 10px;
  margin: 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  .dashed-border {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23C1C1C1FF' stroke-width='3' stroke-dasharray='8%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 10px;
    width: 370px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .add-measurement-point {
      font-family: "Nunito", sans-serif;
      font-size: 17px;
      font-weight: 600;
      color: #6a6b6c;
      user-select: none;
    }
  }
`;

export default MeasurementPointAddCardStyled;
