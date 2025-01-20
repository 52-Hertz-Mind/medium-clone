import MediumInfoBox from "@/app/(components)/MediumInfoBox";
import WhoToFollow from "@/app/(components)/WhoToFollow-sidebar";
import MiniCard, {
  MiniCardDataModel,
} from "@/app/(components)/MiniCard-sidebar";
import FooterSidebar from "@/app/(components)/Footer-sidebar";

function MainSidebar() {
  const recommendedTopics: string[] = [
    "Data Science",
    "Self Improvement",
    "Technology",
    "Writing",
    "Relationships",
    "Politics",
    "Cryptocurrency",
  ];

  const miniCardData: MiniCardDataModel[] = [
    {
      userName: "Mohammad",
      userImage: "/profilepic.jpg",
      blogTitle: "Best Ways to Invest Your Money",
      followersCount: "20k",
    },
    {
      userName: "Ali",
      userImage: "/profilepic.jpg",
      blogTitle: "Best Tool for Web Developers",
      followersCount: "30k",
    },
    {
      userName: "Ali",
      userImage: "/profilepic.jpg",
      blogTitle: "How to Learn Back-end",
      followersCount: "30k",
    },
  ];
  return (
    <div className="flex flex-col py-8 gap-10 sticky top-5 h-fit">
      {/* Staff Picks */}
      <div className="flex flex-col gap-5 justify-start">
        <h2 className="font-semibold">Staff Picks</h2>
        {miniCardData.map((miniData) => (
          <MiniCard data={miniData} key={miniData.userName} />
        ))}
        <button className="text-sm text-gray-500 hover:underline self-start">
          See the full list
        </button>
      </div>

      {/* Writing on Medium */}
      <MediumInfoBox />

      {/* Recommended Topics */}
      <div className="w-72">
        <h2 className="text-base font-semibold text-neutral-900 mb-4">
          Recommended topics
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {recommendedTopics.map((topic) => (
            <button
              key={topic}
              className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {topic}
            </button>
          ))}
        </div>
        <a
          href="#"
          className="text-sm hover:underline text-neutral-500 hover:text-neutral-900"
        >
          See more topics
        </a>
      </div>

      {/* Who to Follow */}
      <WhoToFollow />

      {/* Recently Saved */}
      <div className="flex flex-col gap-3">
        <h2 className="text-base font-semibold text-neutral-900 mb-4">
          Recently saved
        </h2>
        <MiniCard data={miniCardData[1]} />
        <a
          href="#"
          className="text-sm hover:underline text-neutral-500 hover:text-neutral-900"
        >
          See all(3)
        </a>
      </div>

      {/* Footer */}
      <FooterSidebar />
    </div>
  );
}

export default MainSidebar;
