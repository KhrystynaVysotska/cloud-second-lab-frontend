import styled from "styled-components";

const TwoOptionsModalStyled = styled.div`
  background-color: #fffffff2;
  border-radius: 20px;
  width: 270px;
  height: ${({ showInfo }) => (showInfo ? "200px" : "210px")};
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: space-evenly;
  -webkit-transform: ${({ show }) => (show ? "scale(1)" : "scale(0.7)")};
  -ms-transform: ${({ show }) => (show ? "scale(1)" : "scale(0.7)")};
  transform: ${({ show }) => (show ? "scale(1)" : "scale(0.7)")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  padding: ${({ hasIcon }) => (hasIcon ? "10px 10px" : "0 10px")};
  align-items: center;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  -webkit-backface-visibility: ${({ show }) => (show ? "visible" : "hidden")};
  -moz-backface-visibility: ${({ show }) => (show ? "visible" : "hidden")};
  backface-visibility: ${({ show }) => (show ? "visible" : "hidden")};

  img {
    padding-bottom: 10px;
  }
  .question {
    color: #575046;
    text-align: center;
    font-size: 14px;
    margin: 0 10px;
  }
  .options {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 10px;
  }
  .firstOption {
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: #d8d8d8;
    border-image: none;
    cursor: pointer;
    padding: 13px 5px;
    border-radius: 50px;
    font-size: 14px;
    font-family: "Century Gothic", sans-serif;
    color: #b4b1b1;
    width: 120px;
  }
  .secondOption {
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: #748697;
    border-image: none;
    cursor: pointer;
    padding: 13px 5px;
    border-radius: 50px;
    font-size: 14px;
    font-family: "Century Gothic", sans-serif;
    color: #748697;
    width: 120px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export default TwoOptionsModalStyled;
