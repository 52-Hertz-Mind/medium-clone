"use client";
import {
  CircleMinus,
  Bookmark,
  Hand,
  MessageCircle,
  Ellipsis,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import Tooltip from "@/app/(components)/Tooltip";
import { useState } from "react";

export interface BlogCardDataModel {
  userName: string;
  userImageUrl: string;
  blogTitle: string;
  blogDescription: string;
  date: string;
  clapsCount: number;
  commentsCount: number;
  blogImageUrl: string;
}

interface BlogCardProps {
  data: BlogCardDataModel;
}

function BlogCard({ data }: BlogCardProps) {
  //region states

  const [isClapsToolTipActive, setisClapsToolTipActive] = useState(false);
  const [isResponsesToolTipActive, setisResponsesToolTipActive] =
    useState(false);
  const [isShowlessToolTipActive, setisShowlessToolTipActive] = useState(false);
  const [isSaveToolTipActive, setisSaveToolTipActive] = useState(false);
  const [isMoreToolTipActive, setisMoreToolTipActive] = useState(false);
  let toolTipActivationTimeout: NodeJS.Timeout;
  //end region

  //region functions
  function handleMouseEnter(toolTipName: string) {
    toolTipActivationTimeout = setTimeout(() => {
      switch (toolTipName) {
        case "claps":
          setisClapsToolTipActive(true);
          break;
        case "responses":
          setisResponsesToolTipActive(true);
          break;
        case "showless":
          setisShowlessToolTipActive(true);
          break;
        case "save":
          setisSaveToolTipActive(true);
          break;
        case "more":
          setisMoreToolTipActive(true);
          break;
      }
    }, 400);
  }
  function handleMouseLeave() {
    clearTimeout(toolTipActivationTimeout);
    setisClapsToolTipActive(false);
    setisResponsesToolTipActive(false);
    setisShowlessToolTipActive(false);
    setisSaveToolTipActive(false);
    setisMoreToolTipActive(false);
  }
  //end region
  return (
    <div className="flex gap-8 items-center border-b border-b-gray-100 p-5 mx-10 cursor-pointer">
      <div className="flex flex-col gap-3">
        {/*user data*/}
        <div className="flex items-center gap-2 ">
          <img
            src={data.userImageUrl}
            className="size-5 rounded-full"
            alt="profile pic"
          />
          <HoverCard>
            <HoverCardTrigger className="text-sm font-light hover:underline cursor-pointer">
              {data.userName}
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="flex flex-col gap-2 p-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-2">
                    <img
                      src={data.userImageUrl}
                      className="size-16 rounded-full"
                      alt="profile pic"
                    />
                    <span className="font-semibold text-sm">
                      {data.userName}
                    </span>
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
        <h2 className="text-2xl font-bold">{data.blogTitle}</h2>
        <p className="text-sm text-gray-600">{data.blogDescription}</p>
        <div className="flex gap-10 justify-between">
          {/*blog stats*/}
          <div className="flex items-center gap-5 mt-3">
            <span className="text-xs font-semibold text-gray-500">
              {data.date}
            </span>
            <div
              onMouseEnter={() => handleMouseEnter("claps")}
              onMouseLeave={handleMouseLeave}
              className="flex gap-1 items-center relative"
            >
              <Hand className="size-4 text-black" strokeWidth={1} />
              <span className="text-sm font-semibold text-gray-500">
                {data.clapsCount}
              </span>
              <Tooltip
                amount={data.clapsCount}
                dataName={"claps"}
                isToolTipActive={isClapsToolTipActive}
              />
            </div>
            <div
              onMouseEnter={() => handleMouseEnter("responses")}
              onMouseLeave={handleMouseLeave}
              className="flex gap-1 items-center relative"
            >
              <MessageCircle className="size-4 text-black" strokeWidth={1} />
              <span className="text-sm font-semibold text-gray-500">
                {data.commentsCount}
              </span>
              <Tooltip
                amount={data.commentsCount}
                dataName={"responses"}
                isToolTipActive={isResponsesToolTipActive}
              />
            </div>
            {/*end of blog stats*/}
          </div>
          {/*buttons*/}
          <div className="flex gap-6 items-center">
            <button
              className="relative"
              onMouseEnter={() => handleMouseEnter("showless")}
              onMouseLeave={handleMouseLeave}
            >
              <CircleMinus
                strokeWidth={1.2}
                size={22}
                className="text-gray-500 hover:text-gray-900"
              />
              <Tooltip
                dataName={"Show less like this"}
                isToolTipActive={isShowlessToolTipActive}
              />
            </button>
            <button
              className="relative"
              onMouseEnter={() => handleMouseEnter("save")}
              onMouseLeave={handleMouseLeave}
            >
              <Bookmark
                strokeWidth={1.2}
                size={22}
                className="text-gray-500 hover:text-gray-900"
              />
              <Tooltip
                dataName={"Save"}
                isToolTipActive={isSaveToolTipActive}
              />
            </button>
            <button
              className="relative"
              onMouseEnter={() => handleMouseEnter("more")}
              onMouseLeave={handleMouseLeave}
            >
              <Ellipsis
                strokeWidth={2.2}
                size={22}
                className="text-gray-500 hover:text-gray-900"
              />
              <Tooltip
                dataName={"More"}
                isToolTipActive={isMoreToolTipActive}
              />
            </button>
          </div>
          {/*end of buttons*/}
        </div>
      </div>
      <img src={data.blogImageUrl} className="w-40" alt="blog image" />
    </div>
  );
}

export default BlogCard;
