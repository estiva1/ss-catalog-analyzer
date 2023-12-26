import React, { Fragment } from "react";
import TopCardsRow from "../../components/top-cards-row/top-cards-row.component";
import CatalogAnalyzerNavTabs from "../../components/UI/nav-tabs/catalog-analyzer-nav-tabs/catalog-analyzer-nav-tabs.component";

const CatalogAnalyzer = () => {
  return (
    <Fragment>
      <TopCardsRow />
      <CatalogAnalyzerNavTabs />
    </Fragment>
  );
};

export default CatalogAnalyzer;
