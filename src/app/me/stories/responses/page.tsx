import ResponseCard from "@/app/(components)/ResponseCard";

function Page() {
  const responseCardData = {
    title: "Nice topic",
    publishDate: "Aug 13, 2023",
    readTime: 1,
  };
  return (
    <div>
      <ResponseCard data={responseCardData} />
      <ResponseCard data={responseCardData} />
    </div>
  );
}

export default Page;
