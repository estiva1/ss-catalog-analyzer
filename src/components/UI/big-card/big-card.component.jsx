import React from "react";
import { Stack } from "@mui/material";
import { CardContainer, CardDescriptionText, CardValue, ItemImage, ItemImageContainer } from "./big-card.styles";

const BigCard = ({ card }) => {
  const { name, value, image, cardColor, cardBorder } = card || {};

  return (
    <CardContainer $border={cardBorder} $backgroundColor={cardColor}>
      <Stack direction="row" gap="10px" alignItems="center">
        <ItemImageContainer>
          <ItemImage src={image} />
        </ItemImageContainer>
        <Stack spacing="8px" alignItems="center">
          <CardValue>{value}</CardValue>
          <CardDescriptionText>{name}</CardDescriptionText>
        </Stack>
      </Stack>
    </CardContainer>
  );
};

export default BigCard;
