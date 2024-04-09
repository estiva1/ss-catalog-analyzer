import React from "react";
import { SettingsButton, SettingsIcon } from "./badge-button.styles";

const BadgeButton = ({ ...props }) => {
  return (
    <SettingsButton {...props}>
      <SettingsIcon />
    </SettingsButton>
  );
};

export default BadgeButton;
