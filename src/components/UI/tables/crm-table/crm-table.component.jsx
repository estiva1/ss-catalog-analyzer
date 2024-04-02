import React, { useState } from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { Stack, TableHead, TableRow } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import Thumbnail from "../../thumbnail/thumbnail.component";

import {
  CellTextSecondary,
  CellTextSecondaryGray,
  StyledButton,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./crm-table.styles";

import CrmTableDropdown from "../../crm-table-dropdown/crm-table-dropdown.component";

const generateHighlightedText = (text, filterValue) => {
  const lowerText = text.toLowerCase();
  const lowerFilterValue = filterValue.toLowerCase();

  if (!lowerText.includes(lowerFilterValue)) {
    return text;
  }

  const startIndex = lowerText.indexOf(lowerFilterValue);
  const endIndex = startIndex + lowerFilterValue.length;

  return (
    <>
      {text.substring(0, startIndex)}
      <span style={{ backgroundColor: "#1565D8", color: "#fff" }}>{text.substring(startIndex, endIndex)}</span>
      {text.substring(endIndex)}
    </>
  );
};

const CrmTable = ({ data, itemFilter, selectedStatus }) => {
  const crmItems = data.map(
    ({
      id,
      vendorName,
      userCategory,
      vendorStatus,
      amazonCategory,
      paymentStatus,
      leadTimeMin,
      leadTimeMax,
      phoneNumber,
      email,
      totalPos,
      accountStatus,
      vendorNote,
      adress,
    }) => {
      const { vendor, basedIn } = adress || {};

      return {
        id,
        vendorName,
        userCategory,
        vendorStatus,
        amazonCategory,
        paymentStatus,
        leadTimeMin,
        leadTimeMax,
        phoneNumber,
        email,
        totalPos,
        accountStatus,
        vendorNote,
        vendor,
        basedIn,
      };
    }
  );

  const filteredData = selectedStatus
    ? crmItems.filter(
        (item) =>
          item.vendorStatus.toLowerCase() === selectedStatus || item.paymentStatus.toLowerCase() === selectedStatus
      )
    : crmItems;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const matchingData = filteredData.filter((item) => {
    const vendorNameMatch = item.vendorName.toLowerCase().includes(itemFilter);
    return vendorNameMatch;
  });

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const COLORS = {
    Prospect: {
      primary: "#0057D3",
      secondary: "#DAE6FF",
    },
    Open: {
      primary: "#009C34",
      secondary: "#D4FFE5",
    },
    Rejected: {
      primary: "#FF9900",
      secondary: "#FFEDCF",
    },
    Closed: {
      primary: "#CF0909",
      secondary: "#FFD6D6",
    },
    Prepaid: {
      primary: "#8F5AFF",
      secondary: "#EEE2FF",
    },
    "Credit Card": {
      primary: "#00A3FF",
      secondary: "#B3E3FF",
    },
    ACH: {
      primary: "#00F451",
      secondary: "#E6FFFC",
    },
    "Net 30 Terms": {
      primary: "#FFCB00",
      secondary: "#FFC7374C",
    },
  };

  const [selectedVendorStatus, setSelectedVendorStatus] = useState(null);
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState(null);

  return (
    <Box sx={{ width: "100%" }}>
      <StyledTableContainer>
        <Table sx={{ minWidth: 1300 }} aria-labelledby="crm table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">User Category</StyledTableCell>
              <StyledTableCell align="center">Vendor Status</StyledTableCell>
              <StyledTableCell align="center">Amazon Category</StyledTableCell>
              <StyledTableCell align="center">Payment Status</StyledTableCell>
              <StyledTableCell align="center">Lead Time Min</StyledTableCell>
              <StyledTableCell align="center">Lead Time Max</StyledTableCell>
              <StyledTableCell align="center">Phone #</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Total PO's</StyledTableCell>
              <StyledTableCell align="center">Account Status</StyledTableCell>
              <StyledTableCell align="center">Vendor Note</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matchingData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(
                ({
                  id,
                  vendorName,
                  userCategory,
                  vendorStatus,
                  amazonCategory,
                  paymentStatus,
                  leadTimeMin,
                  leadTimeMax,
                  phoneNumber,
                  email,
                  totalPos,
                  accountStatus,
                  vendorNote,
                  vendor,
                  basedIn,
                }) => (
                  <StyledTableRow key={`item-${id}`}>
                    <StyledTableCell align="center">
                      <CellTextSecondary>{generateHighlightedText(vendorName, itemFilter)}</CellTextSecondary>{" "}
                    </StyledTableCell>
                    <StyledTableCell align="center">{userCategory}</StyledTableCell>
                    <StyledTableCell align="center" style={{ padding: 0, width: "105px" }}>
                      <CrmTableDropdown
                        // colorPrimary={COLORS[vendorStatus].primary}
                        // colorSecondary={COLORS[vendorStatus].secondary}
                        initial={vendorStatus}
                        data={["Prospect", "Open", "Rejected", "Closed"]}
                        setSelectedValue={setSelectedVendorStatus}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">{amazonCategory}</StyledTableCell>
                    <StyledTableCell align="center" style={{ padding: 0, width: "130px" }}>
                      <CrmTableDropdown
                        // colorPrimary={COLORS[paymentStatus].primary}
                        // colorSecondary={COLORS[paymentStatus].secondary}
                        initial={paymentStatus}
                        data={["Prepaid", "Credit Card", "ACH", "Net 30 Terms"]}
                        setSelectedValue={setSelectedPaymentStatus}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">{leadTimeMin}</StyledTableCell>
                    <StyledTableCell align="center">{leadTimeMax}</StyledTableCell>
                    <StyledTableCell align="center">
                      <span style={{ whiteSpace: "nowrap" }}>{phoneNumber}</span>
                    </StyledTableCell>
                    <StyledTableCell align="center">{email}</StyledTableCell>
                    <StyledTableCell align="center">{totalPos}</StyledTableCell>
                    <StyledTableCell align="center">{accountStatus}</StyledTableCell>
                    <StyledTableCell align="center">{vendorNote}</StyledTableCell>
                    <StyledTableCell align="left">
                      <Box component="span">
                        {vendor}
                        <CellTextSecondaryGray style={{ marginTop: "4px" }}>{basedIn}</CellTextSecondaryGray>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Stack direction="row" gap="16px" alignItems="center">
                        <StyledButton variant="outlined">Edit Vendor</StyledButton>
                        <StyledButton variant="outlined" color="error" sx={{ height: "37px", paddingInline: 0 }}>
                          <span style={{ display: "flex", alignItems: "center" }}>
                            <HighlightOffIcon sx={{ fontSize: "18px" }} />
                          </span>
                        </StyledButton>
                      </Stack>
                    </StyledTableCell>
                  </StyledTableRow>
                )
              )}
            {emptyRows > 0 && (
              <StyledTableRow
                sx={{
                  height: 56 * emptyRows,
                  ":hover": {
                    backgroundColor: "#FFF",
                  },
                }}
              ></StyledTableRow>
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={matchingData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default CrmTable;
