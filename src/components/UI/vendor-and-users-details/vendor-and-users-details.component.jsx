import React, { useState } from "react";

import { Box, Card, Stack } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import BadgeButton from "../buttons/badge-button/badge-button.component";
import UsersContainer from "../vendor-users-container/vendor-users-container.component";
import AdjustVendorInfoModal from "../adjust-vendor-info-modal/adjust-vendor-info-modal.component";

import {
  AddAssigneeButton,
  AvatarsContainer,
  Circle,
  DescriptionSmallGrey,
  DescriptionSmallHighlighted,
  HeadingLarge,
  VendorFallback,
  VendorFallbackLogo,
  VendorLogo,
} from "./vendor-and-users-details.styles";
import ChooseVendorsModal from "../choose-vendors-modal/choose-vendors-modal.component";

const VendorAndUsersDetails = ({ users, vendor }) => {
  const [isAdjustVendorInfoOpen, setIsAdjustVendorInfoOpen] = useState(false);

  const handleAdjustVendorInfoOpen = () => {
    setIsAdjustVendorInfoOpen(true);
  };
  const handleAdjustVendorInfoClose = () => {
    setIsAdjustVendorInfoOpen(false);
  };

  return (
    <Card elevation={0} sx={{ overflow: "unset" }}>
      <DescriptionSmallHighlighted style={{ marginBottom: "3px", justifyContent: "end" }}>
        Assigned to:
      </DescriptionSmallHighlighted>
      <AvatarsContainer>
        {users && users.length !== 0 ? (
          <UsersContainer users={users} />
        ) : (
          <AddAssigneeButton>
            <Circle>
              <AddRoundedIcon sx={{ color: "#00A3FF" }} />
            </Circle>
            <DescriptionSmallHighlighted style={{ color: "#00A3FF", whiteSpace: "pre-line" }}>
              {"Add\nAssignee"}
            </DescriptionSmallHighlighted>
          </AddAssigneeButton>
        )}
      </AvatarsContainer>

      <Stack direction="row" gap="12px" alignItems="center">
        <Box component="div" sx={{ position: "relative" }}>
          {vendor.vendorImage && vendor.vendorImage !== null ? (
            <VendorLogo src={vendor.vendorImage} loading="lazy" />
          ) : (
            <VendorFallback>
              <VendorFallbackLogo />
            </VendorFallback>
          )}

          <BadgeButton onClick={handleAdjustVendorInfoOpen} />
        </Box>

        <Box>
          <Stack spacing="2px" marginBottom="6px">
            <DescriptionSmallHighlighted>Vendor:</DescriptionSmallHighlighted>
            <HeadingLarge style={{ textTransform: "uppercase" }}>{vendor.vendorName}</HeadingLarge>
          </Stack>
          <DescriptionSmallGrey>{vendor.vendorName}</DescriptionSmallGrey>
        </Box>
      </Stack>

      <AdjustVendorInfoModal open={isAdjustVendorInfoOpen} onClose={handleAdjustVendorInfoClose} vendor={vendor} />
    </Card>
  );
};

export default VendorAndUsersDetails;
