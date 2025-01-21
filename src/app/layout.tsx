import type { Metadata } from "next";
import "./globals.css";
import { Taviraj, Inter } from "next/font/google";
import Header from "@/app/(components)/Header";

const taviraj = Taviraj({
  subsets: ["latin"],
  weight: ["800", "600", "400"],
  variable: "--font-taviraj", // Define CSS variable
});

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter", // Define CSS variable
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
    <html lang="en" className={`${taviraj.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
