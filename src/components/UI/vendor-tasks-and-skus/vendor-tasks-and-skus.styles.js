import styled from "styled-components";

export const Label = styled.span`
  color: #1565d8;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.03125rem;
`;

export const RegularText = styled(Label)`
  color: #4e5969;
  font-weight: 400;
`;

export const ValueBig = styled.span`
  color: #1565d8;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.03125rem;
`;

export const ValueMedium = styled.span`
  color: #f90;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.03125rem;
`;

export const ValueSmall = styled.span`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem;
`;

export const StillNotVerifiedBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6px; //6px - (16px-12px)
`;
