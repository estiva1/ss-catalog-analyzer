import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import TopCardsRow from "../../components/top-cards-row/top-cards-row.component";
import CreateNewTask from "../../components/create-new-task/create-new-task.component";
import CatalogAnalyzerNavTabs from "../../components/UI/nav-tabs/catalog-analyzer-nav-tabs/catalog-analyzer-nav-tabs.component";

import { CatalogAnalizerLayout } from "./catalog-analyzer.styles";

const MotionWrapper = ({ key, children }) => {
  return (
    <motion.div
      key={key}
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const CatalogAnalyzer = () => {
  const [tab, setTab] = useState(0);

  return (
    <CatalogAnalizerLayout>
      {(tab === 0 || tab === 1) && (
        <MotionWrapper>
          <TopCardsRow />
        </MotionWrapper>
      )}
      {tab === 2 && (
        <MotionWrapper>
          <CreateNewTask />
        </MotionWrapper>
      )}

      <CatalogAnalyzerNavTabs tab={tab} setTab={setTab} />
    </CatalogAnalizerLayout>
  );
};

export default CatalogAnalyzer;
