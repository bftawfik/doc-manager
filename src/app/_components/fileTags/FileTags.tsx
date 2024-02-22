import React from "react";

interface FileTagsProps {
  tags: string[];
}
const FileTags: React.FC<FileTagsProps> = ({ tags }) => {
  const getTagColor = (tagName: string) => {
    switch (tagName) {
      case "Financial":
        return "bg-[#008000]/10";
      case "Informative":
        return "bg-[#800080]/10";
      case "Bills":
        return "bg-[#FFA500]/10";
      case "Contract":
        return "bg-[#0000FF]/10";
      default:
        return "#ccc";
    }
  };

  const firstTwoTags = tags.slice(0, 2);
  const restOfTags = tags.slice(2);

  return (
    <div className="flex gap-1">
      {/* Render first two tags */}
      {firstTwoTags.map((tag) => (
        <div
          key={tag}
          className={`rounded-[4px] px-2 py-1 ${getTagColor(tag)}`}
        >
          <p className="text-[12px]"> {tag}</p>
        </div>
      ))}

      {restOfTags.length > 0 && (
        <div className={`rounded-[4px] bg-gray-300 px-2 py-1`}>
          <p className="text-[12px]">{`+${restOfTags.length}`}</p>
        </div>
      )}
    </div>
  );
};

export default FileTags;
