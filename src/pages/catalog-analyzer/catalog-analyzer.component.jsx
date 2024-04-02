import React from "react";
import TopCardsRow from "../../components/top-cards-row/top-cards-row.component";
import CatalogAnalyzerNavTabs from "../../components/UI/nav-tabs/catalog-analyzer-nav-tabs/catalog-analyzer-nav-tabs.component";
import { CatalogAnalizerLayout } from "./catalog-analyzer.styles";
import CreateNewTask from "../../components/create-new-task/create-new-task.component";

const CatalogAnalyzer = () => {
  return (
    <CatalogAnalizerLayout>
      {/* <TopCardsRow /> */}
      <CreateNewTask />
      <CatalogAnalyzerNavTabs />
    </CatalogAnalizerLayout>
  );
};

export default CatalogAnalyzer;
