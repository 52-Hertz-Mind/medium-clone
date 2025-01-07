import type { Metadata } from "next";
import "./globals.css";
import { Taviraj } from "next/font/google";

import Header from "@/app/(components)/Header";

const taviraj = Taviraj({
  weight: "400",
  subsets: ["latin"],
  weight: "800",
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
      <body className={` antialiased`}>
        <Header font={taviraj.className} />
        {children}
      </body>
    </html>
  );
}
