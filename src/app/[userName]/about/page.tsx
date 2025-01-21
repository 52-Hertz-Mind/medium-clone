"use client";
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
  //end region

  //region template
  return (
    <div>
      {/* About Page Content */}
      <h2 className="text-2xl font-bold">About {userData.userName}</h2>
      <p>This is the about section for {userData.userName}.</p>
    </div>
  );
  //endregion
}

export default Page;
