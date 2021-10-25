import styled from "styled-components";

const LatestMeasurementCardStyled = styled.div`
  width: 190px;
  height: 105px;
  border-radius: 15px;
  -webkit-box-shadow: 0px 0px 15px -4px rgba(110, 155, 189, 0.2);
  -moz-box-shadow: 0px 0px 15px -4px rgba(110, 155, 189, 0.2);
  box-shadow: 0px 0px 15px -4px rgba(110, 155, 189, 0.2);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 15px;
  margin: 15px 0;
  font-family: "Nunito", sans-serif;
  p {
    margin: 0;
  }
  .river {
    color: #545556;
    font-size: 15px;
    font-weight: 800;
  }
  .value {
    display: flex;
    align-items: center;
    .actualValue {
      font-size: 20px;
      font-weight: 700;
      margin-right: 10px;
      color: #3c404a;
    }
    .maxValue {
      background-color: ${({ alert }) => (alert ? "#feeceb" : "#e1f7ee")};
      color: ${({ alert }) => (alert ? "#8a6a6a" : "#617e72")};
      font-weight: bold;
      padding: 5px 8px;
      font-size: 12px;
      border-radius: 25px;
    }
  }
  .locality {
    color: #606064;
    font-size: 14px;
    font-weight: 400;
  }
  .datetime {
    font-size: 10px;
    color: #606064;
    margin-right: 8px;
  }
  .locality_datetime {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default LatestMeasurementCardStyled;
