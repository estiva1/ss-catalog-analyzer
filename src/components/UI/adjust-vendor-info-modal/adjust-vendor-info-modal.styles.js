import { Button, Link } from "@mui/material";
import styled from "styled-components";

export const AdjustVendorInfoModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  max-width: 95vh;
  padding: 30px;
  padding-right: calc(30px - 0.45rem);
  align-items: center;
  gap: 30px;
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

export const SubHeadline = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
`;

export const HeadingDot = styled.span`
  min-width: 15px;
  min-height: 15px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #00a3ff;
`;

export const HeadingMedium = styled.h3`
  color: #000;
  font-family: Titillium Web;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
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

export const InfoBlock = styled.div``;

export const InfoBar = styled.div`
  background: #fff;
  border: 1px solid #1565d8;
  border-radius: 10px;
  padding: 10px;
`;

export const Info = styled.div`
  display: flex;
`;

export const VendorLogo = styled.img`
  position: relative;
  min-width: 64px;
  width: 64px;
  min-height: 64px;
  height: 64px;
`;

export const VendorFallback = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: #b3e3ff;
`;

export const VendorFallbackLogo = styled.span`
  min-width: 40px;
  min-height: 40px;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='40' height='41' fill='none'%3e%3cpath fill='%23fff' d='M24.444 12.722h2.223v3.89h-2.223v-3.89Z'/%3e%3cpath fill='%23fff' d='M31.667 13.278v11.111c0 .306-.25.556-.556.556H20a.557.557 0 0 1-.556-.556V13.278c0-.306.25-.556.556-.556h3.333v4.445c0 .305.25.555.556.555h3.333c.306 0 .556-.25.556-.555v-4.445h3.333c.306 0 .556.25.556.556ZM17.778 25.5H20v3.889h-2.222V25.5Z'/%3e%3cpath fill='%23fff' d='M25 26.056v11.11c0 .306-.25.556-.556.556h-11.11a.557.557 0 0 1-.556-.555V26.056c0-.306.25-.556.555-.556h3.334v4.444c0 .306.25.556.555.556h3.333c.306 0 .556-.25.556-.556V25.5h3.333c.306 0 .556.25.556.556Zm6.111-.556h2.222v3.889h-2.222V25.5Z'/%3e%3cpath fill='%23fff' d='M38.333 26.056v11.11c0 .306-.25.556-.555.556H26.667a.557.557 0 0 1-.556-.555V26.056c0-.306.25-.556.556-.556H30v4.444c0 .306.25.556.555.556h3.334c.305 0 .555-.25.555-.556V25.5h3.334c.305 0 .555.25.555.556Z'/%3e%3cpath fill='%23fff' d='M38.061 13.356 20.283 2.8a.547.547 0 0 0-.566 0L1.939 13.356a.554.554 0 1 0 .567.955l1.383-.822v23.678c0 .305.25.555.555.555h5c.306 0 .556-.25.556-.555V19.389h8.333v-6.111c0-.917.75-1.667 1.667-1.667h11.11c.917 0 1.667.75 1.667 1.667v11.667h3.333V13.489l1.383.822a.551.551 0 0 0 .761-.194.554.554 0 0 0-.194-.761ZM22.778 9.389h-5.556a.557.557 0 0 1-.555-.556c0-.305.25-.555.555-.555h5.556c.305 0 .555.25.555.555 0 .306-.25.556-.555.556Z'/%3e%3c/svg%3e");
`;

export const VendorName = styled.h2`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  text-transform: uppercase;
`;

export const Vendor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InfoTextNormal = styled.p`
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
`;

export const EditBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: auto;
`;

export const StyledMuiLink = styled(Link)`
  font-family: Titillium Web !important;
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  line-height: 18px !important;
`;

export const Hyperlink = styled.a`
  max-width: max-content;
  text-decoration: none;
  text-decoration-line: underline;
  color: #1565d8;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-decoration-color: rgb(157, 167, 178);
  }

  &:focus {
    outline: 0.125rem solid #1565d8;
    border-radius: 0.375rem;
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
`;
