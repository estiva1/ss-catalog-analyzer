import React, { useState } from "react";

import { Divider, Stack } from "@mui/material";
import { topCardsContent, vendorFolderBarData } from "../../constants";
import { Container } from "./top-cards-row.styles";

import BigCard from "../UI/big-card/big-card.component";
import Ripple from "../UI/buttons/_ripple/ripple.component";
import Button, { BUTTON_TYPE_CLASSES } from "../UI/buttons/button/button.component";
import AddNewVendor from "../UI/add-new-vendor-modal/add-new-vendor-modal.component";
import DraggableContainer from "../UI/draggable-scroll-container/draggable-scroll-container.component";
import ChooseVendorsModal from "../UI/choose-vendors-modal/choose-vendors-modal.component";

const TopCardsRow = () => {
  const [isAddNewVendorOpen, setIsAddNewVendorOpen] = useState(false);
  
  const handleAddNewVendorOpen = () => {
    setIsAddNewVendorOpen(true);
  };
  const handleAddNewVendorClose = () => {
    setIsAddNewVendorOpen(false);
  };

  return (
    <>
      <Container>
        <Button buttonType={BUTTON_TYPE_CLASSES.blue} height="98px" padding="8px 36px" onClick={handleAddNewVendorOpen}>
          Add New Vendor
          <Ripple color="#fff" />
        </Button>
        <Divider style={{ background: "#00A3FF" }} orientation="vertical" flexItem />
        <DraggableContainer>
          <Stack direction="row" alignItems="center" gap="10px">
            {topCardsContent.map((card, index) => (
              <BigCard key={`card-${index}`} card={card} />
            ))}
          </Stack>
        </DraggableContainer>
      </Container>
      <AddNewVendor open={isAddNewVendorOpen} onClose={handleAddNewVendorClose} />
      {/* <ChooseVendorsModal open={isAddNewVendorOpen} onClose={handleAddNewVendorClose} data={vendorFolderBarData} /> */}
    </>
  );
};

export default TopCardsRow;
