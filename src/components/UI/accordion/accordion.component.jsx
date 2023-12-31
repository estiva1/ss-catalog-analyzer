import React from "react";
import { AccordionDetails, AccordionSummary, Stack } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

import { Circle, StyledAccordion } from "./accordion.styles";

const CustomAccordion = ({ summary, children, expanded, onChange, ...props }) => {
  return (
    <StyledAccordion expanded={expanded} onChange={onChange} {...props}>
      <Stack direction="row" gap="16px">
        <Circle $expanded={expanded} />
        <AccordionSummary expandIcon={<ArrowOutwardOutlinedIcon sx={{ fontSize: 14 }} />}>{summary}</AccordionSummary>
      </Stack>
      <AccordionDetails>{children}</AccordionDetails>
    </StyledAccordion>
  );
};

export default CustomAccordion;
