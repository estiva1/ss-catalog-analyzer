import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";

import VendorFoldersView from "../../../vendor-folders-view/vendor-folders-view.component";
import { CrmListTabIcon, TaskTabIcon, VendorFoldersTabIcon } from "./catalog-analyzer-nav-tabs.styles";

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

const MotionWrapper = ({ key, children }) => {
  return (
    <motion.div
      key={key}
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const CatalogAnalyzerNavTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ marginBottom: "8px" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="catalog analyzer tabs"
          //variant="fullWidth"
          sx={{ justifyContent: "end" }}
        >
          <StyledTab
            icon={<VendorFoldersTabIcon />}
            iconPosition="start"
            label="Vendor Folders view"
            {...TabProps(0)}
          />
          <StyledTab icon={<CrmListTabIcon />} iconPosition="start" label="CRM List view" {...TabProps(0)} />
          <StyledTab sx={{ mr: 0 }} icon={<TaskTabIcon />} iconPosition="start" label="Task view" {...TabProps(0)} />
        </StyledTabs>
      </Box>
      
      {/*Using AnimatePresence causing jump effect of tab outline*/}
      {/*TODO: Fix jump effect*/}

      {/* <AnimatePresence mode="wait"> */}
        {value === 0 && (
          <CustomTabPanel key={0} index={0} value={value}>
            <VendorFoldersView />
          </CustomTabPanel>
        )}
        {value === 1 && (
          <CustomTabPanel key={1} index={1} value={value}>
            Item Two
          </CustomTabPanel>
        )}
        {value === 2 && (
          <CustomTabPanel key={2} index={2} value={value}>
            Item Three
          </CustomTabPanel>
        )}
      {/* </AnimatePresence> */}
    </Box>
  );
};

export default CatalogAnalyzerNavTabs;
