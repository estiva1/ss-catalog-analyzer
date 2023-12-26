import React from "react";
import { BlueButton, WhiteButton } from "./button.styles.js";

export const BUTTON_TYPE_CLASSES = {
  blue: "blue",
  white: "white",
};
const getButton = (buttonType = BUTTON_TYPE_CLASSES.blue) =>
  ({
    [BUTTON_TYPE_CLASSES.blue]: BlueButton,
    [BUTTON_TYPE_CLASSES.white]: WhiteButton,
  }[buttonType]);

const Button = ({ buttonType, width = "auto", maxWidth, height = "auto", padding = "10px", ...props }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton $width={width} $maxWidth={maxWidth} $height={height} $padding={padding} {...props}></CustomButton>;
};

export default Button;
