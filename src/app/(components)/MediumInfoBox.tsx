"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function MediumInfoBox() {
  //region states
  const [isVisible, setIsVisible] = useState(true);
  //endregion
  if (!isVisible) return null;
  //region template
  return (
    <div className="relative w-[280px] bg-[#c4e2ff] rounded-md p-5">
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-2 text-neutral-600 hover:text-neutral-900"
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </button>

      {/* Content */}
      <div className="space-y-4">
        <h2 className="text-base font-medium text-neutral-900">
          Writing on Medium
        </h2>

        <div className="flex flex-col space-y-3">
          <a
            href="#"
            className="text-neutral-900 hover:text-neutral-900 text-[14px]"
          >
            New writer FAQ
          </a>
          <a
            href="#"
            className="text-neutral-900 hover:text-neutral-900 text-[14px]"
          >
            Expert writing advice
          </a>
          <a
            href="#"
            className="text-neutral-900 hover:text-neutral-900 text-[14px]"
          >
            Grow your readership
          </a>
        </div>

        <button className=" bg-neutral-900 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-neutral-800">
          Start writing
        </button>
      </div>
    </div>
  );
  //endregion
}
