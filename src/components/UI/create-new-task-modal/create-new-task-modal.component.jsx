import React, { useState } from "react";
import { Divider, Grid, Stack } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";

import CustomModal from "../modal/custom-modal.component";
import BadgeButton from "../buttons/badge-button/badge-button.component";
import CustomizedSearchField from "../searchfield/searchfield.component";

import {
  ActionBox,
  BrowseFilesLogo,
  CraeteNewTaskModalContainer,
  Heading,
  Headline,
  InfoTextBig,
  InfoTextNormal,
  InputLabel,
  StickDivider,
  SubHeading,
  SupportingTextGrey,
} from "./create-new-task-modal.styles";
import Dropdown from "../dropdown/dropdown.component";
import Button, { BUTTON_TYPE_CLASSES } from "../buttons/button/button.component";
import Ripple from "../buttons/_ripple/ripple.component";

const steps = ["", "", ""];

const CraeteNewTaskModal = ({ open, onClose, data }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleActiveStepIncrement = (newStep) => {
    setActiveStep(newStep);
  };

  return (
    <CustomModal open={open} onClose={onClose}>
      <CraeteNewTaskModalContainer>
        <Stack spacing="30px" alignItems="center" width="100%">
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          <Headline>
            <Heading>{steps[activeStep]}</Heading>
            <SubHeading>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eveniet natus dolor ducimus mollitia
              omnis assumenda dolore quam, sequi, hic nihil et fuga rerum, magnam consectetur exercitationem soluta
              incidunt pariatur!
            </SubHeading>
            <StickDivider />
          </Headline>

          <Box sx={{ flexGrow: 1, width: "580px" }}>
            <Grid container spacing="30px">
              <Grid item xs={5}>
                <ActionBox>
                  <Stack spacing="12px" width="100%">
                    <div>
                      <InputLabel style={{ marginBottom: "4px" }}>Select Vendor</InputLabel>
                      <Dropdown data={null} placeholder="Select Vendor" />
                    </div>
                    <div>
                      <InputLabel style={{ marginBottom: "4px" }}>Add Assignee</InputLabel>
                      <Dropdown data={null} placeholder="Add Assignee" />
                    </div>
                  </Stack>
                </ActionBox>
              </Grid>
              <Grid item xs={7}>
                <ActionBox style={{ border: "1px dashed #6FD5F6" }}>
                  <Stack spacing="15px" alignItems="center">
                    <InfoTextBig>Upload File</InfoTextBig>
                    <BrowseFilesLogo />
                    <div>
                      <InfoTextNormal style={{ marginBottom: "6px" }}>
                        Select a file or drag and drop here
                      </InfoTextNormal>
                      <SupportingTextGrey>Only .xlsx or .csv files are supported</SupportingTextGrey>
                    </div>
                    <Button
                      buttonType={BUTTON_TYPE_CLASSES.white}
                      width="218px"
                      maxWidth="218px"
                      height="32px"
                      padding="8px 16px"
                      style={{ fontSize: "0.875rem" }}
                      onClick={() => handleActiveStepIncrement(1)}
                    >
                      Upload File
                      <Ripple color="#1565D8" />
                    </Button>
                  </Stack>
                </ActionBox>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </CraeteNewTaskModalContainer>
    </CustomModal>
  );
};

export default CraeteNewTaskModal;
