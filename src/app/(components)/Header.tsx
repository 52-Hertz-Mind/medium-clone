"use client";
import { Bell, PenSquare, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProfileButton from "@/app/(components)/ProfileMenu";
import Link from "next/link";

function Header({ font }: { font: string }) {
  return (
    <header className="flex justify-between px-5 py-2 border-b bg-white border-gray-100">
      <div className="flex gap-5">
        <Link href="/" className={`text-3xl text-gray-950 ${font}`}>
          Medium
        </Link>
        <div className="relative w-56 max-w-sm group">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-hover:text-foreground group-focus-within:text-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-9 bg-muted/50 rounded-3xl border-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder-muted-foreground/90"
          />
        </div>
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
