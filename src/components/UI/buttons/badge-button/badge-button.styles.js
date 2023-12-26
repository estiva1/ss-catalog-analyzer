import { styled } from "styled-components";

export const SettingsIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 12px;
  min-height: 12px;
  width: 12px;
  height: 12px;
  background-size: cover;
  background-repeat: no-repeat;
  transition: transform 1s ease-in-out;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='%23C4C4C4' d='M10.5 6a4.58368 4.58368 0 0 0-.075-.8225L11.9465 4.3l-1.5-2.6-1.52203.8795a4.50004 4.50004 0 0 0-1.4245-.823V0h-3v1.7565a4.49982 4.49982 0 0 0-1.4245.823L1.55347 1.7l-1.5 2.6 1.5215.8775a4.54978 4.54978 0 0 0 0 1.645L.05347 7.7l1.5 2.6 1.522-.879a4.49953 4.49953 0 0 0 1.4245.8225V12h3v-1.7565a4.50061 4.50061 0 0 0 1.4245-.823l1.52203.8795 1.5-2.6-1.5215-.8775A4.58368 4.58368 0 0 0 10.5 6ZM7.49997 6a1.50006 1.50006 0 0 1-.92598 1.38582A1.5 1.5 0 1 1 7.49997 6Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h12v12H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e")`};
`;

export const SettingsButton = styled.button`
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 4px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    & ${SettingsIcon} {
      transform: rotate(360deg);
    }

    &::after {
      position: absolute;
      top: -2px;
      left: -2px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: ripple 1.6s infinite alternate-reverse;
      border: 2px solid #1565d8;
      content: "";
    }
    @keyframes ripple {
      0% {
        transform: scale(1.3);
        opacity: 0;
      }
      50% {
        transform: scale(0.83);
        opacity: 1;
      }
      100% {
        transform: scale(1.3);
        opacity: 0;
      }
    }
  }
`;
