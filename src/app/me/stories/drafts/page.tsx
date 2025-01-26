import DraftCard, { DraftCardDataModel } from "@/app/(components)/DraftCard";

function Page() {
  //region data
  const draftCardData: DraftCardDataModel = {
    title: "Say Goodbye to 5 JavaScript Libraries in 2025",
    description:
      "As JavaScript evolves, some libraries inevitably fall behind, unable to " +
      "keep up with the developer community’s expectations for the latest…",
    lastEdited: "almost 2 years ago",
    readTime: 3,
    wordCount: 321,
  };
  //endregion
  return (
    <div className="flex flex-col">
      <DraftCard data={draftCardData} />
    </div>
  );
}

export default Page;
