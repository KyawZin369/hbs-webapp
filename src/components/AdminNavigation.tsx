"use client";

import colors from "@/style/configStyle";
import { Box, Stack, Typography, List, ListItem, Tooltip } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AdminNavigation() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userOrNot, setUserOrNot] = useState<boolean>(false);

  return (
    <Stack
      gap="3"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        bgcolor: colors.primaryColor,
      }}
    >
      <Link href="/" style={{ width: "100%" }}>
        <Box padding="15px">
          <Image
            src="/—Pngtree—the building in which hotel_16070495.png"
            alt="hotel"
            width={50}
            height={100}
          />
          <Typography fontSize="0.7rem" fontWeight={600}>
            Care Hotel Booking
          </Typography>
        </Box>
      </Link>
      <Box width="100%" sx={{ display: "flex", justifyContent: "flex-end" }}>
        <List sx={{ display: "flex" }}>
          <Tooltip title="Log Out" sx={{ cursor: "pointer" }}>
            <ListItem>
              <LogoutIcon />
            </ListItem>
          </Tooltip>
          <Tooltip title="User" sx={{ cursor: "pointer" }}>
            <ListItem>
              <AccountCircleIcon />
            </ListItem>
          </Tooltip>
        </List>
      </Box>
    </Stack>
  );
}
