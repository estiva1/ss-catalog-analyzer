import React from "react";

import CrmTable from "../UI/tables/crm-table/crm-table.component";
import CrmTableButtonGroup from "../UI/buttons/crm-table-button-group/crm-table-button-group.component";

import { crmTableData } from "../../constants/crmTableData";
import CrmCardView from "../crm-card-view/crm-card-view.component";

const CrmListView = ({ itemFilter, selectedStatus }) => {
  return (
    <>
      {/* <CrmTableButtonGroup />
      <CrmTable data={crmTableData} itemFilter={itemFilter.toLowerCase()} selectedStatus={selectedStatus} /> */}
      <CrmCardView data={crmTableData} itemFilter={itemFilter.toLowerCase()} />
    </>
  );
};

export default CrmListView;
