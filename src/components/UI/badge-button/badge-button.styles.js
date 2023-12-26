import styled from "styled-components";
import { Badge } from "@mui/material";

export const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: "0 0 0 2px #fff",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    "&::after": {
      position: "absolute",
      top: "-2px",
      left: "-2px",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "2px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1.3)",
      opacity: 0,
    },
  },
}));
