import React from "react";
import { Box, Card, Stack } from "@mui/material";

import BadgeButton from "../buttons/badge-button/badge-button.component";
import UsersContainer from "../vendor-users-container/vendor-users-container.component";

import {
  AvatarsContainer,
  DescriptionSmallGrey,
  DescriptionSmallHighlighted,
  HeadingLarge,
  VendorFallback,
  VendorFallbackLogo,
  VendorLogo,
} from "./vendor-and-users-details.styles";

const VendorAndUsersDetails = ({ users, vendor }) => {
  return (
    <Card elevation={0} sx={{ overflow: "unset" }}>
      {users && users.length !== 0 ? (
        <AvatarsContainer>
          <Box component="div">
            <DescriptionSmallHighlighted style={{ marginBottom: "3px" }}>Assigned to:</DescriptionSmallHighlighted>
            <UsersContainer users={users} />
          </Box>
        </AvatarsContainer>
      ) : null}

      <Stack direction="row" gap="12px" alignItems="center">
        <Box component="div" sx={{ position: "relative" }}>
          {vendor.vendorImage && vendor.vendorImage !== null ? (
            <VendorLogo src={vendor.vendorImage} loading="lazy" />
          ) : (
            <VendorFallback>
              <VendorFallbackLogo />
            </VendorFallback>
          )}

          <BadgeButton />
        </Box>

        <Box>
          <Stack spacing="2px" marginBottom="6px">
            <DescriptionSmallHighlighted>Vendor:</DescriptionSmallHighlighted>
            <HeadingLarge style={{ textTransform: "uppercase" }}>{vendor.vendorName}</HeadingLarge>
          </Stack>
          <DescriptionSmallGrey>{vendor.vendorName}</DescriptionSmallGrey>
        </Box>
      </Stack>
    </Card>
  );
};

export default VendorAndUsersDetails;
