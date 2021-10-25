import styled from "styled-components";

const BackgroundShadow = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  position: fixed;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  background: rgba(40, 43, 49, 0.8);
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

export default BackgroundShadow;
