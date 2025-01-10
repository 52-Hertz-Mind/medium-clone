import TabNavigation from "@/app/(components)/TabNavigation";
import BlogCard from "@/app/(components)/BlogCard";

export default function Home() {
  return (
    <div className=" justify-center flex gap-10 px-96">
      <div className="w-3/4 border-r h-screen pt-10">
        <TabNavigation
          linkNames={["For you", "Programming", "Web"]}
          isPlusNeeded={true}
        />
        <BlogCard />
      </div>
      <div className="w-1/3 pt-10">sidebar</div>
    </div>
  );
}
