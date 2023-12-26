import styled from "styled-components";

export const BlueButton = styled.button`
  position: relative;
  overflow: hidden;
  min-width: max-content;
  width: ${({ $width }) => $width};
  max-width: ${({ $maxWidth }) => $maxWidth};
  height: ${({ $height }) => $height};
  padding: ${({ $padding }) => $padding};
  border: 1px solid #0057d3;
  border-radius: 4px;
  color: #fff;
  background-color: #1565d8;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Titillium Web;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  //white-space: pre;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const WhiteButton = styled(BlueButton)`
  color: #1565d8;
  background-color: #fff;
  border: 1px solid #1565d8;
`;
