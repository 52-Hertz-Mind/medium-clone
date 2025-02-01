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
            <Link
              onClick={() =>
                login(
                  "wpoegfhopeirw2178gjpoejgponsdfogmpeasno86765lifnswopgnoe",
                )
              }
              href="/"
              className="text-sm"
            >
              Sign in
            </Link>
            <button
              onClick={() =>
                login(
                  "wpoegfhopeirw2178gjpoejgponsdfogmpeasno86765lifnswopgnoe",
                )
              }
              className="bg-gray-950 rounded-2xl w-24 h-9 p-2"
            >
              <p className="text-white text-xs">Get started</p>
            </button>
          </div>
        </header>
        <main className="flex justify-between items-center pt-20 border-t  border-gray-950 w-full h-5/6">
          <div className="flex flex-col gap-10 pl-[350px]">
            <h1 className="text-9xl font-taviraj font-medium flex flex-col leading-[100px]">
              <span>Human</span>
              <span className="tracking-tighter">stories & ideas</span>
            </h1>
            <p className="text-xl">
              A place to read, write, and deepen your understanding
            </p>
            <button
              onClick={() =>
                login(
                  "wpoegfhopeirw2178gjpoejgponsdfogmpeasno86765lifnswopgnoe",
                )
              }
              className="bg-gray-950 rounded-3xl w-48 h-12 p-2"
            >
              <p className="text-white text-lg">Start reading</p>
            </button>
          </div>
          <Image
            src={"/landingImage.png"}
            alt={"landing image"}
            width={465}
            height={465}
          ></Image>
        </main>
        <footer className="flex items-center pl-[615px] pt-1 h-[70px] text-[13px] border-t border-gray-950  gap-2 ">
          <div className="mr-1">
            <a className="cursor-pointer text-gray-600 ">Help</a>
          </div>
          <div className="mr-1">
            <a className="cursor-pointer text-gray-600 ">Status</a>
          </div>
          <div className="mr-1">
            <a className="cursor-pointer text-gray-600 ">About</a>
          </div>
          <div className="mr-1">
            <a className="cursor-pointer text-gray-600 ">Careers</a>
          </div>
          <div className="mr-1">
            <a className="cursor-pointer text-gray-600 ">Press</a>
          </div>
          <div className="mr-1">
            <a className="cursor-pointer text-gray-600 ">Blog</a>
          </div>
          <div className="mr-1">
            <a className="cursor-pointer text-gray-600 ">Privacy</a>
          </div>
          <div className="mr-1">
            <a className="cursor-pointer text-gray-600 ">Terms</a>
          </div>
          <div className="mr-1">
            <a className="cursor-pointer text-gray-600 ">Text to speech</a>
          </div>
          <div className="mr-1">
            <a className="cursor-pointer text-gray-600 ">Teams</a>
          </div>
        </footer>
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
