import React from "react";
import TopCardsRow from "../../components/top-cards-row/top-cards-row.component";
import CatalogAnalyzerNavTabs from "../../components/UI/nav-tabs/catalog-analyzer-nav-tabs/catalog-analyzer-nav-tabs.component";
import { CatalogAnalizerLayout } from "./catalog-analyzer.styles";

const CatalogAnalyzer = () => {
  return (
    <CatalogAnalizerLayout>
      <TopCardsRow />
      <CatalogAnalyzerNavTabs />
    </CatalogAnalizerLayout>
  );
};

export default CatalogAnalyzer;
