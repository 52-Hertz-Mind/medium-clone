import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Suggestion {
  id: string;
  name: string;
  description: string;
  image: string;
}

const suggestions: Suggestion[] = [
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
    description: "I help software engineers land their dream tech jobs and...",
    image: "/profilepic.jpg",
  },
];

export default function WhoToFollow() {
  return (
    <div className="w-72">
      <h2 className="text-base font-semibold text-neutral-900 mb-4">
        Who to follow
      </h2>

      <div className="space-y-4 mb-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex items-start gap-3 min-w-0">
              <div className="flex-shrink-0">
                <Image
                  src={suggestion.image || "/placeholder.svg"}
                  alt={suggestion.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex flex-col gap-3">
                <h3 className="text-sm font-bold text-neutral-900 ">
                  {suggestion.name}
                </h3>
                <p className="text-xs text-neutral-600 ">
                  {suggestion.description}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="flex-shrink-0 h-8 px-4 rounded-full hover:bg-transparent text-sm"
            >
              Follow
            </Button>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="text-sm hover:underline text-neutral-600 hover:text-neutral-900"
      >
        See more suggestions
      </a>
    </div>
  );
}
