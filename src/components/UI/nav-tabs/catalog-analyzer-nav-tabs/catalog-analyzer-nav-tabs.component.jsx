import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import Dropdown from "../../../UI/dropdown/dropdown.component";
import CrmListView from "../../../crm-list-view/crm-list-view.component";
import CustomizedSearchField from "../../../UI/searchfield/searchfield.component";
import VendorFoldersView from "../../../vendor-folders-view/vendor-folders-view.component";
import { CrmListTabIcon, TaskTabIcon, VendorFoldersTabIcon } from "./catalog-analyzer-nav-tabs.styles";
import { tasksTableData } from "../../../../constants/tasksTableData";
import TaskTable from "../../tables/tasks-table/tasks-table.component";
import ListCardsViewSwitchTabs from "../list-cards-view-swich-tabs/list-cards-view-swich-tabs.component";

const StyledTabs = styled((props) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    padding: 0,
    height: "100%",
    justifyContent: "center",
    backgroundColor: "transparent",
    border: "2px solid #00A3FF",
    borderRadius: "10px",
  },
  "& .MuiTabs-flexContainer": {
    justifyContent: "flex-end",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontFamily: "Titillium Web",
  fontSize: "1.25rem",
  fontWeight: "700",
  lineHeight: "1rem",
  marginRight: "8px",
  color: "#4E5969",
  padding: "8px",
  minHeight: "unset",
  "&.Mui-selected": {
    color: "#4E5969",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

const MotionWrapper = ({ key, children }) => {
  return (
    <motion.div
      key={key}
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <MotionWrapper
      role="catalog-analyzer-tabpanel"
      //hidden={value !== index}
      id={`catalog-analyzer-tabpanel-${index}`}
      aria-labelledby={`catalog-analyzer-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </MotionWrapper>
  );
};

const TabProps = (index) => {
  return {
    id: `catalog-analyzer-tab-${index}`,
    "aria-controls": `catalog-analyzer-tabpanel-${index}`,
  };
};

const CatalogAnalyzerNavTabs = () => {
  const [tab, setTab] = useState(0);
  const [crmTab, setCrmTab] = useState(0);
  const [itemFilter, setItemFilter] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(null);

  const dropdownTestOptions = [
    "prospect",
    "open",
    "rejected",
    "closed",
    "prepaid",
    "credit card",
    "ach",
    "net 30 terms",
  ];

  const handleItemFilterChange = (event) => setItemFilter(event.target.value);

  const handleCrmTabChange = (event, newValue) => {
    setCrmTab(newValue);
  };
  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <Box>
      <Box sx={{ marginBottom: "12px" }}>
        <Stack direction="row" gap="10px" alignItems="center" justifyContent="end">
          <AnimatePresence mode="wait">
            {(tab === 1 || tab === 2) && (
              <MotionWrapper>
                <Stack direction="row" spacing="10px" alignItems="center">
                  <div style={{ width: "320px" }}>
                    <CustomizedSearchField
                      id="searchfield-for-tables"
                      fullWidth
                      placeholder="Search by Name"
                      value={itemFilter}
                      onChange={handleItemFilterChange}
                    />
                  </div>
                  <div style={{ width: "250px" }}>
                    <Dropdown
                      placeholder="Filter by Vendor"
                      data={dropdownTestOptions}
                      setSelectedValue={setSelectedStatus}
                    />
                  </div>
                </Stack>
              </MotionWrapper>
            )}
          </AnimatePresence>

          <StyledTabs
            value={tab}
            onChange={handleChange}
            aria-label="catalog analyzer tabs"
          >
            <StyledTab
              icon={<VendorFoldersTabIcon />}
              iconPosition="start"
              label="Vendor view"
              {...TabProps(0)}
            />
            <StyledTab icon={<CrmListTabIcon />} iconPosition="start" label="CRM View" {...TabProps(1)} />
            <StyledTab sx={{ mr: 0 }} icon={<TaskTabIcon />} iconPosition="start" label="Tasks" {...TabProps(2)} />
          </StyledTabs>

          <ListCardsViewSwitchTabs disabled={tab !== 1} value={crmTab} onChange={handleCrmTabChange} />
        </Stack>
      </Box>

      <AnimatePresence mode="wait">
        {tab === 0 && (
          <CustomTabPanel key={0} index={0} value={tab}>
            <VendorFoldersView />
          </CustomTabPanel>
        )}
        {tab === 1 && (
          <CustomTabPanel key={1} index={1} value={tab}>
            <CrmListView itemFilter={itemFilter} selectedStatus={selectedStatus} crmView={crmTab} />
          </CustomTabPanel>
        )}
        {tab === 2 && (
          <CustomTabPanel key={2} index={2} value={tab}>
            <TaskTable data={tasksTableData} itemFilter={itemFilter.toLowerCase()} selectedStatus={selectedStatus} />
          </CustomTabPanel>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default CatalogAnalyzerNavTabs;
