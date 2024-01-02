import React, { forwardRef, useState } from "react";

import MuiAlert from "@mui/material/Alert";
import { Box, Divider, Snackbar, Stack } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import CustomModal from "../modal/custom-modal.component";
import CustomAccordion from "../accordion/accordion.component";
import StyledTextField from "../styled-text-field/styled-text-field.component";

import {
  AddNewVendorModalContainer,
  Column,
  FieldForm,
  Heading,
  ListContainer,
  Row,
  StickDivider,
  StyledButton,
} from "./add-new-vendor-modal.styles";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddNewVendor = ({ open, onClose }) => {
  const [expanded, setExpanded] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

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
    "Street 1": "",
    "Street 2": "",
    City: "",
    Country: "",
    State: "",
    "Zip Code": "",
    Website: "",
    Login: "",
    Password: "",
    Rep_Name: "",
    Rep_Title: "",
    Rep_Email: "",
    Rep_Phone: "",
    Rep_Fax: "",
  });

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
    Note: true,
    "Street 1": true,
    "Street 2": true,
    City: true,
    Country: true,
    State: true,
    "Zip Code": true,
    Website: true,
    Login: true,
    Password: true,
    Rep_Name: true,
    Rep_Title: true,
    Rep_Email: true,
    Rep_Phone: true,
    Rep_Fax: true,
  });

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleErrorOpen = () => {
    setErrorOpen(true);
  };
  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorOpen(false);
  };

  const handleTextFieldChange = (fieldName) => (event) => {
    setFormValues({
      ...formValues,
      [fieldName]: event.target.value,
    });

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
      //"Note",
      "Street 1",
      //"Street 2",
      "City",
      "Country",
      "State",
      "Zip Code",
      "Website",
      "Login",
      "Password",
      "Rep_Name",
      "Rep_Title",
      "Rep_Email",
      "Rep_Phone",
      "Rep_Fax",
    ];

    let isValid = true;

    const updatedFieldValidation = {};

    requiredFields.forEach((field) => {
      updatedFieldValidation[field] = formValues[field] !== "";

      if (!updatedFieldValidation[field]) {
        isValid = false;
      }
    });

    setFieldValidation(updatedFieldValidation);

    if (isValid) {
      console.log("Form is valid");
    } else handleErrorOpen();
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
              <Box>
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

                <Row>
                  <Column>
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
                      name="Phone #"
                      label="Phone #"
                      placeholder="Phone #"
                      value={formValues["Phone #"]}
                      error={!fieldValidation["Phone #"]}
                      onChange={handleTextFieldChange("Phone #")}
                    />
                  </Column>

                  <Column>
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
                  </Column>
                </Row>

                <StyledTextField
                  //required
                  fullWidth
                  name="Note"
                  label="Note"
                  placeholder="Note"
                  value={formValues["Note"]}
                  //error={!fieldValidation["Note"]}
                  onChange={handleTextFieldChange("Note")}
                />
              </Box>
            </CustomAccordion>

            <Divider flexItem />

            <CustomAccordion summary="Address" expanded={expanded === "panel2"} onChange={handleExpand("panel2")}>
              <Box>
                <Stack spacing="16px">
                  <StyledTextField
                    required
                    fullWidth
                    name="Street 1"
                    label="Street 1"
                    placeholder="Street 1"
                    value={formValues["Street 1"]}
                    error={!fieldValidation["Street 1"]}
                    onChange={handleTextFieldChange("Street 1")}
                  />
                  <StyledTextField
                    //required
                    fullWidth
                    name="Street 2"
                    label="Street 2"
                    placeholder="Street 2"
                    value={formValues["Street 2"]}
                    //error={!fieldValidation["Street 2"]}
                    onChange={handleTextFieldChange("Street 2")}
                  />
                </Stack>

                <Row>
                  <Column>
                    <StyledTextField
                      required
                      fullWidth
                      name="City"
                      label="City"
                      placeholder="City"
                      value={formValues["City"]}
                      error={!fieldValidation["City"]}
                      onChange={handleTextFieldChange("City")}
                    />

                    <StyledTextField
                      required
                      fullWidth
                      name="Country"
                      label="Country"
                      placeholder="Country"
                      value={formValues["Country"]}
                      error={!fieldValidation["Country"]}
                      onChange={handleTextFieldChange("Country")}
                    />
                  </Column>

                  <Column>
                    <StyledTextField
                      required
                      fullWidth
                      name="State"
                      label="State"
                      placeholder="State"
                      value={formValues["State"]}
                      error={!fieldValidation["State"]}
                      onChange={handleTextFieldChange("State")}
                    />

                    <StyledTextField
                      required
                      fullWidth
                      name="Zip Code"
                      label="Zip Code"
                      placeholder="Zip Code"
                      value={formValues["Zip Code"]}
                      error={!fieldValidation["Zip Code"]}
                      onChange={handleTextFieldChange("Zip Code")}
                    />
                  </Column>
                </Row>
              </Box>
            </CustomAccordion>

            <Divider flexItem />

            <CustomAccordion summary="Website" expanded={expanded === "panel3"} onChange={handleExpand("panel3")}>
              <Box>
                <StyledTextField
                  required
                  fullWidth
                  name="Website"
                  label="Website"
                  placeholder="Website"
                  value={formValues["Website"]}
                  error={!fieldValidation["Website"]}
                  onChange={handleTextFieldChange("Website")}
                />

                <Row>
                  <Column>
                    <StyledTextField
                      required
                      fullWidth
                      name="Login"
                      label="Login"
                      placeholder="Login"
                      value={formValues["Login"]}
                      error={!fieldValidation["Login"]}
                      onChange={handleTextFieldChange("Login")}
                    />
                  </Column>

                  <Column>
                    <StyledTextField
                      required
                      fullWidth
                      name="Password"
                      label="Password"
                      placeholder="Password"
                      value={formValues["Password"]}
                      error={!fieldValidation["Password"]}
                      onChange={handleTextFieldChange("Password")}
                    />
                  </Column>
                </Row>
              </Box>
            </CustomAccordion>

            <Divider flexItem />

            <CustomAccordion
              summary="Sales Rep Info"
              expanded={expanded === "panel4"}
              onChange={handleExpand("panel4")}
            >
              <Box>
                <StyledTextField
                  required
                  fullWidth
                  name="Name"
                  label="Name"
                  placeholder="Name"
                  value={formValues["Rep_Name"]}
                  error={!fieldValidation["Rep_Name"]}
                  onChange={handleTextFieldChange("Rep_Name")}
                />

                <Row>
                  <Column>
                    <StyledTextField
                      required
                      fullWidth
                      name="Title"
                      label="Title"
                      placeholder="Title"
                      value={formValues["Rep_Title"]}
                      error={!fieldValidation["Rep_Title"]}
                      onChange={handleTextFieldChange("Rep_Title")}
                    />
                    <StyledTextField
                      required
                      fullWidth
                      name="Email"
                      label="Email"
                      placeholder="Email"
                      value={formValues["Rep_Email"]}
                      error={!fieldValidation["Rep_Email"]}
                      onChange={handleTextFieldChange("Rep_Email")}
                    />
                  </Column>

                  <Column>
                    <StyledTextField
                      required
                      fullWidth
                      name="Phone"
                      label="Phone"
                      placeholder="Phone"
                      value={formValues["Rep_Phone"]}
                      error={!fieldValidation["Rep_Phone"]}
                      onChange={handleTextFieldChange("Rep_Phone")}
                    />
                    <StyledTextField
                      required
                      fullWidth
                      name="Fax"
                      label="Fax"
                      placeholder="Fax"
                      value={formValues["Rep_Fax"]}
                      error={!fieldValidation["Rep_Fax"]}
                      onChange={handleTextFieldChange("Rep_Fax")}
                    />
                  </Column>
                </Row>
              </Box>
            </CustomAccordion>
          </ListContainer>
          <Stack direction="row" gap="16px">
            <StyledButton variant="text" size="large" onClick={onClose}>
              Cancel
            </StyledButton>
            <StyledButton
              variant="contained"
              size="large"
              endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "1.125rem !important" }} />}
              onClick={handleSubmit}
            >
              Add New Vendor
            </StyledButton>
          </Stack>
        </FieldForm>
      </AddNewVendorModalContainer>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={errorOpen}
        autoHideDuration={6000}
        onClose={handleErrorClose}
      >
        <Alert severity="error">Please fill in all required fields!</Alert>
      </Snackbar>
    </CustomModal>
  );
};

export default AddNewVendor;
