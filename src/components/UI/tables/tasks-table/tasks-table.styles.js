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
    padding: "6px 16px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "Titillium Web",
    fontSize: "0.875rem",
    letterSpacing: "0.00438rem",
    lineHeight: "100%",
    padding: "6px 16px",
    height: "50px",
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
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1rem;
    text-transform: none;
  }
`;

export const CellTextHighlighted = styled.span`
  display: inline-table;
  color: #1565d8;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.875rem;
  letter-spacing: 0.00438rem;
`;

export const VendorLogo = styled.img`
  min-width: 34px;
  width: 34px;
  min-height: 34px;
  height: 34px;
`;

export const VendorFallback = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 20px;
  background: #b3e3ff;
`;

export const VendorFallbackLogo = styled.span`
  min-width: 24px;
  min-height: 24px;
  width: 24px;
  height: 24px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='40' height='41' fill='none'%3e%3cpath fill='%23fff' d='M24.444 12.722h2.223v3.89h-2.223v-3.89Z'/%3e%3cpath fill='%23fff' d='M31.667 13.278v11.111c0 .306-.25.556-.556.556H20a.557.557 0 0 1-.556-.556V13.278c0-.306.25-.556.556-.556h3.333v4.445c0 .305.25.555.556.555h3.333c.306 0 .556-.25.556-.555v-4.445h3.333c.306 0 .556.25.556.556ZM17.778 25.5H20v3.889h-2.222V25.5Z'/%3e%3cpath fill='%23fff' d='M25 26.056v11.11c0 .306-.25.556-.556.556h-11.11a.557.557 0 0 1-.556-.555V26.056c0-.306.25-.556.555-.556h3.334v4.444c0 .306.25.556.555.556h3.333c.306 0 .556-.25.556-.556V25.5h3.333c.306 0 .556.25.556.556Zm6.111-.556h2.222v3.889h-2.222V25.5Z'/%3e%3cpath fill='%23fff' d='M38.333 26.056v11.11c0 .306-.25.556-.555.556H26.667a.557.557 0 0 1-.556-.555V26.056c0-.306.25-.556.556-.556H30v4.444c0 .306.25.556.555.556h3.334c.305 0 .555-.25.555-.556V25.5h3.334c.305 0 .555.25.555.556Z'/%3e%3cpath fill='%23fff' d='M38.061 13.356 20.283 2.8a.547.547 0 0 0-.566 0L1.939 13.356a.554.554 0 1 0 .567.955l1.383-.822v23.678c0 .305.25.555.555.555h5c.306 0 .556-.25.556-.555V19.389h8.333v-6.111c0-.917.75-1.667 1.667-1.667h11.11c.917 0 1.667.75 1.667 1.667v11.667h3.333V13.489l1.383.822a.551.551 0 0 0 .761-.194.554.554 0 0 0-.194-.761ZM22.778 9.389h-5.556a.557.557 0 0 1-.555-.556c0-.305.25-.555.555-.555h5.556c.305 0 .555.25.555.555 0 .306-.25.556-.555.556Z'/%3e%3c/svg%3e");
`;
