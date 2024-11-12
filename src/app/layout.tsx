"use client";

import "./globals.css";
import { QueryClientProvider } from "react-query";
import queryClient  from "../hooks/queryClient"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body>
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
