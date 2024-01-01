import React, { useState } from "react";

import { Box, Divider, Stack } from "@mui/material";

import CustomModal from "../modal/custom-modal.component";
import CustomAccordion from "../accordion/accordion.component";
import StyledTextField from "../styled-text-field/styled-text-field.component";

import {
  AddNewVendorModalContainer,
  FieldForm,
  Heading,
  ListContainer,
  StickDivider,
} from "./add-new-vendor-modal.styles";

const AddNewVendor = ({ open, onClose }) => {
  const [expanded, setExpanded] = useState(false);
  const [formValues, setFormValues] = useState({
    "Vendor Name": "",
    "User Category": "",
    "Amazon Category": "",
    "Account Status": "",
    "Account #": "",
    "Lead Time (MIN)": "",
    "Lead Time (MAX)": "",
    "Phone #": "",
    Email: "",
    Note: "",
  });

  // State to track the validation status of each field
  const [fieldValidation, setFieldValidation] = useState({
    "Vendor Name": true,
    "User Category": true,
    "Amazon Category": true,
    "Account Status": true,
    "Account #": true,
    "Lead Time (MIN)": true,
    "Lead Time (MAX)": true,
    "Phone #": true,
    Email: true,
    //Note: true,
  });

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleTextFieldChange = (fieldName) => (event) => {
    setFormValues({
      ...formValues,
      [fieldName]: event.target.value,
    });

    // Reset validation status when the user starts typing
    setFieldValidation({
      ...fieldValidation,
      [fieldName]: true,
    });
  };

  const handleSubmit = () => {
    const requiredFields = [
      "Vendor Name",
      "User Category",
      "Amazon Category",
      "Account Status",
      "Account #",
      "Lead Time (MIN)",
      "Lead Time (MAX)",
      "Phone #",
      "Email",
    ];

    let isValid = true;

    const updatedFieldValidation = {};

    requiredFields.forEach((field) => {
      updatedFieldValidation[field] = formValues[field] !== "";

      // You can also highlight the fields that are empty after the Submit button is clicked
      if (!updatedFieldValidation[field]) {
        isValid = false;
      }
    });

    // Update the state once after the loop
    setFieldValidation(updatedFieldValidation);

    if (isValid) {
      // Submit the form or perform further actions
      console.log("Form is valid");
    } else {
      console.log("Please fill in all required fields");
    }
  };
  return (
    <CustomModal open={open} onClose={onClose}>
      <AddNewVendorModalContainer>
        <Stack spacing="20px" alignItems="center">
          <Heading>Add New Vendor</Heading>
          <StickDivider />
        </Stack>

        <FieldForm>
          <ListContainer>
            <CustomAccordion
              summary="General Settings"
              expanded={expanded === "panel1"}
              onChange={handleExpand("panel1")}
            >
              <Stack spacing="16px">
                <StyledTextField
                  required
                  fullWidth
                  name="Vendor Name"
                  label="Vendor Name"
                  placeholder="Vendor Name"
                  value={formValues["Vendor Name"]}
                  error={!fieldValidation["Vendor Name"]}
                  onChange={handleTextFieldChange("Vendor Name")}
                />

                <Box display="flex" gap="16px">
                  <StyledTextField
                    required
                    fullWidth
                    name="User Category"
                    label="User Category"
                    placeholder="User Category"
                    value={formValues["User Category"]}
                    error={!fieldValidation["User Category"]}
                    onChange={handleTextFieldChange("User Category")}
                  />
                  <StyledTextField
                    required
                    fullWidth
                    name="Amazon Category"
                    label="Amazon Category"
                    placeholder="Amazon Category"
                    value={formValues["Amazon Category"]}
                    error={!fieldValidation["Amazon Category"]}
                    onChange={handleTextFieldChange("Amazon Category")}
                  />
                </Box>

                <Box display="flex" gap="16px">
                  <StyledTextField
                    required
                    fullWidth
                    name="Account #"
                    label="Account #"
                    placeholder="Account #"
                    value={formValues["Account #"]}
                    error={!fieldValidation["Account #"]}
                    onChange={handleTextFieldChange("Account #")}
                  />
                  <StyledTextField
                    required
                    fullWidth
                    name="Account Status"
                    label="Account Status"
                    placeholder="Account Status"
                    value={formValues["Account Status"]}
                    error={!fieldValidation["Account Status"]}
                    onChange={handleTextFieldChange("Account Status")}
                  />
                </Box>

                <Box display="flex" gap="16px">
                  <StyledTextField
                    required
                    fullWidth
                    name="Lead Time (MIN)"
                    label="Lead Time (MIN)"
                    placeholder="Lead Time (MIN)"
                    value={formValues["Lead Time (MIN)"]}
                    error={!fieldValidation["Lead Time (MIN)"]}
                    onChange={handleTextFieldChange("Lead Time (MIN)")}
                  />
                  <StyledTextField
                    required
                    fullWidth
                    name="Lead Time (MAX)"
                    label="Lead Time (MAX)"
                    placeholder="Lead Time (MAX)"
                    value={formValues["Lead Time (MAX)"]}
                    error={!fieldValidation["Lead Time (MAX)"]}
                    onChange={handleTextFieldChange("Lead Time (MAX)")}
                  />
                </Box>

                <Box display="flex" gap="16px">
                  <StyledTextField
                    required
                    fullWidth
                    name="Phone #"
                    label="Phone #"
                    placeholder="Phone #"
                    value={formValues["Phone #"]}
                    error={!fieldValidation["Phone #"]}
                    onChange={handleTextFieldChange("Phone #")}
                  />
                  <StyledTextField
                    required
                    fullWidth
                    name="Email"
                    type="email"
                    label="Email"
                    autoComplete="off"
                    placeholder="Email"
                    value={formValues["Email"]}
                    error={!fieldValidation["Email"]}
                    onChange={handleTextFieldChange("Email")}
                  />
                </Box>

                <StyledTextField
                  fullWidth
                  name="Note"
                  label="Note"
                  placeholder="Note"
                  value={formValues["Note"]}
                  onChange={handleTextFieldChange("Note")}
                />
              </Stack>
            </CustomAccordion>

            <Divider flexItem />

            <CustomAccordion
              summary="Address"
              expanded={expanded === "panel2"}
              onChange={handleExpand("panel2")}
            ></CustomAccordion>

            <Divider flexItem />

            <CustomAccordion
              summary="Website"
              expanded={expanded === "panel3"}
              onChange={handleExpand("panel3")}
            ></CustomAccordion>

            <Divider flexItem />

            <CustomAccordion
              summary="Sales Rep Info"
              expanded={expanded === "panel4"}
              onChange={handleExpand("panel4")}
            ></CustomAccordion>
          </ListContainer>
          <Stack direction="row" gap="16px">
            <button onClick={onClose}>Cancel</button>
            <button onClick={handleSubmit}>Add New Vendor</button>
          </Stack>
        </FieldForm>
      </AddNewVendorModalContainer>
    </CustomModal>
  );
};

export default AddNewVendor;
