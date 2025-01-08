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
      <DropdownMenuContent
        className="w-[280px] text-gray-600 px-5 py-4"
        align="end"
      >
        <div className="flex flex-col">
          <DropdownMenuItem className="flex gap-3 py-3 cursor-pointer !bg-transparent">
            <User className="stroke-[1px] !w-6 !h-6" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-3 py-3 cursor-pointer !bg-transparent">
            <Bookmark className="stroke-[1px] !w-6 !h-6" />
            <span>Library</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-3 py-3 cursor-pointer !bg-transparent">
            <FileText className="stroke-[1px] !w-6 !h-6" />
            <span>Stories</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-3 py-3 cursor-pointer !bg-transparent">
            <BarChart2 className="stroke-[1px] !w-6 !h-6" />
            <span>Stats</span>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="my-1" />

        <div className="flex flex-col">
          <DropdownMenuItem className="py-3 cursor-pointer !bg-transparent">
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer !bg-transparent">
            Refine recommendations
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer !bg-transparent">
            Manage publications
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer !bg-transparent">
            Help
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="my-1" />

        <div className="flex flex-col">
          <DropdownMenuItem className="flex items-center justify-between py-3 cursor-pointer !bg-transparent">
            <span>Become a Medium member</span>
            <Plus className="h-[18px] w-[18px] stroke-[1.5px] text-amber-500" />
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer !bg-transparent">
            Create a Mastodon account
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer !bg-transparent">
            Apply for author verification
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer !bg-transparent">
            Apply to the Partner Program
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3 cursor-pointer !bg-transparent">
            Gift a membership
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="my-1" />

        <div className="flex flex-col">
          <DropdownMenuItem className="py-3 cursor-pointer !bg-transparent">
            Sign out
          </DropdownMenuItem>
          <DropdownMenuLabel className="py-3 font-normal text-sm text-neutral-500 !bg-transparent">
            mm••••••••••@gmail.com
          </DropdownMenuLabel>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
