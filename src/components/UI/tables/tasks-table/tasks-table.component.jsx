import React, { useState } from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { Stack, TableHead, TableRow } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";

import Avatar from "../../avatar/avatar.component";

import {
  CellTextHighlighted,
  StyledButton,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
  VendorFallback,
  VendorFallbackLogo,
  VendorLogo,
} from "./tasks-table.styles";

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

const TaskTable = ({ data, itemFilter, selectedStatus }) => {
  const taskItems = data.map(({ id, catalog, fileId, vendor, task, assignee, dueDate, priority }) => {
    const { vendorImage, vendorName } = vendor || {};

    return {
      id,
      catalog,
      fileId,
      vendorImage,
      vendorName,
      task,
      assignee,
      dueDate,
      priority,
    };
  });

  const filteredData = selectedStatus
    ? taskItems.filter(
        (item) =>
          item.vendorStatus.toLowerCase() === selectedStatus || item.paymentStatus.toLowerCase() === selectedStatus
      )
    : taskItems;

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
              <StyledTableCell align="center">Catalog</StyledTableCell>
              <StyledTableCell align="center">File ID</StyledTableCell>
              <StyledTableCell align="center">Vendor</StyledTableCell>
              <StyledTableCell align="center">Task</StyledTableCell>
              <StyledTableCell align="center">Assignee</StyledTableCell>
              <StyledTableCell align="center">Due Date</StyledTableCell>
              <StyledTableCell align="center">Priority</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matchingData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ id, catalog, fileId, vendorImage, vendorName, task, assignee, dueDate, priority }) => (
                <StyledTableRow key={`item-${id}`}>
                  <StyledTableCell align="center">{catalog}</StyledTableCell>
                  <StyledTableCell align="center">
                    <CellTextHighlighted>{fileId}</CellTextHighlighted>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Stack direction="row" gap="10px" alignItems="center">
                      {vendorImage && vendorImage !== null ? (
                        <VendorLogo src={vendorImage} loading="lazy" />
                      ) : (
                        <VendorFallback>
                          <VendorFallbackLogo />
                        </VendorFallback>
                      )}
                      {vendorName}
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell align="center">{task}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Stack spacing="6px">
                      {assignee.map((user) => (
                        <Avatar key={user.id} name={user.name} avatar={user.avatar} />
                      ))}
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell align="center">{dueDate}</StyledTableCell>
                  <StyledTableCell align="center" sx={{ backgroundColor: priority === "High" && "#FFEBCC" }}>
                    <span style={{ color: priority === "High" ? "#F90" : "#1565D8" }}>{priority}</span>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <StyledButton variant="outlined" color="error">
                      Delete
                    </StyledButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {emptyRows > 0 && (
              <StyledTableRow
                sx={{
                  height: 50 * emptyRows,
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

export default TaskTable;
