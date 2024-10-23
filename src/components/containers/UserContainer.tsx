import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";

const UserContainer = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      gap="16px"
      padding={4}
      alignItems="center"
      borderRadius="16px"
      sx={{
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        width: "600px",
      }}
    >
      {children}
    </Stack>
  );
};

export default UserContainer;
