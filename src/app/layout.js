import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import ThemeCom from '@/app/components/ThemeCom';
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeCom>
            <Header />
            {children}
          </ThemeCom>
        </body>
      </html>
    </ClerkProvider>

  );
}
