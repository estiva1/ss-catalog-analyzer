import React, { useEffect } from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";

import { Box, Stack } from "@mui/material";
import HintCircle from "../hint-circle/hint-circle.component";
import { Heading, Label, StyledContainer, Value, ValueBox } from "./vendor-money-amounts-grid.styles";

const FramerCounter = ({ startVal = 0, endVal = 0, duration = 1 }) => {
  const from = useMotionValue(startVal);
  const to = useTransform(from, (value) =>
    endVal % 1 !== 0
      ? value.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : value.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
  );

  useEffect(() => {
    const animation = animate(from, Math.abs(endVal), { duration }); // duration: duration

    return animation.stop;
  }, []);

  return (
    <Box component="span" position="absolute" top={0} left={0}>
      <Value color={endVal}>$</Value>
      <Value color={endVal}>{to}</Value>
    </Box>
  );
};

const Item = ({ heading, itemData }) => {
  return (
    <StyledContainer>
      <Heading>{heading}</Heading>

      <Stack spacing="8px">
        {itemData.map((item, index) => (
          <ValueBox key={index}>
            <Stack direction="row" gap="4px" alignItems="center">
              <Label>{item.label}</Label>
              <Box component="span" position="relative">
                <FramerCounter endVal={item.value} duration={3} />
                <Value style={{ visibility: "hidden" }}>
                  $
                  {Math.abs(item.value)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Value>
              </Box>
              {/*here's static approach, wthout FramerCounter*/}
              {/* <Value color={item.value}>
                $
                {Math.abs(item.value)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Value> */}
              <HintCircle text={item.tooltipText} />
            </Stack>
          </ValueBox>
        ))}
      </Stack>
    </StyledContainer>
  );
};

const VendorMoneyAmount = ({ data }) => {
  const { catalog, reorders, vendorSales } = data || {};

  return (
    <Stack direction="row" gap="8px">
      <Item heading="Catalog" itemData={catalog} />
      <Item heading="Reorders" itemData={reorders} />
      <Item heading="Vendor Sales" itemData={vendorSales} />
    </Stack>
  );
};

export default VendorMoneyAmount;
