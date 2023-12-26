import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 16px 10px;
  flex-shrink: 0;
  border-radius: 8px;
  border: ${({ $border }) => `1px solid ${$border}`};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export const ItemImageContainer = styled.span`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 64px;
  height: 64px;
`;

export const ItemImage = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  -webkit-user-drag: none;
`;

export const CardDescriptionText = styled.span`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  text-align: center;
`;

export const CardValue = styled.h2`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 3.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem;
  margin: 0;
`;
