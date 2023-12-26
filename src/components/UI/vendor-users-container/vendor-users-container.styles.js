import styled from "styled-components";
import { Avatar } from "@mui/material";

export const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    width: 32px;
    height: 32px;
    font-family: Titillium Web;
  }
`;

export const AvatarFallback = styled.span`
  min-width: 32px;
  min-height: 32px;
  width: 32px;
  height: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='270' height='270'%3e%3cdefs%3e%3cfilter id='b' color-interpolation-filters='auto'%3e%3cfeColorMatrix in='SourceGraphic' values='0 0 0 0 0.615686 0 0 0 0 0.639216 0 0 0 0 0.650980 0 0 0 1.000000 0'/%3e%3c/filter%3e%3cpath id='a' d='M0 0h270v270H0z'/%3e%3c/defs%3e%3cg fill='none' fill-rule='evenodd'%3e%3cmask id='c' fill='%23fff'%3e%3cuse xlink:href='%23a'/%3e%3c/mask%3e%3cuse xlink:href='%23a' fill='%23F8F8F9'/%3e%3cg filter='url(%23b)'%3e%3cg mask='url(%23c)'%3e%3cpath d='M0 0h270v270H0z'/%3e%3cpath fill='%23000' fill-rule='nonzero' d='M136 161c30.94 0 56-25.06 56-56s-25.06-56-56-56-56 25.06-56 56 25.06 56 56 56zm-.5 27C98.29 188 24 206.76 24 244v28h223v-28c0-37.24-74.29-56-111.5-56z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`};
`;
