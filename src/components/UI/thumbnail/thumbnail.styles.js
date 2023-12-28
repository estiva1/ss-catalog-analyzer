import styled from "styled-components";

export const StyledThumbnail = styled.div`
  display: flex;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  width: max-content;
  max-width: max-content;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export const ThumbnailText = styled.span`
  color: ${({ $color }) => $color};
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.875rem;
`;
