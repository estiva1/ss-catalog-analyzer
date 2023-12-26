import React from "react";
import { Button } from "@mui/material";
import { StyledBadge } from "./badge-button.styles";

const BadgeButton = ({ children }) => {
  return (
    <Button>
      <StyledBadge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant="dot">
        {children}
      </StyledBadge>
    </Button>
  );
};

export default BadgeButton;
