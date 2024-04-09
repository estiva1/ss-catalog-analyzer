import React from "react";
import { Box, Divider, Stack } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import CustomModal from "../modal/custom-modal.component";
import BadgeButton from "../buttons/badge-button/badge-button.component";

import {
  AdjustVendorInfoModalContainer,
  EditBox,
  Heading,
  HeadingDot,
  HeadingMedium,
  Hyperlink,
  Info,
  InfoBar,
  InfoBlock,
  InfoTextNormal,
  StickDivider,
  StyledButton,
  StyledMuiLink,
  SubHeadline,
  Vendor,
  VendorFallback,
  VendorFallbackLogo,
  VendorLogo,
  VendorName,
} from "./adjust-vendor-info-modal.styles";

const AdjustVendorInfoModal = ({ open, onClose, vendor }) => {
  return (
    <CustomModal open={open} onClose={onClose} cornerPlacement>
      <AdjustVendorInfoModalContainer>
        <Stack spacing="20px" alignItems="center">
          <Heading>Adjust Vendor Info</Heading>
          <StickDivider />
        </Stack>

        <Stack spacing="20px" width="100%">
          <InfoBlock>
            <SubHeadline>
              <HeadingDot />
              <HeadingMedium>General Info</HeadingMedium>
            </SubHeadline>
            <InfoBar>
              <Info>
                <Vendor>
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
                  <VendorName>{vendor.vendorName}</VendorName>
                </Vendor>
                <Divider sx={{ marginInline: "20px" }} orientation="vertical" flexItem />
                <Stack spacing="6px">
                  <InfoTextNormal>
                    Phone #:&nbsp;<span style={{ fontWeight: "700" }}>{vendor.vendorPhone}</span>
                  </InfoTextNormal>
                  <InfoTextNormal>
                    Email:&nbsp;<span style={{ fontWeight: "700" }}>{vendor.vendorEmail}</span>
                  </InfoTextNormal>
                  <InfoTextNormal>
                    Notes:&nbsp;
                    <span style={{ fontWeight: "700" }}>{!vendor.vendorNotes ? "No notes" : vendor.vendorNotes}</span>
                  </InfoTextNormal>
                </Stack>
                <EditBox>
                  <StyledMuiLink
                    component="button"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    Edit
                  </StyledMuiLink>
                </EditBox>
              </Info>
            </InfoBar>
          </InfoBlock>

          <InfoBlock>
            <SubHeadline>
              <HeadingDot />
              <HeadingMedium>Vendor Categories</HeadingMedium>
            </SubHeadline>
            <InfoBar>
              <Info>
                <Stack spacing="10px" marginRight="10px">
                  <div style={{ display: "flex" }}>
                    <InfoTextNormal>
                      User Category:&nbsp;<span style={{ fontWeight: "700" }}>{vendor.userCategory}</span>
                    </InfoTextNormal>
                    <Divider sx={{ marginInline: "8px" }} orientation="vertical" flexItem />
                    <InfoTextNormal>
                      Vendor Type:&nbsp;<span style={{ fontWeight: "700" }}>{vendor.vendorType}</span>
                    </InfoTextNormal>
                  </div>
                  <div style={{ display: "flex" }}>
                    <InfoTextNormal>
                      Amazon Cat.:&nbsp;<span style={{ fontWeight: "700" }}>{vendor.amazonCat}</span>
                    </InfoTextNormal>
                    <Divider sx={{ marginInline: "8px" }} orientation="vertical" flexItem />
                    <InfoTextNormal>
                      Account Status:&nbsp;<span style={{ fontWeight: "700" }}>{vendor.accountStatus}</span>
                    </InfoTextNormal>
                  </div>
                </Stack>
                <EditBox>
                  <StyledMuiLink
                    component="button"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    Edit
                  </StyledMuiLink>
                </EditBox>
              </Info>
            </InfoBar>
          </InfoBlock>

          <InfoBlock>
            <SubHeadline>
              <HeadingDot />
              <HeadingMedium>Lead Time</HeadingMedium>
            </SubHeadline>
            <InfoBar>
              <Info>
                <Stack spacing="10px" marginRight="10px">
                  <InfoTextNormal>
                    Lead Time (MIN):&nbsp;<span style={{ fontWeight: "700" }}>{vendor.leadTimeMin}</span>
                  </InfoTextNormal>
                  <InfoTextNormal>
                    Lead Time (MAX):&nbsp;<span style={{ fontWeight: "700" }}>{vendor.leadTimeMax}</span>
                  </InfoTextNormal>
                </Stack>
                <EditBox>
                  <StyledMuiLink
                    component="button"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    Edit
                  </StyledMuiLink>
                </EditBox>
              </Info>
            </InfoBar>
          </InfoBlock>

          <InfoBlock>
            <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
              <SubHeadline>
                <HeadingDot />
                <HeadingMedium>Address</HeadingMedium>
              </SubHeadline>
              <StyledMuiLink
                sx={{ fontSize: "0.625rem !important" }}
                component="button"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Add new address
              </StyledMuiLink>
            </Stack>
            <InfoBar>
              <Info>
                <Stack spacing="10px" marginRight="10px">
                  <InfoTextNormal>{vendor.street}</InfoTextNormal>
                  <InfoTextNormal>{vendor.country}</InfoTextNormal>
                </Stack>
                <EditBox>
                  <StyledMuiLink
                    component="button"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    Edit
                  </StyledMuiLink>
                </EditBox>
              </Info>
            </InfoBar>
          </InfoBlock>

          <InfoBlock>
            <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
              <SubHeadline>
                <HeadingDot />
                <HeadingMedium>Vendor's Website</HeadingMedium>
              </SubHeadline>
              <StyledMuiLink
                sx={{ fontSize: "0.625rem !important" }}
                component="button"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Add new website
              </StyledMuiLink>
            </Stack>
            <InfoBar>
              <Info>
                <Stack spacing="10px" marginRight="10px">
                  <Hyperlink target="_blank" rel="noopener" href={"https://" + vendor.website}>
                    {vendor.website}
                  </Hyperlink>
                  <div style={{ display: "flex" }}>
                    <InfoTextNormal>
                      Login:&nbsp;<span style={{ fontWeight: "700" }}>{vendor.login}</span>
                    </InfoTextNormal>
                    <Divider sx={{ marginInline: "8px" }} orientation="vertical" flexItem />
                    <InfoTextNormal>
                      Password:&nbsp;<span style={{ fontWeight: "700" }}>{vendor.password}</span>
                    </InfoTextNormal>
                    <Divider sx={{ marginInline: "8px" }} orientation="vertical" flexItem />
                    <InfoTextNormal>
                      Notes:&nbsp;
                      <span style={{ fontWeight: "700" }}>{!vendor.notes ? "No notes" : vendor.notes}</span>
                    </InfoTextNormal>
                  </div>
                </Stack>
                <EditBox>
                  <StyledMuiLink
                    component="button"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    Edit
                  </StyledMuiLink>
                </EditBox>
              </Info>
            </InfoBar>
          </InfoBlock>

          <InfoBlock>
            <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
              <SubHeadline>
                <HeadingDot />
                <HeadingMedium>Sales Rep Info</HeadingMedium>
              </SubHeadline>
              <StyledMuiLink
                sx={{ fontSize: "0.625rem !important" }}
                component="button"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Add new Rep
              </StyledMuiLink>
            </Stack>
            <InfoBar>
              <Info>
                <Stack spacing="10px" marginRight="10px">
                  <div style={{ display: "flex" }}>
                    <InfoTextNormal>
                      <span style={{ fontWeight: "700", marginRight: "14px" }}>{vendor.salesRepName}</span>
                    </InfoTextNormal>
                    <InfoTextNormal>{vendor.salesRepPosition}</InfoTextNormal>
                  </div>
                  <div style={{ display: "flex" }}>
                    <InfoTextNormal>{vendor.salesRepPhone}</InfoTextNormal>
                    <Divider sx={{ marginInline: "8px" }} orientation="vertical" flexItem />
                    <InfoTextNormal>{vendor.salesRepEmail}</InfoTextNormal>
                    <Divider sx={{ marginInline: "8px" }} orientation="vertical" flexItem />
                    <InfoTextNormal>{vendor.salesRepFax}</InfoTextNormal>
                  </div>
                </Stack>
                <EditBox>
                  <StyledMuiLink
                    component="button"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    Edit
                  </StyledMuiLink>
                </EditBox>
              </Info>
            </InfoBar>
          </InfoBlock>
        </Stack>

        <Stack direction="row" gap="16px" justifyContent="end">
          <StyledButton variant="text" size="large" onClick={onClose}>
            Cancel
          </StyledButton>
          <StyledButton
            variant="contained"
            size="large"
            endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "1.125rem !important" }} />}
          >
            Complete Adjusting
          </StyledButton>
        </Stack>
      </AdjustVendorInfoModalContainer>
    </CustomModal>
  );
};

export default AdjustVendorInfoModal;
