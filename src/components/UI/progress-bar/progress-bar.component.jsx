import React from "react";

import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

import { BorderLinearProgress, Value } from "./progress-bar.styles";

const ProgressBar = ({ maxVal, currVal }) => {
  const getPerc = (max, curr) => 100 * (1 - curr / max);

  function pickHex(color1, color2, weight) {
    const p = weight;
    const w = p * 2 - 1;
    //const w1 = (w / 1 + 1) / 2;
    const w1 = (w + 1) / 2;
    const w2 = 1 - w1;
    const rgb = [
      Math.round(color1[0] * w1 + color2[0] * w2),
      Math.round(color1[1] * w1 + color2[1] * w2),
      Math.round(color1[2] * w1 + color2[2] * w2),
    ];
    return rgb;
  }

  const perc2color = (perc) => {
    const gradient = [
      [0, [207, 9, 9]],
      [10, [207, 9, 9]],
      // Vivid Gamboge
      [30, [255, 153, 0]],
      // Yellow Pantone
      [50, [254, 223, 0]],
      // Apple Green
      [70, [141, 182, 0]],
      // Spanish Green
      [90, [0, 145, 80]],
      [100, [0, 145, 80]],
    ];

    let firstColor = [];
    let secondColor = [];

    let firstColorPoint;
    let secondColorPoint;
    let ratio = 0;

    // Handle the case when 'perc' is 100
    if (perc < 0) perc = 0;
    if (perc === 100) {
      // Find the nearest lower and higher values
      for (let i = gradient.length - 1; i >= 0; i--) {
        if (perc > gradient[i][0]) {
          firstColor = gradient[i][1];
          secondColor = gradient[i + 1][1];
          break;
        }
      }
    } else {
      // Iterate through the gradient array
      for (let i = 0; i < gradient.length; i++) {
        // Compare 'perc' with the first element of each array
        if (perc >= gradient[i][0]) {
          // Set firstColor to the corresponding lower value
          firstColor = gradient[i][1];
          firstColorPoint = gradient[i][0] / 100;
          // Set secondColor to the following array value
          if (i < gradient.length - 1) {
            secondColor = gradient[i + 1][1];
            secondColorPoint = gradient[i + 1][0] / 100 - firstColorPoint;
          } else {
            secondColor = gradient[i][1]; // Set to the same value if at the end
            secondColorPoint = gradient[i][0] / 100 - firstColorPoint;
          }
          ratio = (perc / 100 - firstColorPoint) / secondColorPoint;
        } else {
          // If 'perc' is less than the current element, break the loop
          break;
        }
      }
    }
    // NOT firstColor, secondColor, ratio!
    const color = pickHex(secondColor, firstColor, ratio);
    return color;
  };

  const progressBarColor = perc2color(getPerc(maxVal, currVal));
  const progressBarValue = Math.floor(getPerc(maxVal, currVal));

  return (
    <Stack direction="row" gap="12px" alignItems="center">
      <Box sx={{ width: "100px" }}>
        <BorderLinearProgress
          variant="determinate"
          value={progressBarValue}
          sx={{ "& .MuiLinearProgress-bar": { backgroundColor: "rgb(" + progressBarColor.join() + ")" } }}
        />
      </Box>
      <Value>{progressBarValue}%</Value>
    </Stack>
  );
};

export default ProgressBar;
