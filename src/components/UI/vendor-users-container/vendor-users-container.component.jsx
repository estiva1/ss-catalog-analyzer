import React from "react";
import { AvatarGroup, Tooltip, Typography } from "@mui/material";
import { AvatarFallback, StyledAvatar } from "./vendor-users-container.styles";

const UsersContainer = ({ users }) => {
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
    <AvatarGroup
      componentsProps={{
        additionalAvatar: {
          sx: {
            width: "32px",
            height: "32px",
            fontFamily: "Titillium Web",
          },
        },
      }}
      max={4}
    >
      {users.map((user) =>
        !user.avatar && !user.name ? (
          <StyledAvatar key={user.id} src={<AvatarFallback />} />
        ) : (
          <Tooltip
            key={user.id}
            arrow
            title={
              <Typography sx={{ fontFamily: "Titillium Web", fontSize: "0.75rem", lineHeight: "100%" }}>
                {user.name}
              </Typography>
            }
          >
            <StyledAvatar {...stringAvatar(user.name)} alt={user.name} src={user.avatar} />
          </Tooltip>
        )
      )}
    </AvatarGroup>
  );
};

export default UsersContainer;
