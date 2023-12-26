import React from "react";
import { motion } from "framer-motion";

import { Stack } from "@mui/material";
import { vendorFolderBarData } from "../../constants";
import VendorFolderBar from "../../components/vendor-folder-bar/vendor-folder-bar.component";

const ScrollReveal = ({ index, children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

const VendorFoldersView = () => {
  return (
    <Stack spacing="24px" overflow="hidden">
      {vendorFolderBarData.map((vendorFolderBar, index) => (
        <ScrollReveal key={`vendor-folder-bar-${index}`} index={index}>
          <VendorFolderBar data={vendorFolderBar} />
        </ScrollReveal>
      ))}
    </Stack>
  );
};

export default VendorFoldersView;
