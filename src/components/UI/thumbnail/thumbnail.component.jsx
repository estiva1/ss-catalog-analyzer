import React from "react";
import { StyledThumbnail, ThumbnailText } from "./thumbnail.styles";

const Thumbnail = ({ status = "" }) => {
  const COLORS = {
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
  const border = (status && COLORS[status].primary) || "#000";
  const background = (status && COLORS[status].secondary) || "";

  return (
    <StyledThumbnail $borderColor={border} $backgroundColor={background}>
      <ThumbnailText $color={border}>{status ? status : "Status"}</ThumbnailText>
    </StyledThumbnail>
  );
};

export default Thumbnail;
