function RecommendedTopicsSidebar({
  recommendedTopics,
}: {
  recommendedTopics: string[];
}) {
  return (
    <div className="w-72">
      <h2 className="text-base font-semibold text-neutral-900 mb-4">
        Recommended topics
      </h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {recommendedTopics.map((topic: string) => (
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
  );
}
export default RecommendedTopicsSidebar;
