"use client";

import SideMenu from "@/components/SideMenu";
import { Stack } from "@mui/material";

export default function AdminMenu() {
  return (
    <Stack direction="column" sx={{ width: "100%" }}>
      <SideMenu />
    </Stack>
  );
}
