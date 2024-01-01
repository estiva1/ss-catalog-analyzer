import styled from "styled-components";
import { device } from "../../../breakpoints.styles";

export const AddNewVendorModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  align-self: stretch;
  width: 780px;
  padding: 30px;

  @media ${device.lg} {
    width: 570px;
  }
  @media ${device.md} {
    padding: 15px;
    width: 370px;
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
  //align-items: flex-start;
  align-self: stretch;
  padding: 24px 20px;
  gap: 16px;
  border-radius: 8px;
  background: #fff;
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
