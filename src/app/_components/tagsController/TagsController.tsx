import { X } from "lucide-react";
import React, {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";

import BrandLabel from "../drawerLabel/DrawerLabel";
import InputField from "../inputField/InputField";

interface TagsControllerProps {
  tagsList: string[];
  tagHandler: Dispatch<SetStateAction<string[]>>;
  disabled?: boolean;
}
const TagsController = ({
  tagsList,
  tagHandler,
  disabled,
}: TagsControllerProps) => {
  const [tagField, setTagField] = useState("");
  const addTagToList = (tag: string) => tagHandler([...tagsList, tag]);
  const removeTagFromList = (index: number) =>
    tagHandler(tagsList.filter((_, ndx) => index !== ndx));

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTagToList(tagField);
      setTagField("");
    }
  };
  return (
    <div className="flex w-full items-center justify-between ">
      <BrandLabel label="Tags" disabled={disabled} />
      <div className="flex w-[220px]  flex-col items-end gap-2">
        {tagsList.map((tag, index) => (
          <div key={index} className="flex w-full items-center justify-between">
            <div className="rounded-sm bg-[#0080001A] p-1 text-sm font-normal capitalize">
              {tag}
            </div>
            <button
              className="h-5 w-5"
              onClick={() => removeTagFromList(index)}
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}

        <InputField
          value={tagField}
          onKeyDown={onPressEnter}
          disabled={disabled}
          onChange={(e) => setTagField(e.target.value)}
          placeholder="+ Add tag"
        />
      </div>
    </div>
  );
};

export default TagsController;
