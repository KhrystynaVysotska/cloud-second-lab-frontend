import styled from "styled-components";

const MeasurementPointCardStyled = styled.div`
  width: 390px;
  height: 80px;
  background-color: #fff;
  display: flex;
  align-items: center;
  -webkit-box-shadow: 0px 0px 15px -4px rgba(110, 155, 189, 0.2);
  -moz-box-shadow: 0px 0px 15px -4px rgba(110, 155, 189, 0.2);
  box-shadow: 0px 0px 15px -4px rgba(110, 155, 189, 0.2);
  border-radius: 10px;
  margin: 5px 0;
  cursor: pointer;
  position: relative;
  :hover {
    .delete-icon {
      display: block;
    }
    .edit-icon {
      display: block;
    }
  }
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 15px;
    margin-left: 10px;
    border-radius: 50%;
  }
  .locality-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .settlement {
    color: #545556;
    font-size: 15px;
    font-weight: 700;
    margin: 0;
  }
  .country-region {
    color: #606064;
    font-size: 14px;
    font-weight: 400;
    margin: 3px 0;
  }

  .icons {
    display: flex;
    align-items: center;
    color: #686161;
    position: absolute;
    right: 45px;
  }
  .delete-icon {
    font-size: 20px;
    display: none;
    :hover {
      color: #282626;
    }
  }
  .edit-icon {
    font-size: 20px;
    display: none;
    :hover {
      color: #282626;
    }
  }
  .arrow {
    position: absolute;
    right: 13px;
    color: #8080806e;
  }
  .hidden-float-sensors-list {
    width: 100%;
  }
`;

export default MeasurementPointCardStyled;
