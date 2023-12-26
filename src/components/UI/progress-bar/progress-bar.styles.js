import styled from "styled-components";

import { styled as mStyled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

export const BorderLinearProgress = mStyled(LinearProgress)(() => ({
  height: 14,
  borderRadius: 7,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#E6E6E6",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 7,
    backgroundColor: "#1a90ff",
  },
}));

export const Value = styled.span`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.03125rem;
`;
