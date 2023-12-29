import React from "react";
import { Name, StyledAvatar } from "./avatar.styles";
import { Stack } from "@mui/material";

const Avatar = ({ name, avatar }) => {
  const stringToColor = (string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };

  const stringAvatar = (name = "") => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.charAt(0)}`,
    };
  };

  return (
    <Stack direction="row" gap="10px" alignItems="center">
      <StyledAvatar {...stringAvatar(name)} alt={name} src={avatar} />
      <Name>{name}</Name>
    </Stack>
  );
};

export default Avatar;
