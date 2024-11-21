"use client";

import AdminNavigation from "@/components/AdminNavigation";
import AdminMenu from "./AdminMenu";
import { Roboto } from '@next/font/google';


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <AdminNavigation />
      </div>
      <div style={{display: "flex", fontFamily: `${roboto.style.fontFamily}` }}>
        <div>
          <AdminMenu />
        </div>
        {children}
      </div>
    </div>
  );
}
