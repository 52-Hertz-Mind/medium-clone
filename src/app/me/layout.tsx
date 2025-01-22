"use client";
import MainSidebar from "@/app/(components)/MainSidebar";
import { Ellipsis } from "lucide-react";
import SmallDialog from "@/app/(components)/SmallDialog";
import TabNavigation from "@/app/(components)/TabNavigation";
import { useState } from "react";
import { UserDataModel } from "@/app/[userName]/layout";

export default function MeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userData: UserDataModel = {
    userName: "Mohammad Aghaei",
    followerCount: 20,
    followingCount: 49,
    profileImageUrl: "/profilepic.jpg",
  };

  const [isProfileSmallDialogActive, setIsProfileSmallDialogActive] =
    useState(false);

  return (
    <div className="flex flex-col md:flex-row px-4 md:px-96 gap-10 h-screen">
      <div className="flex flex-col gap-10 w-full md:w-2/3 border-r pt-12 pr-4 md:pr-20 h-screen">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">{userData.userName}</h1>
          <button
            onClick={() => setIsProfileSmallDialogActive((prev) => !prev)}
            aria-label="More options"
          >
            <Ellipsis size={20} className="text-gray-500 hover:text-gray-950" />
            <SmallDialog
              links={["Copy link to profile", "Design your profile"]}
              isActive={isProfileSmallDialogActive}
              onClose={() => setIsProfileSmallDialogActive(false)}
            />
          </button>
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
