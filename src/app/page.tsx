"use client";
import TabNavigation from "@/app/(components)/TabNavigation";
import BlogCard, { BlogCardDataModel } from "@/app/(components)/BlogCard";
import MainSidebar from "@/app/(components)/MainSidebar";
import { Suspense } from "react";
import { useAuthStore } from "@/lib/mockAuth";
import Link from "next/link";

export default function Home() {
  const data: BlogCardDataModel = {
    userName: "Mohammad Aghaei",
    userImageUrl: "/profilepic.jpg",
    blogTitle: "How I Tricked My Brain to Be Addicted to Coding",
    blogDescription:
      "Have you ever wondered if coding could be as addictive and fun as playing video games",
    date: "Sep 22, 2021",
    clapsCount: 21,
    commentsCount: 31,
    blogImageUrl: "/blogImage.png",
  };

  const { isUserLoggedIn, login } = useAuthStore();
  //Landing page
  if (!isUserLoggedIn) {
    return (
      <div className="bg-[#f7f4ed] h-screen">
        <header>
          <Link href="/" className="text-3xl text-gray-950 font-taviraj">
            Medium
          </Link>
        </header>
        <button onClick={login}>log in</button>
      </div>
    );
  }
  //logged in page
  if (isUserLoggedIn) {
    return (
      <Suspense>
        <div className="justify-center flex gap-10 px-96">
          <div className="flex flex-col items-start w-3/4 border-r h-full pt-10 gap-5">
            <TabNavigation
              linkNames={["For you", "Programming", "Web"]}
              isPlusNeeded={true}
            />
            <BlogCard data={data} />
            <BlogCard data={data} />
            <BlogCard data={data} />
            <BlogCard data={data} />
            <BlogCard data={data} />
            <BlogCard data={data} />
            <BlogCard data={data} />
            <BlogCard data={data} />
            <BlogCard data={data} />
            <BlogCard data={data} />
          </div>
          <MainSidebar />
        </div>
      </Suspense>
    );
  }
}
