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

  if (pathname.startsWith("/me/lists")) {
    return (
      <div className="flex flex-col md:flex-row px-4 md:px-96 gap-10 h-screen">
        <div className="flex flex-col gap-5 w-full md:w-2/3 border-r pt-12 pr-4 md:pr-20 h-screen">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-semibold">Your library</h1>

            <CreateListDialog open={isDialogOpen} onOpenChange={onOpenDialog} />

            {/* Only show button on /me/lists route */}
            {pathname === "/me/lists" && (
              <button
                onClick={() => setIsDialogOpen(true)}
                className="bg-greenButton hover:bg-green-800 rounded-3xl text-white w-24 h-10"
                aria-label="create list"
              >
                New list
              </button>
            )}
          </div>
          <TabNavigation
            linkNames={[
              "Your lists",
              "Saved lists",
              "Highlights",
              "Reading history",
            ]}
          />
          {children}
        </div>
        <MainSidebar />
      </div>
    );
  }
  if (pathname.startsWith("/me/stories")) {
    return (
      <div className="flex flex-col md:flex-row px-4 md:px-96 gap-10 h-screen">
        <div className="flex flex-col gap-5 w-full md:w-2/3 border-r pt-12 pr-4 md:pr-20 h-screen">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-semibold">Your stories</h1>

            <CreateListDialog open={isDialogOpen} onOpenChange={onOpenDialog} />

            {/* Only show button on /me/lists route */}
            {pathname.startsWith("/me/stories") && (
              <div className={"flex gap-2"}>
                <button
                  className="bg-greenButton hover:bg-green-800 rounded-3xl text-sm text-white w-28 h-10"
                  aria-label="create list"
                >
                  Write a story
                </button>
                <button
                  className="bg-white rounded-3xl text-sm text-gray-950 border border-gray-950 w-28 h-10"
                  aria-label="create list"
                >
                  Import a story
                </button>
              </div>
            )}
          </div>
          <TabNavigation linkNames={["Drafts", "Published", "Responses"]} />
          {children}
        </div>
        <MainSidebar />
      </div>
    );
  }
}
