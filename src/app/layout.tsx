import type { Metadata } from "next";
import "./globals.css";
import { Taviraj } from "next/font/google";
import { Inter } from "next/font/google";

import Header from "@/app/(components)/Header";

const taviraj = Taviraj({
  subsets: ["latin"],
  weight: "800",
});
const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Medium",
  description: "A clone of famous blog website Medium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header font={taviraj.className} />
        {children}
      </body>
    </html>
  );
}
