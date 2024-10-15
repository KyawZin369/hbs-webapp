"use client";

import colors from "@/style/configStyle";
import {
  Box,
  Stack,
  Tabs,
  Tab,
  Typography,
  Button,
  Tooltip,
  Menu,
  MenuItem,
  Dialog,
  Slide,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AttractionsIcon from "@mui/icons-material/Attractions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Form } from "./Form";
import { TransitionProps } from "@mui/material/transitions";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface NaviProps {
  openModal: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
  accountActionType: string | undefined;
  handleAccountType: (accountType: "login" | "register" | undefined) => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Navigation({
  openModal,
  handleCloseModal,
  handleOpenModal,
  accountActionType,
  handleAccountType,
}: NaviProps) {
  const [value, setValue] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userOrNot, setUserOrNot] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isClient, setIsClient] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTabClick = (routerurl: string) => {
    if (isClient) {
      router.push(routerurl);
    }
  };

  interface TabItemType {
    label: string;
    icon: JSX.Element;
    iconPosition: "start" | "end";
    URL: string;
  }

  type TabInfoType = TabItemType[];

  const TabInfo: TabInfoType = [
    {
      label: "Find Your Booking",
      icon: <ContentPasteSearchIcon />,
      iconPosition: "start",
      URL: "/clients/FindBooking",
    },
    {
      label: "City",
      icon: <LocationCityIcon />,
      iconPosition: "start",
      URL: "/clients/City",
    },
    {
      label: "Attraction",
      icon: <AttractionsIcon />,
      iconPosition: "start",
      URL: "/clients/Attraction",
    },
  ];

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Stack
      gap="3"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
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
      <Box width="100%">
        <Box paddingTop="10px">
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            indicatorColor="secondary"
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                color: "#FFFFFF",
                height: "4px",
              },
            }}
          >
            {TabInfo.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                icon={tab.icon}
                iconPosition={tab.iconPosition}
                onClick={() => {
                  handleTabClick(tab.URL);
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
      <Box width="100%">
        {userOrNot ? (
          <Box>
            <Button
              fullWidth
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100px",
              }}
            >
              <AccountCircleIcon
                fontSize="large"
                color="info"
                sx={{ marginRight: "20px" }}
              />
            </Button>
          </Box>
        ) : (
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Box>
              <Tooltip title="Register/Login" arrow>
                <Button
                  onClick={handleClick}
                  sx={{
                    width: "120px",
                    height: "50px",
                    marginTop: "20px",
                    bgcolor: "white",
                    marginRight: "20px",
                  }}
                >
                  <Typography color={colors.primaryColor} fontWeight={700}>
                    Register/Login
                  </Typography>
                </Button>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={closeMenu}
                onClick={closeMenu}
              >
                <MenuItem
                  onClick={() => {
                    handleAccountType("login");
                    handleOpenModal();
                  }}
                >
                  <LockOpenIcon sx={{ marginRight: "10px" }} />
                  Login
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleAccountType("register");
                    handleOpenModal();
                  }}
                >
                  <HowToRegIcon sx={{ marginRight: "10px" }} />
                  Register
                </MenuItem>
              </Menu>
              <Dialog
                fullScreen
                open={openModal}
                onClose={handleCloseModal}
                TransitionComponent={Transition}
              >
                <Form
                  action={accountActionType}
                  handleCloseModal={handleCloseModal}
                />
              </Dialog>
            </Box>
          </Box>
        )}
      </Box>
    </Stack>
  );
}
