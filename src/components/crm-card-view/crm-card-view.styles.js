import styled from "styled-components";
import { device } from "../../breakpoints.styles";

export const Columns = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-inline: -8px;
  //background-color: red;

  @media ${device.md} {
    align-content: flex-start;
    > *:nth-last-child(n + 3) {
      margin-bottom: 16px;
    }
  }

  @media ${device.sm} {
    > *:nth-last-child(n + 2) {
      margin-bottom: 16px;
    }
  }
`;

export const ColumnContainer = styled.div`
  width: 25%;
  height: max-content;
  padding-inline: 8px;
  //background-color: rebeccapurple;

  @media ${device.md} {
    width: 50%;
  }
  @media ${device.sm} {
    width: 100%;
  }
`;

export const Column = styled.div`
  min-height: 50px;
  border-radius: 8px;
  background: #e6e6e6;
  padding: 8px 16px 16px;

  @media ${device.md} {
    //static padding
    //padding: 16px;
    padding: calc(8px + 1.5625vw);
  }

  > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const RowName = styled.h3`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
