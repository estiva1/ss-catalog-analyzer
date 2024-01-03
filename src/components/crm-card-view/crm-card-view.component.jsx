import React, { useState } from "react";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CrmCard from "../UI/crm-card/crm-card.component";
import { Column, ColumnContainer, Columns, RowName } from "./crm-card-view.styles";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

const LongMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizRoundedIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === "Pyxis"} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const CrmCardView = ({ data, itemFilter }) => {
  const crmItems = data.map(
    ({
      id,
      vendorName,
      vendorImage,
      userCategory,
      vendorStatus,
      amazonCategory,
      paymentStatus,
      leadTimeMin,
      leadTimeMax,
      phoneNumber,
      email,
      totalPos,
      accountStatus,
      vendorNote,
      adress,
    }) => {
      const { vendor, basedIn } = adress || {};

      return {
        id,
        vendorName,
        vendorImage,
        userCategory,
        vendorStatus,
        amazonCategory,
        paymentStatus,
        leadTimeMin,
        leadTimeMax,
        phoneNumber,
        email,
        totalPos,
        accountStatus,
        vendorNote,
        vendor,
        basedIn,
      };
    }
  );

  //   const filteredData = selectedStatus
  //     ? crmItems.filter(
  //         (item) =>
  //           item.vendorStatus.toLowerCase() === selectedStatus || item.paymentStatus.toLowerCase() === selectedStatus
  //       )
  //     : crmItems;

  const matchingData = crmItems.filter((item) => {
    const vendorNameMatch = item.vendorName.toLowerCase().includes(itemFilter);
    return vendorNameMatch;
  });

  const prospectData = matchingData.filter((item) => item.vendorStatus === "Prospect");
  const openData = matchingData.filter((item) => item.vendorStatus === "Open");
  const rejectedData = matchingData.filter((item) => item.vendorStatus === "Rejected");
  const closedData = matchingData.filter((item) => item.vendorStatus === "Closed");

  return (
    <Columns>
      <ColumnContainer>
        <Column>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <RowName style={{ color: "#1565D8" }}>Prospect</RowName>
            <LongMenu />
          </Stack>
          {prospectData.map((item) => (
            <CrmCard key={`prospect-card-${item.id}`} cardData={item} />
          ))}
        </Column>
      </ColumnContainer>
      <ColumnContainer>
        <Column>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <RowName style={{ color: "#009C34" }}>Open</RowName>
            <LongMenu />
          </Stack>
          {openData.map((item) => (
            <CrmCard key={`open-card-${item.id}`} cardData={item} />
          ))}
        </Column>
      </ColumnContainer>
      <ColumnContainer>
        <Column>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <RowName style={{ color: "#F90" }}>Rejected</RowName>
            <LongMenu />
          </Stack>
          {rejectedData.map((item) => (
            <CrmCard key={`rejected-card-${item.id}`} cardData={item} />
          ))}
        </Column>
      </ColumnContainer>
      <ColumnContainer>
        <Column>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <RowName style={{ color: "#CF0909" }}>Closed</RowName>
            <LongMenu />
          </Stack>
          {closedData.map((item) => (
            <CrmCard key={`closed-card-${item.id}`} cardData={item} />
          ))}
        </Column>
      </ColumnContainer>
    </Columns>
  );
};

export default CrmCardView;
