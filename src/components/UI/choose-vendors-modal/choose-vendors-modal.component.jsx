import React, { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import CustomModal from "../modal/custom-modal.component";
import BadgeButton from "../buttons/badge-button/badge-button.component";
import CustomizedSearchField from "../searchfield/searchfield.component";

import {
  ChooseVendorsModalContainer,
  Heading,
  Info,
  InfoBar,
  InfoTextNormal,
  StickDivider,
  StyledButton,
  StyledMuiLink,
  Vendor,
  VendorFallback,
  VendorFallbackLogo,
  VendorLogo,
  VendorName,
} from "./choose-vendors-modal.styles";

const ChooseVendorsModal = ({ open, onClose, data }) => {
  const [itemFilter, setItemFilter] = useState("");

  const handleItemFilterChange = (event) => setItemFilter(event.target.value);

  const generateHighlightedText = (text, filterValue) => {
    const lowerText = text.toLowerCase();
    const lowerFilterValue = filterValue.toLowerCase();

    if (!lowerText.includes(lowerFilterValue)) {
      return text;
    }

    const startIndex = lowerText.indexOf(lowerFilterValue);
    const endIndex = startIndex + lowerFilterValue.length;

    return (
      <>
        {text.substring(0, startIndex)}
        <span style={{ backgroundColor: "#1565D8", color: "#fff" }}>{text.substring(startIndex, endIndex)}</span>
        {text.substring(endIndex)}
      </>
    );
  };

  const matchingData = data.filter((item) => {
    const vendorNameMatch = item.vendor.vendorName.toLowerCase().includes(itemFilter);
    return vendorNameMatch;
  });
  return (
    <CustomModal open={open} onClose={onClose} cornerPlacement>
      <ChooseVendorsModalContainer>
        <Stack spacing="20px" alignItems="center">
          <Heading>{"Choose Bilt-in Vendors or\nAdd New One"}</Heading>
          <StickDivider />
        </Stack>

        <CustomizedSearchField
          id="searchfield-for-choose-vendor-modal"
          fullWidth
          placeholder="Search by Vendor Name"
          value={itemFilter}
          onChange={handleItemFilterChange}
        />

        <Stack spacing="16px" width="100%">
          {matchingData.map((item, index) => (
            <InfoBar key={index}>
              <Info>
                <Vendor>
                  <Box component="div" sx={{ position: "relative" }}>
                    {item.vendor.vendorImage && item.vendor.vendorImage !== null ? (
                      <VendorLogo src={item.vendor.vendorImage} loading="lazy" />
                    ) : (
                      <VendorFallback>
                        <VendorFallbackLogo />
                      </VendorFallback>
                    )}

                    <BadgeButton />
                  </Box>
                  <VendorName>{generateHighlightedText(item.vendor.vendorName, itemFilter)}</VendorName>
                </Vendor>

                <Divider sx={{ marginInline: "20px" }} orientation="vertical" flexItem />

                <Stack spacing="6px">
                  <InfoTextNormal>
                    Phone #:&nbsp;<span style={{ fontWeight: "700" }}>{item.vendor.vendorPhone}</span>
                  </InfoTextNormal>
                  <InfoTextNormal>
                    Email:&nbsp;<span style={{ fontWeight: "700" }}>{item.vendor.vendorEmail}</span>
                  </InfoTextNormal>
                  <InfoTextNormal>
                    Notes:&nbsp;
                    <span style={{ fontWeight: "700" }}>
                      {!item.vendor.vendorNotes ? "No notes" : item.vendor.vendorNotes}
                    </span>
                  </InfoTextNormal>
                </Stack>

                <Divider sx={{ marginInline: "20px" }} orientation="vertical" flexItem />

                <Stack spacing="6px">
                  <InfoTextNormal>
                    Vendor Type:&nbsp;<span style={{ fontWeight: "700" }}>{item.vendor.vendorType}</span>
                  </InfoTextNormal>
                  <InfoTextNormal>
                    Amazon Cat.:&nbsp;<span style={{ fontWeight: "700" }}>{item.vendor.amazonCat}</span>
                  </InfoTextNormal>
                  <InfoTextNormal>
                    Account Status:&nbsp;
                    <span style={{ fontWeight: "700" }}>{item.vendor.accountStatus}</span>
                  </InfoTextNormal>
                </Stack>
              </Info>
            </InfoBar>
          ))}
        </Stack>

        <Stack direction="row" gap="16px" justifyContent="end">
          <StyledButton variant="text" size="large" onClick={onClose}>
            Choose Built-in Vendors
          </StyledButton>
          <StyledButton
            variant="contained"
            size="large"
            endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "1.125rem !important" }} />}
          >
            Add New Vendor
          </StyledButton>
        </Stack>
      </ChooseVendorsModalContainer>
    </CustomModal>
  );
};

export default ChooseVendorsModal;
