"use client";
import { Ellipsis, Share } from "lucide-react";
import SmallDialog from "@/app/(components)/SmallDialog";
import { useState } from "react";
//region data models
interface ResponseCardDataModel {
  title: string;
  publishDate: string;
  readTime: number;
}
interface ResponseCardData {
  data: ResponseCardDataModel;
}
//endregion
function ResponseCard({ data }: ResponseCardData) {
  //region hooks
  const [isShareDialgOpen, setIsShareDialgOpen] = useState(false);
  const [isMoreDialogOpen, setIsMoreDialogOpen] = useState(false);
  //endregion
  return (
    <div className="flex flex-col gap-2 pt-10 border-b pb-8">
      <h2 className="font-bold cursor-pointer">{data.title}</h2>
      <div className="flex gap-1 text-sm text-gray-500">
        <p>Published on {data.publishDate}</p>
        <span>.</span>
        <p>{data.readTime} min read</p>
        <div className="flex gap-2 ml-2">
          <button onClick={() => setIsShareDialgOpen(true)}>
            <Share size={20} strokeWidth={1.2} />
            <SmallDialog
              links={[
                "Copy link",
                "Share on X",
                "Share on Facebook",
                "Share on Linkedin",
              ]}
              isActive={isShareDialgOpen}
              onClose={() => setIsShareDialgOpen(false)}
            />
          </button>
          <button onClick={() => setIsMoreDialogOpen(true)}>
            <Ellipsis />
            <SmallDialog
              links={["Edit response", "View stats", "Delete response"]}
              isActive={isMoreDialogOpen}
              onClose={() => setIsMoreDialogOpen(false)}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResponseCard;
