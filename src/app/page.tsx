import TabNavigation from "@/app/(components)/TabNavigation";
import BlogCard, { BlogCardDataModel } from "@/app/(components)/BlogCard";

export default function Home() {
  const data: BlogCardDataModel = {
    userName: "mamad",
    userImageUrl: "/profilepic.jpg",
    blogTitle: "How I Tricked My Brain to Be Addicted to Coding",
    blogDescription:
      "Have you ever wondered if coding could be as addictive and fun as playing video games",
    date: "Sep 22, 2021",
    clapsCount: 21,
    commentsCount: 31,
    blogImageUrl: "/blogImage.png",
  };
  return (
    <div className="justify-center flex gap-10 px-96">
      <div className="flex flex-col items-start w-3/4 border-r h-screen pt-10 gap-5">
        <TabNavigation
          linkNames={["For you", "Programming", "Web"]}
          isPlusNeeded={true}
        />
        <BlogCard data={data} />
      </div>
      <div className="w-1/3 pt-10">sidebar</div>
    </div>
  );
}
