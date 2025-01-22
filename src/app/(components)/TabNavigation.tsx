"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Plus } from "lucide-react";

interface TabNavigationProps {
  linkNames: string[];
  pageLink?: string;
  isPlusNeeded?: boolean;
}

function TabNavigation({
  linkNames,
  isPlusNeeded,
  pageLink,
}: TabNavigationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const isProfilePage = pathname.startsWith("/@");
  const isLibrary = pathname.startsWith("/me");
  const cleanUsername = pageLink?.replace(/%40/, "");

  // Determine the active tab
  const activeTab = isProfilePage
    ? pathname.endsWith("/about")
      ? "about"
      : "home"
    : isLibrary
      ? pathname === "/me/lists"
        ? "your lists"
        : pathname === "/me/lists/saved"
          ? "saved lists"
          : pathname === "/me/lists/highlights"
            ? "highlights"
            : pathname === "/me/lists/reading-history"
              ? "reading history"
              : linkNames[0].toLowerCase() // Default to the first tab if no match is found
      : searchParams.get("topic") || linkNames[0].toLowerCase();

  function handleTabClick(tabName: string) {
    const tabLower = tabName.toLowerCase();

    if (isLibrary) {
      // Handle library page navigation
      if (tabLower === "your lists") {
        router.push("/me/lists");
      } else if (tabLower === "saved lists") {
        router.push("/me/lists/saved");
      } else if (tabLower === "highlights") {
        router.push("/me/lists/highlights");
      } else if (tabLower === "reading history") {
        router.push("/me/lists/reading-history");
      }
    } else if (isProfilePage) {
      // Changed to ELSE IF
      // Handle profile page navigation
      if (tabLower === "home") {
        router.push(`/@${cleanUsername}`);
      } else if (tabLower === "about") {
        router.push(`/@${cleanUsername}/about`);
      }
    } else {
      // Handle home page navigation
      if (tabLower === "for you") {
        router.replace("/");
      } else {
        router.replace(`/?topic=${tabLower}`);
      }
    }
  }

  return (
    <div className="w-11/12 mx-auto flex border-b bg-white border-gray-100 justify-start pt-3 sticky top-0 z-30">
      {isPlusNeeded && (
        <Plus
          className="mr-5 text-gray-500 rounded-full hover:bg-gray-100 cursor-pointer"
          strokeWidth={1}
        />
      )}

      {linkNames.map((linkName) => {
        const isActive = activeTab === linkName.toLowerCase();
        return (
          <button
            key={linkName}
            className={`pb-3 mr-8 text-sm ${
              isActive ? "text-black border-b border-black" : "text-gray-500"
            }`}
            onClick={() => handleTabClick(linkName)}
          >
            {linkName}
          </button>
        );
      })}
    </div>
  );
}

export default TabNavigation;
