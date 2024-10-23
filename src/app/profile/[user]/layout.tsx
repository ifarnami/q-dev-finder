import { Stack, Button } from "@mui/material";
import { Back } from "iconsax-react";
import { PropsWithChildren } from "react";
import Link from "next/link";

const UserLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack justifyContent="center" paddingBlock="30px" gap="10px">
      <Button variant="outlined" sx={{width: "fit-content"}}>
        <Link href="/">
          <Back />
        </Link>
      </Button>
      {children}
    </Stack>
  );
};

export default UserLayout;
