import React from "react";
import { Box, Stack } from "@mui/material";
import ProgressBar from "../progress-bar/progress-bar.component";

import {
  Label,
  RegularText,
  StillNotVerifiedBox,
  ValueBig,
  ValueMedium,
  ValueSmall,
} from "./vendor-tasks-and-skus.styles";

const VendorTasksAndSkus = ({ data }) => {
  const { openTasks = "--", totalSkus = "--", notVerifiedSkus = "--", dateUploaded = "--" } = data || {};

  return (
    <Stack spacing="24px">
      <Stack direction="row" gap="8px" alignItems="baseline">
        <Label>Open Tasks:</Label>
        <ValueBig>{openTasks}</ValueBig>
      </Stack>

      <Box width="max-content">
        <Stack direction="row" gap="12px" alignItems="center">
          <Label>Verified:</Label>
          <ProgressBar maxVal={totalSkus} currVal={notVerifiedSkus} />
        </Stack>

        <StillNotVerifiedBox>
          {!notVerifiedSkus || notVerifiedSkus === 0 ? null : (
            <RegularText style={{ textAlign: "center" }}>
              (still not verified - <ValueMedium>{notVerifiedSkus}&nbsp;</ValueMedium>
              <ValueMedium style={{ fontWeight: "600" }}>SKU's</ValueMedium>)
            </RegularText>
          )}
        </StillNotVerifiedBox>
      </Box>

      <Stack direction="row" gap="40px">
        <Stack spacing="6px">
          <Label>Total SKU's:</Label>
          <ValueSmall>{totalSkus}</ValueSmall>
        </Stack>

        <Stack spacing="6px">
          <Label>Date Uploaded:</Label>
          <ValueSmall>{dateUploaded}</ValueSmall>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VendorTasksAndSkus;
