"use client";

import "./globals.css";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { QueryClientProvider } from "react-query";
import queryClient  from "../hooks/queryClient"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body>
          <Navigation
            accountActionType={accountActionType}
            handleAccountType={handleAccountType}
            openModal={openModal}
            handleCloseModal={handleCloseModal}
            handleOpenModal={handleOpenModal}
          />
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
