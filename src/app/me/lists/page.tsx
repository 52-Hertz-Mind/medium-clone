"use client";
import ReadingListCard, {
  ReadingListCardProps,
} from "@/app/(components)/ReadingListCard";
import CreateListDialog from "@/app/(components)/CreateListDialog";
import { useState } from "react";

function Page() {
  //region data
  const readingListCardData: ReadingListCardProps = {
    name: "Mohammad",
    profileImage: "/profilepic.jpg",
    storiesCount: 21,
    thumbnailImage: "/blogImage.png",
  };
  //endregion

  return (
    <>
      <ReadingListCard
        name={readingListCardData.name}
        profileImage={readingListCardData.profileImage}
        storiesCount={readingListCardData.storiesCount}
        thumbnailImage={readingListCardData.thumbnailImage}
      />
    </>
  );
}
export default Page;
