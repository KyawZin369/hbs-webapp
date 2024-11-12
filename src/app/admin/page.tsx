"use client";

import AdminNavigation from "@/components/AdminNavigation";
import SideMenu from "@/components/SideMenu";
import { Stack } from "@mui/material";

export default function AdminMenu() {
  return (
    <Stack direction="column" sx={{ width: "100%" }}>
      <AdminNavigation />
      <SideMenu />
    </Stack>
  );
}
