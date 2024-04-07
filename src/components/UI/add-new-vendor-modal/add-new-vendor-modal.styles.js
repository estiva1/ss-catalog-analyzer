import styled from "styled-components";
import { Button } from "@mui/material";
import { device } from "../../../breakpoints.styles";

export const AddNewVendorModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1266px;
  padding: calc(8px + 1.5625vw);
  align-items: center;
  align-self: stretch;
  gap: 30px;
`;

export const FieldForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //align-items: flex-end;
  gap: 24px;
  //align-self: stretch;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding: 24px 20px;
  gap: 16px;
  border-radius: 8px;
  background: #fff;
`;

export const StyledButton = styled(Button)`
  &.MuiButton-contained,
  &.MuiButton-text {
    min-width: 36px;
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    text-transform: none;
    white-space: nowrap;
  }
  &.MuiButton-contained {
    background-color: #0057d3;
    .MuiButton-endIcon {
      transition: 0.15s;
    }
    &:hover {
      .MuiButton-endIcon {
        transition: 0.15s;
        transform: translateX(2px);
      }
    }
  }
`;

export const Heading = styled.h2`
  color: #000;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.875rem;
`;

export const HeadingMedium = styled.h3`
  color: #000;
  font-family: Titillium Web;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

export const HeadingDot = styled.span`
  min-width: 15px;
  min-height: 15px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #00a3ff;
`;

export const StickDivider = styled.span`
  width: 88px;
  height: 4px;
  border-radius: 2px;
  background: #00a3ff;
`;

export const SubHeadline = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const CardContent = styled.div`
  padding-top: 16px;
`;

export const VendorImageLoaderFrame = styled.div`
  width: 64px;
  height: 64px;
  background: #e8f7ff;
  border-radius: 20px;
  border: 1px dashed #00a3ff;
`;
