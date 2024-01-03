import React from "react";
import {
  CrmCardContainer,
  CrmCardContent,
  CrmCardHeader,
  Label,
  RegularText,
  Value,
  VendorFallback,
  VendorFallbackLogo,
  VendorLogo,
  VendorName,
} from "./crm-card.styles";
import Thumbnail from "../thumbnail/thumbnail.component";
import { Box, Link, Stack } from "@mui/material";
import BadgeButton from "../buttons/badge-button/badge-button.component";

const CrmCard = ({ cardData }) => {
  const {
    paymentStatus = "",
    vendorName = "Vendor Name",
    totalPos = 0,
    leadTimeMin = "N/A",
    leadTimeMax = "N/A",
    vendorImage,
    phoneNumber = "",
  } = cardData || {};
  return (
    <CrmCardContainer>
      <CrmCardHeader>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" flex={1}>
          <Stack spacing="10px">
            <Thumbnail status={paymentStatus} />
            <VendorName>{vendorName}</VendorName>
          </Stack>
          <span style={{ position: "relative", top: "16px" }}>
            <BadgeButton />
          </span>
        </Stack>
      </CrmCardHeader>

      <CrmCardContent>
        <Box component="span" display="flex" alignItems="center" gap="10px">
          <Label>Total PO's:</Label>
          <Value>{totalPos}</Value>
        </Box>
        <Box component="span" display="flex" alignItems="center" gap="10px">
          <Label>Lead Time:</Label>
          <Value>
            MIN:&nbsp;<Value>{leadTimeMin}</Value>
          </Value>
          <Value>
            MAX:&nbsp;<Value>{leadTimeMax}</Value>
          </Value>
        </Box>
        <Stack direction="row" gap="3px" alignItems="center" justifyContent="space-between">
          {vendorImage && vendorImage !== null ? (
            <VendorLogo src={vendorImage} loading="lazy" />
          ) : (
            <VendorFallback>
              <VendorFallbackLogo />
            </VendorFallback>
          )}
          <RegularText>{phoneNumber}</RegularText>
          <Link href="#">Send Email</Link>
        </Stack>
      </CrmCardContent>
    </CrmCardContainer>
  );
};

export default CrmCard;
