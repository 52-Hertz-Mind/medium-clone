"use client";
import { Bell, PenSquare } from "lucide-react";
import ProfileButton from "@/app/(components)/ProfileMenu";
import Link from "next/link";
import SearchInput from "@/app/(components)/SearchInput";
import { useAuthStore } from "@/lib/mockAuth";

function Header() {
  const { isUserLoggedIn } = useAuthStore();
  if (!isUserLoggedIn) return null;
  return (
    <header className="flex justify-between px-5 py-2 border-b bg-white border-gray-100">
      <div className="flex gap-5">
        <Link href="/" className="text-3xl text-gray-950 font-taviraj">
          Medium
        </Link>
        <SearchInput />
      </div>
      <div className="flex gap-5 items-center">
        <button className="inline-flex items-center gap-2 px-2 py-[6px] text-[14px] text-neutral-500 hover:text-neutral-800 bg-white rounded-full transition-colors duration-200">
          <PenSquare className="h-[20px] w-[20px]" strokeWidth={1.5} />
          <span>Write</span>
        </button>
        <button className="text-gray-500 hover:text-gray-800">
          <Bell strokeWidth={1} />
        </button>
        <ProfileButton />
      </div>
    </header>
  );
}

export default Header;
