"use client";
import TabNavigation from "@/app/(components)/TabNavigation";
import BlogCard, { BlogCardDataModel } from "@/app/(components)/BlogCard";
import MainSidebar from "@/app/(components)/MainSidebar";
import { Suspense } from "react";
import { useAuthStore } from "@/lib/mockAuth";
import Link from "next/link";
import Image from "next/image";

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
      <div className="flex flex-col gap-5 bg-[#f7f4ed] w-screen h-screen ">
        <header className="flex justify-between items-center px-[350px] pt-5">
          <Link
            href="/"
            className="text-3xl text-gray-950 font-taviraj font-bold"
          >
            Medium
          </Link>
          <div className="flex gap-5 items-center">
            <Link href="/" className="text-sm">
              Our story
            </Link>
            <Link href="/" className="text-sm">
              Membership
            </Link>
            <Link href="/" className="text-sm">
              Write
            </Link>
            <Link href="/" className="text-sm">
              Sign in
            </Link>
            <button className="bg-gray-950 rounded-2xl w-24 h-9 p-2">
              <p className="text-white text-xs">Get started</p>
            </button>
          </div>
        </header>
        <main className="border-t border-b border-gray-950 w-full h-5/6">
          <div className="flex flex-col">
            <h1 className="text-8xl font-taviraj">
              Human <br />
              stories & ideas
            </h1>
          </div>
          <Image
            src={"/landingImage.png"}
            alt={"landing image"}
            width={380}
            height={380}
          ></Image>
        </main>
        {/*<button onClick={login}>log in</button>*/}
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
