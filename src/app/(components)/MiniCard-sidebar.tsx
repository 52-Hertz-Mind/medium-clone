import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
export default function MiniCard() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 ">
        <img
          src="/profilepic.jpg"
          className="size-5 rounded-full"
          alt="profile pic"
        />
        <HoverCard>
          <HoverCardTrigger className="text-sm font-light hover:underline cursor-pointer">
            Mohammad
          </HoverCardTrigger>
          <HoverCardContent className="w-72">
            <div className="flex flex-col gap-2 p-2">
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col gap-2">
                  <img
                    src="/profilepic.jpg"
                    className="size-16 rounded-full"
                    alt="profile pic"
                  />
                  <span className="font-semibold text-sm">Mohammad</span>
                  <div className="flex gap-x-0.5">
                    <span className="text-sm font-light">20k</span>
                    <span className="text-sm text-gray-500">followers</span>
                  </div>
                </div>
                <Button className="rounded-full w-16 h-8 mb-8">Follow</Button>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <h3 className="font-semibold">Best Ways to Invest Your Money</h3>
      <h3 className=" text-xs text-gray-600">Jan 3</h3>
    </div>
  );
}
