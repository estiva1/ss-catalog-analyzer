import styled from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import { Button, TableCell, TableContainer, TableRow, tableCellClasses } from "@mui/material";

export const StyledTableContainer = mStyled(TableContainer)(() => ({
  border: "1px solid #E6E6E6",
  borderRadius: "8px",
  boxShadow: "none",
  maxHeight: "450px",
  "&::-webkit-scrollbar": {
    width: " 0.4em",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundCcolor: "transparent",
    " &:hover": {
      backgroundColor: "hsl(0, 0%, 81.2%)",
    },
  },
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: "hsl(0, 0%, 81.2%)",
  },
}));

export const StyledTableCell = mStyled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F8FAFB",
    color: "#4E5969",
    borderBottom: "1px solid #4E5969",
    fontFamily: "Titillium Web",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "100%",
    height: "32px",
    padding: "6px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "Titillium Web",
    fontSize: "0.875rem",
    letterSpacing: "0.00438rem",
    lineHeight: "100%",
    padding: "6px",
    height: "56px",
    ":not(:last-child)": {
      borderRight: "1px solid #E6E6E6",
    },
  },
}));

export const StyledTableRow = mStyled(TableRow)(() => ({
  ":hover": {
    backgroundColor: "#F8FAFB",
  },
  "&:last-child td, &:last-child th": {
    borderBottom: 0,
  },
}));

export const StyledButton = styled(Button)`
  &.MuiButton-outlined {
    min-width: 36px;
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    text-transform: none;
    white-space: nowrap;
  }
`;

export const CellTextSecondary = styled.span`
  display: inline-table;
  color: #4e5969;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.875rem;
`;

export const CellTextSecondaryGray = styled(CellTextSecondary)`
  color: #979797;
  font-weight: 400;
  line-height: 0.75rem;
  white-space: nowrap;
`;
