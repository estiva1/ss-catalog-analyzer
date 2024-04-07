import styled from "styled-components";
import { Box, Modal } from "@mui/material";

export const StyledModal = styled(Modal)`
  & > .MuiBackdrop-root {
    backdrop-filter: blur(5px);
    background-color: rgb(8, 40, 85, 0.3);
  }
`;

export const ModalContent = styled(Box)`
  position: absolute;
  inset: 0;
  margin: auto;
  background-color: #fff;
  border-radius: 16px;
  min-width: 300px;
  min-height: 300px;
  width: max-content;
  height: max-content;
  max-height: 96vh;
  //padding: 30px;
  border: 1px solid #e6e6e6;
  background: #f8fafb;
  box-shadow: 4px 4px 25px 0px rgba(111, 213, 246, 0.25);
  //overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.45rem;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d1dbe3;
    border-radius: 0.15rem;
    background-color: transparent;
    &:hover {
      background-color: #c7d4df;
    }
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: #c7d4df;
  }
`;
