"use client";

import Navigation from "@/components/Navigation";
import { createTheme, Stack, ThemeProvider, CssBaseline } from "@mui/material";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

export default function App() {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [accountActionType, setAccountActionType] = useState<
    "login" | "register"
  >();

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleAccountType = (accountType: "login" | "register" | undefined) => {
    setAccountActionType(accountType);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Navigation
          accountActionType={accountActionType}
          handleAccountType={handleAccountType}
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
        />
        <CssBaseline />
      </Stack>
    </ThemeProvider>
  );
}
