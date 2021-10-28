import styled from "styled-components";

const FloatSensorCardStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
  margin-left: 10px;
  cursor: pointer;
  width: 100%;
  .location_icon {
    color: #f65d5d;
  }
  .float-sensor-number {
    color: #686868;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    margin-left: 5px;
  }
  .icons {
    display: flex;
    align-items: center;
    color: #b3b3b3;
    position: absolute;
    right: 16px;
  }
  .delete-icon {
    font-size: 20px;
    :hover {
      color: #282626;
    }
  }
  .edit-icon {
    font-size: 20px;
    :hover {
      color: #282626;
    }
  }
`;

export default FloatSensorCardStyled;
