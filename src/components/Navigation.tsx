import colors from "@/style/configStyle";
import {
  Box,
  Stack,
  Tabs,
  Tab,
  Typography,
  Button,
  Popover,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AttractionsIcon from "@mui/icons-material/Attractions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [value, setValue] = useState<number>(0);
  const [userOrNot, setUserOrNot] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const router = useRouter();

  const handleClickLogin = () => {
    router.push("/login");
  };

  const handleClickRegister = () => {
    router.push("/signup");
  };

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
      <Box width="100%">
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
      </Box>
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
            <Tab
              label="Find Your Booking"
              icon={<ContentPasteSearchIcon />}
              iconPosition="start"
            />
            <Tab
              label="City"
              icon={<LocationCityIcon />}
              iconPosition="start"
            />
            <Tab
              label="Attraction"
              icon={<AttractionsIcon />}
              iconPosition="start"
            />
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
                  Register
                </Typography>
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "120px",
                  }}
                >
                  <Button
                    fullWidth
                    sx={{ display: "flex", justifyContent: "flex-start" }}
                    onClick={() => {
                      handleClickLogin();
                    }}
                  >
                    <LockOpenIcon sx={{ marginRight: "10px" }} />
                    Login
                  </Button>
                  <Button
                    fullWidth
                    sx={{ display: "flex", justifyContent: "flex-start" }}
                    onClick={() => {
                      handleClickRegister();
                    }}
                  >
                    <HowToRegIcon sx={{ marginRight: "10px" }} />
                    Register
                  </Button>
                </Box>
              </Popover>
            </Box>
          </Box>
        )}
      </Box>
    </Stack>
  );
}
