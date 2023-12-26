import styled from "styled-components";
import { motion } from "framer-motion";
import { Container } from "@mui/material";

export const StyledContainer = styled(Container)`
  &.MuiContainer-root {
    padding: 16px 8px 8px 8px;
    width: max-content;
  }
  border-radius: 8px;
  gap: 16px;
  background: #f8fafb;
`;

export const Heading = styled.h3`
  text-align: center;
  margin-bottom: 16px;
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
`;

export const ValueBox = styled.div`
  display: flex;
  padding: 8px; // In Figma it's: 6px 4px;
  justify-content: right;
  border-radius: 8px;
  background: rgba(0, 163, 255, 0.1);
`;

export const Value = styled(motion.span)`
  /* display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; */

  color: ${({ color }) => (color > 0 ? "#009C34" : color < 0 ? "#CF0909" : "#4E5969")};
  text-align: center;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem;
`;

export const Label = styled.span`
  color: #1565d8;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  white-space: pre-wrap;
  text-align: right;
`;
