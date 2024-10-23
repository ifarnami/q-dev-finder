import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

const SearchContainer = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      gap="8px"
      padding="10px 16px"
      sx={{ backgroundColor: "white", width: "600px", borderRadius: "16px" }}
    >
      {children}
    </Stack>
  );
};

export default SearchContainer;
