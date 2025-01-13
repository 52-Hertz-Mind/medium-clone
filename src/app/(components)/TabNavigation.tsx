"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Plus } from "lucide-react";

interface TabNavigationProps {
  linkNames: string[]; // Array of tab names
  isPlusNeeded?: boolean;
}

function TabNavigation({ linkNames, isPlusNeeded }: TabNavigationProps) {
  //region states
  //end region

  //region hooks
  const router = useRouter();
  const searchParams = useSearchParams();
  //end region

  const activeTab = searchParams.get("topic") || linkNames[0].toLowerCase();

  //region functions
  function handleTabClick(tabName: string) {
    if (tabName.toLowerCase() === "for you") {
      router.push("/"); // Map "For You" to the root route
    } else {
      const topic = tabName.toLowerCase();

      // Update the query parameters
      const params = new URLSearchParams(searchParams.toString());
      params.set("topic", topic);

      router.push(`/?${params.toString()}`);
    }
  }
  //end region

  return (
    <div className="flex border-b border-gray-100 justify-start w-11/12 mx-10">
      {isPlusNeeded ? (
        <Plus
          className=" mr-5 text-gray-500 rounded-full hover:bg-gray-100 cursor-pointer"
          strokeWidth={1}
        />
      ) : (
        ""
      )}

      {linkNames.map((linkName) => {
        const isActive =
          (linkName.toLowerCase() === "for you" && activeTab === "") ||
          activeTab === linkName.toLowerCase();

        return (
          <button
            key={linkName}
            className={`pb-3 mr-8 text-sm ${isActive ? "text-black" : "text-gray-500"}`}
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
