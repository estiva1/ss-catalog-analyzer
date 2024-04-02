import React, { useState } from "react";

import { Divider, Stack } from "@mui/material";
import { Container } from "./create-new-task.styles";
import { createNewTaskData } from "../../constants/create-new-task";

import BigCard from "../UI/big-card/big-card.component";
import Ripple from "../UI/buttons/_ripple/ripple.component";
import Button, { BUTTON_TYPE_CLASSES } from "../UI/buttons/button/button.component";
import AddNewVendor from "../UI/add-new-vendor-modal/add-new-vendor-modal.component";
import DraggableContainer from "../UI/draggable-scroll-container/draggable-scroll-container.component";

const CreateNewTask = () => {
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
          Create New Task
          <Ripple color="#fff" />
        </Button>
        <Divider style={{ background: "#00A3FF" }} orientation="vertical" flexItem />
        <DraggableContainer>
          <Stack direction="row" alignItems="center" gap="10px">
            {createNewTaskData.map((card, index) => (
              <BigCard key={`card-${index}`} card={card} />
            ))}
          </Stack>
        </DraggableContainer>
      </Container>
      <AddNewVendor open={isAddNewVendorOpen} onClose={handleAddNewVendorClose} />
    </>
  );
};

export default CreateNewTask;
