"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface CreateListDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateListDialog({
  open,
  onOpenChange,
}: CreateListDialogProps) {
  const [showDescription, setShowDescription] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[900px] h-[600px] px-60 py-20 flex flex-col gap-20">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-6 top-6 text-neutral-500 hover:text-neutral-900"
        >
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader>
          <DialogTitle className="text-3xl font-extrabold">
            Create new list
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-20">
          <div className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Give it a name"
                value={name}
                onChange={(e) => setName(e.target.value.slice(0, 60))}
                className="w-full px-3 py-2 bg-[#F2F2F2] rounded-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-200 text-sm"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-600">
                {name.length}/60
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {/* Description */}
            <div>
              {!showDescription ? (
                <button
                  onClick={() => setShowDescription(true)}
                  className={`text-[#1A8917] hover:text-[#156912] text-sm ${showDescription ? "opacity-0" : ""}`}
                >
                  Add a description
                </button>
              ) : (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>
                      setDescription(e.target.value.slice(0, 280))
                    }
                    className="w-full px-3 py-2 bg-[#F2F2F2] rounded-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-200 text-sm"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-600">
                    {description.length}/280
                  </span>
                </div>
              )}
            </div>
            {/* Private Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="private"
                checked={isPrivate}
                onCheckedChange={(checked) => setIsPrivate(checked as boolean)}
                className="h-4 w-4 rounded-[2px] border-neutral-300 data-[state=checked]:bg-[#1A8917] data-[state=checked]:border-[#1A8917]"
              />
              <label
                htmlFor="private"
                className="text-sm text-neutral-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Make it private
              </label>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex h-10 items-center justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="rounded-full px-4 py-1.5 h-auto text-sm hover:bg-neutral-50 border-neutral-200"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              onOpenChange(false);
            }}
            className="rounded-full px-4 py-1.5 h-auto text-sm bg-[#1A8917] hover:bg-[#156912] text-white"
          >
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
