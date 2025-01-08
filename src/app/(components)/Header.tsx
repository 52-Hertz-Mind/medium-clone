"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

function Header({ font }: { font: string }) {
  return (
    <div className="px-5 py-2 border-b border-gray-100">
      <div className="flex gap-5">
        <button className={`text-3xl ${font}`}>Medium</button>
        <div className="relative w-56 max-w-sm group">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-hover:text-foreground group-focus-within:text-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-9 bg-muted/50 rounded-3xl border-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder-muted-foreground/90"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
