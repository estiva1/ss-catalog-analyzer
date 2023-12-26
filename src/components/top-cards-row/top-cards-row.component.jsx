import React from "react";

import { Divider, Stack } from "@mui/material";
import { topCardsContent } from "../../constants";
import { Container } from "./top-cards-row.styles";

import BigCard from "../UI/big-card/big-card.component";
import Ripple from "../UI/buttons/_ripple/ripple.component";
import Button, { BUTTON_TYPE_CLASSES } from "../UI/buttons/button/button.component";
import DraggableContainer from "../UI/draggable-scroll-container/draggable-scroll-container.component";

const TopCardsRow = () => {
  return (
    <Container>
      <Button buttonType={BUTTON_TYPE_CLASSES.blue} height="98px" padding="8px 36px">
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
  );
};

export default TopCardsRow;
