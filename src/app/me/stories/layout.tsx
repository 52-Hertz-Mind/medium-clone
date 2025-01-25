"use client";
import MainSidebar from "@/app/(components)/MainSidebar";
import TabNavigation from "@/app/(components)/TabNavigation";
import { usePathname } from "next/navigation";
import CreateListDialog from "@/app/(components)/CreateListDialog";
import { useState } from "react"; // Add this import

export default function MeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get current path
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function onOpenDialog(open: boolean) {
    setIsDialogOpen(open);
  }
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-96 gap-10 h-screen"></div>
  );
}
