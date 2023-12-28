import styled from "styled-components";

import { Button } from "@mui/material";
import { device } from "../../../../breakpoints.styles";

export const StyledButton = styled(Button)`
  &.MuiButton-outlined {
    width: 230px;
    color: #4e5969;
    justify-content: left;
    font-family: Titillium Web;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem;
    letter-spacing: 0.0225rem;
    text-transform: none;

    @media ${device.xl} {
      font-size: 1rem;
      width: 210px;
    }
    @media ${device.lg} {
      padding-inline: 14px;
      font-size: 0.8rem;
      width: 154px;
    }
    @media ${device.md} {
      padding-inline: 10px;
      font-size: 0.75rem;
      width: 120px;
      letter-spacing: normal;
    }
  }
  .MuiTouchRipple-root {
    color: ${({ $muiRippleColor }) => $muiRippleColor};
  }
`;

export const ButtonGruopLabel = styled.span`
  color: #1565d8;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.0225rem;

  @media ${device.xl} {
    font-size: 1rem;
  }
  @media ${device.lg} {
    font-size: 0.8rem;
  }
  @media ${device.md} {
    font-size: 0.75rem;
    letter-spacing: normal;
  }
`;
