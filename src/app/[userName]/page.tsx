"use client";

import ReadingList from "@/app/(components)/ReadingListCard";
//region data models
export interface UserDataModel {
  userName: string;
  followerCount: number;
  followingCount: number;
  profileImageUrl: string;
}
//endregion

function Page() {
  //region data
  const userData: UserDataModel = {
    userName: "Mohammad Aghaei",
    followerCount: 20,
    followingCount: 49,
    profileImageUrl: "/profilepic.jpg",
  };
  //endregion
  //region template
  return (
    <ReadingList
      name={userData.userName}
      storiesCount={2}
      profileImage={userData.profileImageUrl}
      thumbnailImage={"/blogImage.png"}
    />
  );
  //endregion
}

export default Page;
