import styled from "styled-components";

const FloatSensorAddFormStyled = styled.div`
  margin: auto;
  width: 570px;
  display: flex;
  height: 450px;
  position: relative;
  border-radius: 20px;
  transition: all 0.3s;
  flex-direction: column;
  background-color: #fffffff2;
  -webkit-transition: all 0.3s;
  -webkit-transform: ${({ show }) => (show ? "scale(1)" : "scale(0.7)")};
  -ms-transform: ${({ show }) => (show ? "scale(1)" : "scale(0.7)")};
  transform: ${({ show }) => (show ? "scale(1)" : "scale(0.7)")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  -webkit-backface-visibility: ${({ show }) => (show ? "visible" : "hidden")};
  -moz-backface-visibility: ${({ show }) => (show ? "visible" : "hidden")};
  backface-visibility: ${({ show }) => (show ? "visible" : "hidden")};

  .header {
    font-family: "Nunito", sans-serif;
    font-size: 23px;
    font-weight: 700;
    color: #3c404a;
    margin: 50px 60px 0;
  }

  .form {
    display: flex;
    align-items: flex-start;
    margin: 50px 60px;
  }

  .inputs {
    display: flex;
    flex-direction: column;
  }

  .buttons {
    align-self: center;
    margin-top: 30px;
  }

  .cancel {
    border: none;
    width: 140px;
    color: #b4b1b1;
    font-size: 16px;
    cursor: pointer;
    margin-right: 20px;
    background: transparent;
    font-family: "Nunito", sans-serif;
  }
  .apply {
    border: none;
    width: 140px;
    color: #3c404a;
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    font-family: "Nunito", sans-serif;
  }
`;

export default FloatSensorAddFormStyled;
