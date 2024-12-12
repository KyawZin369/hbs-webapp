"use client";

import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BedIcon from '@mui/icons-material/Bed';
import HotelIcon from '@mui/icons-material/Hotel';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function SideMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const MenuItems = [
    { label: "Hotels", icon: <HotelIcon />, route: "/admin/hotel" },
    { label: "Rooms", icon: <BedIcon />, route: "/rooms" },
    { label: "Booking", icon: <BookOnlineIcon />, route: "/booking" },
    { label: "Payment", icon: <AccountBalanceWalletIcon />, route: "/payment" },
    { label: "Admin", icon: <SupervisorAccountIcon />, route: "/admin" }
  ];

  const handleNavigation = (route : string) => {
    router.push(route);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: open ? 240 : 90,
        transition: "width 0.3s",
        overflowX: "hidden",
        height: "84vh",
      }}
    >
      <Box
        role="presentation"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "85vh",
          justifyContent: "space-between"
        }}
      >
        <List sx={{width: "100%"}}>
          {MenuItems.map((item) => (
            <ListItem key={item.label} sx={{width: "100%", justifyContent: open ? "flex-start" : "center" }}>
              <ListItemButton sx={{ width: "100%" }} onClick={() => handleNavigation(item.route)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                {open && <ListItemText primary={item.label} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button
          variant="outlined"
          color="secondary"
          onClick={toggleDrawer}
          sx={{ marginBottom: 2, width: "80px"}}
        >
          {open ? <ArrowCircleLeftIcon/> : <ArrowCircleRightIcon/>}
        </Button>
      </Box>
    </Paper>
  );
}
