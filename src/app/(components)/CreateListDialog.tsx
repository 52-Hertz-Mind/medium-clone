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
      <DialogContent className="sm:max-w-[550px] p-8">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 text-neutral-600 hover:text-neutral-900"
        >
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Create new list
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Give it a name"
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 60))}
              className="w-full px-4 py-3 bg-neutral-100 rounded-sm placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-300"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-600">
              {name.length}/60
            </span>
          </div>

          {/* Description */}
          {!showDescription ? (
            <button
              onClick={() => setShowDescription(true)}
              className="text-green-600 hover:text-green-700 text-sm"
            >
              Add a description
            </button>
          ) : (
            <div className="relative">
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value.slice(0, 280))}
                className="w-full px-4 py-3 bg-neutral-100 rounded-sm placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-300"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-600">
                {description.length}/280
              </span>
            </div>
          )}

          {/* Private Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="private"
              checked={isPrivate}
              onCheckedChange={(checked) => setIsPrivate(checked as boolean)}
              className="rounded-sm data-[state=checked]:bg-neutral-900 data-[state=checked]:border-neutral-900"
            />
            <label
              htmlFor="private"
              className="text-sm text-neutral-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Make it private
            </label>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-2 mt-8">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="rounded-full px-4 hover:bg-neutral-100 border-neutral-300"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              // Handle create logic here
              onOpenChange(false);
            }}
            className="rounded-full px-4 bg-[#1A8917] hover:bg-[#156912] text-white"
          >
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
