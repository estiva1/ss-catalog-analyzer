import React from "react";
import { styled } from "@mui/material/styles";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const StyledTabs = styled(({ disabled, ...props }) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))(({ disabled }) => ({
  position: "absolute",
  right: "122px",
  top: "4px",

  "& .MuiButtonBase-root": {
    minHeight: "unset",
    alignItems: "start",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "#00A3FF",
    border: disabled ? "none" : "1px solid #00A3FF",
  },
}));

const StyledTab = styled((props) => <Tab {...props} />)(() => ({
  minWidth: "24px",
  padding: "2px",
  transition: "color .3s",
  fontFamily: "Titillium Web",
  fontSize: "1.125rem",
  fontWeight: "700",
  lineHeight: "1rem",
}));

const TabProps = (index) => {
  return {
    id: `catalog-analyzer-tab-${index}`,
    "aria-controls": `catalog-analyzer-tabpanel-${index}`,
  };
};

const ListCardsViewSwitchTabs = ({ value, onChange, disabled }) => {
  return (
    <StyledTabs
      orientation="vertical"
      disabled={disabled}
      value={value}
      onChange={onChange}
      aria-label="crm list view switch tabs"
    >
      <StyledTab disabled={disabled} label="List" aria-label="table" {...TabProps(0)} />
      <StyledTab disabled={disabled} label="Card" aria-label="cards" {...TabProps(1)} />
    </StyledTabs>
  );
};

export default ListCardsViewSwitchTabs;
