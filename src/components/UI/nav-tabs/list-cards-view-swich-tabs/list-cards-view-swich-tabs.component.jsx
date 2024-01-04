import React from "react";
import { styled } from "@mui/material/styles";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

const StyledTabs = styled(({ disabled, ...props }) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))(({ disabled }) => ({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    border: disabled ? "none" : "1px solid #00A3FF",
  },
}));

const StyledTab = styled((props) => <Tab {...props} />)(() => ({
  minWidth: "32px",
  padding: "8px",
  transition: "color .3s",
}));

const TabProps = (index) => {
  return {
    id: `catalog-analyzer-tab-${index}`,
    "aria-controls": `catalog-analyzer-tabpanel-${index}`,
  };
};

const ListCardsViewSwitchTabs = ({ value, onChange, disabled }) => {
  return (
    <StyledTabs disabled={disabled} value={value} onChange={onChange} aria-label="crm list view switch tabs">
      <StyledTab disabled={disabled} icon={<TableRowsRoundedIcon />} aria-label="table" {...TabProps(0)} />
      <StyledTab disabled={disabled} icon={<DashboardRoundedIcon />} aria-label="cards" {...TabProps(1)} />
    </StyledTabs>
  );
};

export default ListCardsViewSwitchTabs;
