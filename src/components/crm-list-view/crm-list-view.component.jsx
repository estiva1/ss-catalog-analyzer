import React from "react";
import { Box } from "@mui/material";

import CrmTable from "../UI/tables/crm-table/crm-table.component";
import CrmTableButtonGroup from "../UI/buttons/crm-table-button-group/crm-table-button-group.component";

import { crmTableData } from "../../constants/crmTableData";

const CrmListView = ({ itemFilter, selectedStatus }) => {
  return (
    <>
      <CrmTableButtonGroup />
      <CrmTable data={crmTableData} itemFilter={itemFilter.toLowerCase()} selectedStatus={selectedStatus} />
    </>
  );
};

export default CrmListView;
