"use client";
import { ChevronDown } from "lucide-react";
import SmallDialog from "@/app/(components)/SmallDialog";
import { useState } from "react";

//region data models
export interface DraftCardDataModel {
  title: string;
  description: string;
  lastEdited: string;
  readTime: number;
  wordCount: number;
}
interface DraftCardData {
  data: DraftCardDataModel;
}
//endregion
function DraftCard({ data }: DraftCardData) {
  //region hooks
  const [isSmallDialogActive, setIsSmallDialogActive] = useState(false);
  //endregion

  //region template
  return (
    <div className={"flex flex-col gap-1 border-b pb-6 pt-8"}>
      <h2 className={"font-bold text-sm"}>{data.title}</h2>
      <p className={"text-gray-500 text-sm"}>{data.description}</p>
      <div className={"flex gap-1 font-[3px] text-gray-500 text-sm mt-2"}>
        <span>last edited {data.lastEdited}</span>
        <span>.</span>
        <span>{data.readTime} min read</span>
        <span>({data.wordCount} words) so far</span>
        <div onClick={() => setIsSmallDialogActive(true)}>
          <ChevronDown strokeWidth={1} className={"cursor-pointer"} />
          <SmallDialog
            links={["Edit draft", "Delete draft"]}
            isActive={isSmallDialogActive}
            onClose={() => setIsSmallDialogActive(false)}
          />
        </div>
      </div>
    </div>
  );
  //endregion
}

export default DraftCard;
