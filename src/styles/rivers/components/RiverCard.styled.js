import styled from "styled-components";

const RiverCardStyled = styled.div`
  width: 260px;
  height: 300px;
  margin-bottom: 35px;
  p {
    font-family: "Nunito", sans-serif;
    margin: 0;
  }
  .name {
    font-size: 19px;
    font-weight: 800;
    margin: 5px 0;
    color: #3c404a;
  }
  .icons {
    color: #727374 !important;
  }
  .length {
    font-size: 14px;
    color: #545556;
    margin-top: 30px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    span {
      font-weight: 800;
    }
  }
  .basin_area {
    font-size: 14px;
    color: #545556;
    margin-top: 5px;
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    span {
      font-weight: 800;
    }
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default RiverCardStyled;
