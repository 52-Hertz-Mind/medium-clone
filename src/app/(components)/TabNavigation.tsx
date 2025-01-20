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

  // Clean up the username by removing any @ symbols
  const cleanUsername = pageLink?.replace(/%40/, "");

  const activeTab = isProfilePage
    ? pathname.endsWith("/about")
      ? "about"
      : "home"
    : searchParams.get("topic") || linkNames[0].toLowerCase();

  function handleTabClick(tabName: string) {
    const tabLower = tabName.toLowerCase();

    if (isProfilePage) {
      // Profile page navigation logic
      if (tabLower === "home") {
        router.push(`/@${cleanUsername}`);
      } else if (tabLower === "about") {
        router.push(`/@${cleanUsername}/about`);
      }
    } else {
      // Homepage navigation logic
      if (tabLower === "for you") {
        router.replace("/");
      } else {
        router.replace(`/?topic=${tabLower}`);
      }
    }
  }

  return (
    <div className="flex border-b bg-white border-gray-100 justify-start w-11/12 pt-3 sticky top-0 z-30">
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
