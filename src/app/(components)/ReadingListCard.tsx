import Image from "next/image";
import { MoreHorizontal, Lock } from "lucide-react";
import SmallDialog from "@/app/(components)/SmallDialog";
import { useState } from "react";

//region data models
export interface ReadingListCardProps {
  name?: string;
  storiesCount?: number;
  profileImage?: string;
  thumbnailImage?: string;
}
///endregion

export default function ReadingListCard({
  name = "Mohamad Aghaei",
  storiesCount = 2,
  profileImage = "/placeholder.svg",
  thumbnailImage = "/placeholder.svg",
}: ReadingListCardProps) {
  //region states
  const [isSmallDialogActive, setIsSmallDialgActive] = useState(false);
  //endregion

  //region template
  return (
    <div className="w-full flex items-center justify-between  bg-neutral-50 rounded cursor-pointer border border-gray-100">
      {/* Left Section */}
      <div className="flex flex-col gap-4 w-2/3 p-6">
        <div className="flex gap-2 items-center">
          <Image
            src={profileImage || "/placeholder.svg"}
            alt={name}
            width={20}
            height={20}
            className="rounded-full"
          />
          <span className="text-sm text-gray-800">{name}</span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-1">
            Reading list
          </h3>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-1 text-neutral-600 text-sm">
            <span className="text-xs">{storiesCount} stories</span>
            <Lock className="w-3 h-3" />
          </div>
          <button
            onClick={() => setIsSmallDialgActive((prev) => !prev)}
            className="text-neutral-500 hover:text-neutral-900"
          >
            <MoreHorizontal className="w-6 h-6" />
            <span className="sr-only">More options</span>
            <SmallDialog
              links={[
                "Copy link",
                "Edit list info",
                "Remove items",
                "Make list public",
                "Reorder items",
                "Hide responses",
              ]}
              isActive={isSmallDialogActive}
              onClose={() => setIsSmallDialgActive(false)}
            />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 h-full relative flex">
        <Image
          src={thumbnailImage || "/placeholder.svg"}
          alt="Reading list thumbnail"
          width={150}
          height={100}
          className="object-cover"
        />
        <span className="border-l border-white h-full w-1/2 "></span>
        <span className="border-l-4 border-white h-full w-1/5 "></span>
      </div>
    </div>
  );
  //endregion
}
