import React, { useState } from "react";
import CustomModal from "../modal/custom-modal.component";
import CustomAccordion from "../accordion/accordion.component";
import { Box, Divider, Stack } from "@mui/material";
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

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleTextFieldChange = (fieldName) => (event) => {
    setFormValues({
      ...formValues,
      [fieldName]: event.target.value,
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
    const isFormValid = requiredFields.every((field) => formValues[field] !== "");

    if (isFormValid) {
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
                    onChange={handleTextFieldChange("User Category")}
                  />
                  <StyledTextField
                    required
                    fullWidth
                    name="Amazon Category"
                    label="Amazon Category"
                    placeholder="Amazon Category"
                    value={formValues["Amazon Category"]}
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
                    onChange={handleTextFieldChange("Account #")}
                  />
                  <StyledTextField
                    required
                    fullWidth
                    name="Account Status"
                    label="Account Status"
                    placeholder="Account Status"
                    value={formValues["Account Status"]}
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
                    onChange={handleTextFieldChange("Lead Time (MIN)")}
                  />
                  <StyledTextField
                    required
                    fullWidth
                    name="Lead Time (MAX)"
                    label="Lead Time (MAX)"
                    placeholder="Lead Time (MAX)"
                    value={formValues["Lead Time (MAX)"]}
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
