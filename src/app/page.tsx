import TabNavigation from "@/app/(components)/TabNavigation";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-3">
      <TabNavigation
        linkNames={["For you", "Programming", "Web"]}
        isPlusNeeded={true}
      />
    </div>
  );
}
