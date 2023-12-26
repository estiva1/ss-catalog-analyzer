import styled from "styled-components";

export const RippleContainer = styled.div`
  position: absolute;
  inset: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${({ $color }) => $color};
    animation-name: rippleMain;
    animation-duration: ${({ $duration }) => $duration}ms;
  }

  @keyframes rippleMain {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;
