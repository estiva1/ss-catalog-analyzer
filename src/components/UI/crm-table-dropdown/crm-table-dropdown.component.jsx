import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { ListItem, PrimaryText, StyledAutocomplete } from "./crm-table-dropdown.styles";

const CrmTableDropdown = ({ initial = "", data = {}, setSelectedValue }) => {
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
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // State to hold initial value
  const [initialValue, setInitialValue] = useState(null);

  useEffect(() => {
    // Update initial value when data changes
    setInitialValue(initial);
  }, []);

  useEffect(() => {
    // Set initial value when component mounts
    if (initialValue !== null) {
      setValue(initialValue);
      setSelectedValue(initialValue);
    }
  }, [initialValue, setSelectedValue]);

  const handleValueChange = (event, newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  return (
    <StyledAutocomplete
      sx={{ background: `${value && COLORS[value].secondary}`, height: "100%" }}
      $colorPrimary={`${value && COLORS[value].primary}`}
      id="crm-table-dropdown"
      value={value}
      options={data}
      disableClearable
      inputValue={inputValue}
      onChange={handleValueChange}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={(option) => `${option}`}
      renderInput={(params) => <TextField {...params} />}
      renderOption={(props, option, state) => {
        return (
          <ListItem {...props}>
            <PrimaryText $colorPrimary={`${COLORS[option].primary}`} $colorSecondary={`${COLORS[option].secondary}`}>
              {option}
            </PrimaryText>
          </ListItem>
        );
      }}
    />
  );
};

export default CrmTableDropdown;
