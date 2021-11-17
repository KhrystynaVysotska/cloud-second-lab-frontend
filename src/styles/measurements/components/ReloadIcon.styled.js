import styled, { keyframes, css } from "styled-components";
import CachedIcon from "@mui/icons-material/Cached";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const ReloadIconStyled = styled(CachedIcon)`
  cursor: pointer;
  animation: ${({ rotate }) =>
    rotate
      ? css`
          ${spin} 1s linear 1
        `
      : "none"};
`;

export default ReloadIconStyled;
