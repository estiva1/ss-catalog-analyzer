import React from "react";
import { Divider, Stack } from "@mui/material";

import Ripple from "../UI/buttons/_ripple/ripple.component";
import Button, { BUTTON_TYPE_CLASSES } from "../UI/buttons/button/button.component";
import VendorTasksAndSkus from "../UI/vendor-tasks-and-skus/vendor-tasks-and-skus.component";
import VendorMoneyAmount from "../UI/vendor-money-amounts-grid/vendor-money-amounts-grid.component";
import VendorAndUsersDetails from "../UI/vendor-and-users-details/vendor-and-users-details.component";
import DraggableContainer from "../UI/draggable-scroll-container/draggable-scroll-container.component";

import { VendorFolderBarContainer, VendorFolderBarFrame } from "./vendor-folder-bar.styles";

const VendorFolderBar = ({ data }) => {
  const { users } = data || [];
  const { vendor, moneyAmounts, tasksAndSkus } = data || {};

  return (
    <VendorFolderBarFrame>
      <VendorFolderBarContainer>
        <DraggableContainer>
          <Stack direction="row" gap="8px" alignItems="center">
            <VendorAndUsersDetails users={users} vendor={vendor} />
            <Divider style={{ background: "#00A3FF", marginLeft: "24px" }} orientation="vertical" flexItem />
            <VendorMoneyAmount data={moneyAmounts} />
            <Divider style={{ background: "#00A3FF" }} orientation="vertical" flexItem />
            <VendorTasksAndSkus data={tasksAndSkus} />
            <Divider style={{ background: "#00A3FF" }} orientation="vertical" flexItem />
            <Stack spacing="10px" sx={{ position: "relative" }}>
              <Button
                buttonType={BUTTON_TYPE_CLASSES.white}
                width="172px"
                maxWidth="200px"
                height="58px"
                padding="8px 16px"
              >
                Upload File
                <Ripple color="#1565D8" />
              </Button>

              <Button
                buttonType={BUTTON_TYPE_CLASSES.blue}
                width="172px"
                maxWidth="200px"
                height="58px"
                padding="8px 16px"
              >
                Open Catalog
                <Ripple />
              </Button>
            </Stack>
          </Stack>
        </DraggableContainer>
      </VendorFolderBarContainer>
    </VendorFolderBarFrame>
  );
};

export default VendorFolderBar;
