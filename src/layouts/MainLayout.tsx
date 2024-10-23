import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack minHeight="100vh" justifyContent="center" alignItems="center">
      {children}
    </Stack>
  );
};

export default MainLayout;
