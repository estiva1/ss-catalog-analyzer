import React, { useState } from "react";
import { Box, Stack } from "@mui/material";

import Dropdown from "../UI/dropdown/dropdown.component";
import CrmTable from "../UI/crm-table/crm-table.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import CrmTableButtonGroup from "../UI/buttons/crm-table-button-group/crm-table-button-group.component";

import { crmTableData } from "../../constants/crmTableData";

const CrmListView = ({ itemFilter, selectedStatus }) => {
  // const [itemFilter, setItemFilter] = useState("");
  // const [selectedStatus, setSelectedStatus] = useState(null);

  // const dropdownTestOptions = [
  //   "prospect",
  //   "open",
  //   "rejected",
  //   "closed",
  //   "prepaid",
  //   "credit card",
  //   "ach",
  //   "net 30 terms",
  // ];
  // const handleItemFilterChange = (event) => setItemFilter(event.target.value);

  return (
    <>
      {/* <Stack direction="row" spacing="10px" alignItems="center">
        <div style={{ width: "300px" }}>
          <CustomizedSearchField
            placeholder="Search by SKU, Title, ASIN"
            value={itemFilter}
            onChange={handleItemFilterChange}
          />
        </div>
        <div style={{ width: "200px" }}>
          <Dropdown placeholder="Filter by Status" data={dropdownTestOptions} setSelectedValue={setSelectedStatus} />
        </div>
      </Stack> */}

      <Box component="div" marginBottom="12px">
        <CrmTableButtonGroup />
      </Box>
      <CrmTable data={crmTableData} itemFilter={itemFilter.toLowerCase()} selectedStatus={selectedStatus} />
    </>
  );
};

export default CrmListView;
