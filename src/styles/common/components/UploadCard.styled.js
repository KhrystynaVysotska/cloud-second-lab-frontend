import styled from "styled-components";

const UploadCardStyled = styled.div`
  width: 260px;
  height: 280px;
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 15px -4px rgba(110, 155, 189, 0.2);
  cursor: pointer;
  .dashed-border {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23C1C1C1FF' stroke-width='3' stroke-dasharray='8%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 10px;
    width: 220px;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title {
      font-family: "Nunito", sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #909398;
      user-select: none;
    }
  }
`;

export default UploadCardStyled;
