import MediumInfoBox from "@/app/(components)/MediumInfoBox";
import WhoToFollow from "@/app/(components)/WhoToFollow-sidebar";
import MiniCard, {
  MiniCardDataModel,
} from "@/app/(components)/MiniCard-sidebar";
import FooterSidebar from "@/app/(components)/Footer-sidebar";
import RecommendedTopicsSidebar from "@/app/(components)/RecommendedTopicsSidebar";
//region data models
interface Suggestion {
  id: string;
  name: string;
  description: string;
  image: string;
}
//endregion
function MainSidebar() {
  //region data
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
  const followSuggestions: Suggestion[] = [
    {
      id: "1",
      name: "Crafting-Code",
      description: "Elevate your skills with every read.",
      image: "/profilepic.jpg",
    },
    {
      id: "2",
      name: "The Startup",
      description: "Publication",
      image: "/profilepic.jpg",
    },
    {
      id: "3",
      name: "Hayk Simonyan",
      description:
        "I help software engineers land their dream tech jobs and...",
      image: "/profilepic.jpg",
    },
  ];
  //endregion

  //region template
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

      <MediumInfoBox />

      <RecommendedTopicsSidebar recommendedTopics={recommendedTopics} />

      <WhoToFollow followSuggestions={followSuggestions} />

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

      <FooterSidebar />
    </div>
  );
  //endregion
}

export default MainSidebar;
