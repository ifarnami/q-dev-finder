import React from "react";
import { Stack, Typography } from "@mui/material";

const Message = () => {
  return (
    <Stack
    alignItems="center"
    justifyContent="center"
      sx={{
        width: "600px",
        backgroundColor: "#fca5a5",
        border: "2px solid #dc2626",
        borderRadius: "16px",
        padding: "14px 10px",
      }}
    >
      <Typography color="white">User not found!</Typography>
    </Stack>
  );
};

export default Message;
