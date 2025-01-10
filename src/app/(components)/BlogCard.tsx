import { Hand, MessageCircle } from "lucide-react";

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
  return (
    <div className="flex gap-8 items-center border-b border-b-gray-100 p-5 mx-10">
      <div className="flex flex-col gap-3">
        {/*user data*/}
        <div className="flex items-center gap-2 ">
          <img
            src={data.userImageUrl}
            className="size-5 rounded-full"
            alt="profile pic"
          />
          <button className="text-sm font-light hover:underline">
            {data.userName}
          </button>
        </div>
        <h2 className="text-2xl font-bold">{data.blogTitle}</h2>
        <p className="text-sm text-gray-600">{data.blogDescription}</p>
        {/*blog stats*/}
        <div className="flex items-center gap-5 mt-3">
          <span className="text-xs font-light text-gray-500">{data.date}</span>
          <div className="flex gap-1 items-center">
            <Hand className="size-4 text-black" strokeWidth={1} />
            <span className="text-sm text-gray-500">{data.clapsCount}</span>
          </div>
          <div className="flex gap-1 items-center">
            <MessageCircle className="size-4 text-black" strokeWidth={1} />
            <span className="text-sm text-gray-500">{data.clapsCount}</span>
          </div>
        </div>
      </div>
      <img src={data.blogImageUrl} className="w-40" alt="blog image" />
    </div>
  );
}

export default BlogCard;
