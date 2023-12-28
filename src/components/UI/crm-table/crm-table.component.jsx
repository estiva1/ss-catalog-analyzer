import React, { useState } from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { TableHead, TableRow } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";

import Thumbnail from "../thumbnail/thumbnail.component";

import {
  CellTextSecondary,
  CellTextSecondaryGray,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./crm-table.styles";

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

  return (
    <Box sx={{ width: "100%" }}>
      <StyledTableContainer>
        <Table sx={{ minWidth: 1200 }} aria-labelledby="crm table">
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
                    <StyledTableCell align="center">
                      <Box display="inline-table">
                        <Thumbnail status={vendorStatus} />
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="center">{amazonCategory}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Box display="inline-table">
                        <Thumbnail status={paymentStatus} />
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="center">{leadTimeMin}</StyledTableCell>
                    <StyledTableCell align="center">{leadTimeMax}</StyledTableCell>
                    <StyledTableCell align="center">{phoneNumber}</StyledTableCell>
                    <StyledTableCell align="center">{email}</StyledTableCell>
                    <StyledTableCell align="center">{totalPos}</StyledTableCell>
                    <StyledTableCell align="center">{accountStatus}</StyledTableCell>
                    <StyledTableCell align="center">{vendorNote}</StyledTableCell>
                    <StyledTableCell align="left">
                      <Box component="span">
                        {vendor}
                        <CellTextSecondaryGray>{basedIn}</CellTextSecondaryGray>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="center">{leadTimeMin}</StyledTableCell>
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
