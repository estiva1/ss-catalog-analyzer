import React from "react";

import Box from "@mui/material/Box";
import { Button, Stack } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

import { ButtonGruopLabel, StyledButton } from "./crm-table-button-group.styles";

const COLORS = {
  All: {
    primary: "#C4C4C4",
    secondary: "#F3F3F3",
  },
  Prospect: {
    primary: "#0057D3",
    secondary: "#DAE6FF",
  },
  Open: {
    primary: "#009C34",
    secondary: "#D4FFE5",
  },
  Rejected: {
    primary: "#FF9900",
    secondary: "#FFEDCF",
  },
  Closed: {
    primary: "#CF0909",
    secondary: "#FFD6D6",
  },
  Prepaid: {
    primary: "#8F5AFF",
    secondary: "#EEE2FF",
  },
  "Credit Card": {
    primary: "#00A3FF",
    secondary: "#B3E3FF",
  },
  ACH: {
    primary: "#00F451",
    secondary: "#E6FFFC",
  },
  "Net 30 Terms": {
    primary: "#FFCB00",
    secondary: "#FFC7374C",
  },
};

const buttons = Object.keys(COLORS).map((button) => (
  <StyledButton
    startIcon={<RadioButtonCheckedIcon sx={{ color: COLORS[button].primary }} />}
    endIcon={<span style={{ fontSize: "inherit", fontWeight: 400 }}>(30)</span>}
    key={button.toLowerCase()}
    sx={{
      border: `1px solid ${COLORS[button].primary}`,
      backgroundColor: COLORS[button].secondary,
      "&:hover": {
        backgroundColor: COLORS[button].secondary,
        border: `1px solid ${COLORS[button].primary}`,
      },
    }}
    $muiRippleColor={COLORS[button].primary}
  >
    {button}
  </StyledButton>
));

const CrmTableButtonGroup = () => {
  return (
    <Box marginBottom="12px" width="max-content">
      <Stack direction="row" gap="12px" justifyContent="space-between" alignItems="center" marginBottom="12px">
        <ButtonGruopLabel>Vendor Statuses:</ButtonGruopLabel>
        <ButtonGroup size="large" aria-label="vendor statuses button group">
          {buttons.slice(0, 5)}
        </ButtonGroup>
      </Stack>

      <Stack direction="row" gap="12px" alignItems="center">
        <ButtonGruopLabel>Payment Statuses:</ButtonGruopLabel>
        <ButtonGroup size="large" aria-label="payment statuses button group">
          {buttons.slice(0, 1)}
          {buttons.slice(5)}
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default CrmTableButtonGroup;
