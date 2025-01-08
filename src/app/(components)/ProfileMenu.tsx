import { User, Bookmark, FileText, BarChart2, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-8 w-8 rounded-full bg-neutral-200">
          <img
            src="/profilepic.jpg"
            className="rounded-2xl hover:brightness-90"
          />
          <span className="sr-only">Open menu</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[280px] text-gray-600" align="end">
        <div className="grid gap-0.5">
          <DropdownMenuItem className="flex gap-3 py-3 cursor-pointer ">
            <User className="h-[18px] w-[18px] stroke-[1.5px] " />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-3 py-3 cursor-pointer">
            <Bookmark className="h-[18px] w-[18px] stroke-[1.5px]" />
            <span>Library</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-3 py-3 cursor-pointer">
            <FileText className="h-[18px] w-[18px] stroke-[1.5px]" />
            <span>Stories</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-3 py-3 cursor-pointer">
            <BarChart2 className="h-[18px] w-[18px] stroke-[1.5px]" />
            <span>Stats</span>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="my-1" />

        <div className="grid gap-0.5">
          <DropdownMenuItem className="py-3 cursor-pointer">
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer">
            Refine recommendations
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer">
            Manage publications
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer">
            Help
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="my-1" />

        <div className="grid gap-0.5">
          <DropdownMenuItem className="flex items-center justify-between py-3 cursor-pointer">
            <span>Become a Medium member</span>
            <Plus className="h-[18px] w-[18px] stroke-[1.5px] text-amber-500" />
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer">
            Create a Mastodon account
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer">
            Apply for author verification
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer">
            Apply to the Partner Program
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer">
            Gift a membership
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="my-1" />

        <div className="grid gap-0.5">
          <DropdownMenuItem className="py-3 cursor-pointer">
            Sign out
          </DropdownMenuItem>
          <DropdownMenuLabel className="py-3 font-normal text-sm text-neutral-500">
            mm••••••••••@gmail.com
          </DropdownMenuLabel>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
