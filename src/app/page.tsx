"use client";
import Navigation from "../components/Navigation";
import { createTheme, Stack, ThemeProvider, CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <CssBaseline/>
        <Navigation />
      </Stack>
    </ThemeProvider>
  );
}
