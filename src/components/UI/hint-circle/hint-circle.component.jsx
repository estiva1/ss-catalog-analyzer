import React from "react";
import { Tooltip } from "@mui/material";
import { HintCircleContainer, LightBulbIcon } from "./hint-circle.styles";

const HintCircle = ({ text = "" }) => {
  return (
    <Tooltip title={text}>
      <HintCircleContainer>
        <LightBulbIcon />
      </HintCircleContainer>
    </Tooltip>
  );
};

export default HintCircle;
