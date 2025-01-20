"use client";
import { Ellipsis } from "lucide-react";
import TabNavigation from "@/app/(components)/TabNavigation";
import ReadingList from "@/app/(components)/ReadingListCard";
import Image from "next/image";
import FooterSidebar from "@/app/(components)/Footer-sidebar";
import Link from "next/link";
import SmallDialog from "@/app/(components)/SmallDialog";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface ParamsInputView {
  userName: string;
}

export interface UserDataModel {
  userName: string;
  followerCount: number;
  followingCount: number;
  profileImageUrl: string;
}

type ParamsInputPromise = { params: Promise<ParamsInputView> };

function Page({ params }: ParamsInputPromise) {
  const [userName, setUserName] = useState<string>("");
  const [isProfileSmallDialogActive, setIsProfileSmallDialogActive] =
    useState(false);

  useEffect(() => {
    // Resolve the async `params` and set the state
    async function resolveParams() {
      const resolvedParams = await params;
      setUserName(resolvedParams.userName);
    }
    resolveParams().then();
  }, [params]);

  const urlPath = usePathname();
  const isAboutPage = urlPath.includes(`/@mohammad/about`);

  const userData: UserDataModel = {
    userName: "Mohammad Aghaei",
    followerCount: 20,
    followingCount: 49,
    profileImageUrl: "/profilepic.jpg",
  };
  return (
    <div className="flex px-96 gap-10 h-screen">
      {/*content*/}
      <div className="flex flex-col gap-10 w-2/3 border-r pt-12 pr-20 h-screen">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">{userData.userName}</h1>
          <button
            onClick={() => {
              setIsProfileSmallDialogActive((prev) => !prev);
            }}
          >
            <Ellipsis size={20} className="text-gray-500 hover:text-gray-950" />
            <SmallDialog
              links={["Copy link to profile", "Design your profile"]}
              isActive={isProfileSmallDialogActive}
              onClose={() => setIsProfileSmallDialogActive(false)}
            />
          </button>
        </div>
        <TabNavigation linkNames={["Home", "About"]} pageLink={userName} />
        {isAboutPage ? (
          <div>
            {/* About Page Content */}
            <h2 className="text-2xl font-bold">About {userData.userName}</h2>
            <p>This is the about section for {userData.userName}.</p>
          </div>
        ) : (
          <ReadingList
            name={userData.userName}
            storiesCount={2}
            profileImage={userData.profileImageUrl}
            thumbnailImage={"/blogImage.png"}
          />
        )}
      </div>
      {/*sidebar*/}
      <div className="flex flex-col justify-between pt-12 pb-5">
        <div className="flex flex-col gap-3">
          <Image
            alt={"profileimage"}
            src={userData.profileImageUrl}
            width={90}
            height={32}
            className="rounded-full"
          />
          <p className="font-bold text-sm">{userData.userName}</p>
          <Link href="" className="text-sm text-gray-500 hover:text-gray-900">
            {userData.followerCount} Follower
          </Link>
          <Link
            href=""
            className="text-xs mt-5 text-[#1a8917] hover:text-gray-900"
          >
            Edit Profile
          </Link>
        </div>
        <div className="fixed bottom-5">
          <FooterSidebar />
        </div>
      </div>
    </div>
  );
}

export default Page;
