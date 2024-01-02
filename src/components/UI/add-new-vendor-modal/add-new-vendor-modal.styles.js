import styled from "styled-components";
import { Button } from "@mui/material";
import { device } from "../../../breakpoints.styles";

export const AddNewVendorModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
  padding: calc(8px + 1.5625vw);
  align-items: center;
  align-self: stretch;
  gap: 30px;

  @media ${device.lg} {
    width: 650px;
  }
  @media ${device.md} {
    width: 550px;
  }
  @media ${device.sm} {
    width: 370px;
  }
  @media ${device.xs} {
    width: 300px;
  }
`;

export const FieldForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 40px;
  align-self: stretch;
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

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  margin-inline: -8px;
`;

export const Column = styled.div`
  width: 50%;
  padding-inline: 8px;
  > * {
    margin-bottom: 16px !important;
  }

  @media ${device.sm} {
    width: 100%;
  }
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

export const StickDivider = styled.span`
  width: 88px;
  height: 4px;
  border-radius: 2px;
  background: #00a3ff;
`;
