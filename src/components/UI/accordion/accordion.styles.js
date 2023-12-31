import styled from "styled-components";
import { Accordion } from "@mui/material";

export const StyledAccordion = styled(Accordion)`
  background-color: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;

  .MuiAccordionSummary-root {
    min-height: max-content;
    padding: 0;
    justify-content: start;
    gap: 6px;
    transition: all 0.3s ease;

    &.Mui-expanded {
      min-height: max-content;
      margin-bottom: 20px;
      transition: all 0.3s ease;
    }
  }

  .MuiAccordionSummary-content {
    flex-grow: unset;
    color: #000;
    font-family: Titillium Web;
    font-size: 1.125rem !important;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem !important;
    margin: 0;
    transition: all 0.3s ease;

    &.Mui-expanded {
      margin: 0;
    }
  }

  .Mui-expanded {
    color: #1565d8;
    transition: all 0.3s ease-in-out;
  }

  &.MuiPaper-root {
    border-radius: 0;
    margin: 0;
    padding: 0;
    border: none;
    box-shadow: none;
    &::before {
      content: unset;
    }

    &.Mui-expanded {
      margin: 0;
    }
  }

  .MuiAccordionDetails-root {
    padding: 0;
  }
`;

export const Circle = styled.span`
  width: 16px;
  height: 16px;
  margin-top: 2px;
  border-radius: 50%;
  background-color: ${({ $expanded }) => ($expanded ? "#1565d8" : "#00A3FF")};
  transition:  background-color 1s ease;
`;
