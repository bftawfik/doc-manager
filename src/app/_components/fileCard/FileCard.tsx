import clsx from "clsx";
import React, { useState } from "react";

import { File } from "@/app/_types";

import AssignedUsers from "../assignedUsers/AssignedUsers";
import DropDownList from "../dropDownList/DropDownList";
import FileTags from "../fileTags/FileTags";
import { MoreDotsIcon, StarIcon, StarOutlineIcon } from "../svgs";
import TypeImage from "../typeImage/TypeImage";

interface FileCardProps {
  file: File;
  handleViewDetailsSection: () => void;
  handleDelete: (id: number) => void;
  handleToggleFavorite: (id: number, isFav: boolean) => Promise<number>;
  selected: boolean;
  toggleSelection: (id: number) => void;
}
const FileCard: React.FC<FileCardProps> = ({
  file,
  handleViewDetailsSection,
  handleDelete,
  handleToggleFavorite,
  selected,
  toggleSelection,
}) => {
  const [isFavorite, setIsFavorite] = useState(file.isFav);

  const handleToggleFavoriteClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    const statusCode = await handleToggleFavorite(file.id, !isFavorite); // Use !isFavorite directly
    if (statusCode === 200) {
      setIsFavorite((prevIsFavorite) => !prevIsFavorite); // Use functional update
    }
  };

  const handleDeleteClick = () => {
    handleDelete(file.id);
  };

  const actionsList = [
    {
      id: 1,
      title: "Delete",
      handler: () => {
        handleDeleteClick();
      },
    },
  ];
  return (
    <div
      className={clsx(
        "flex h-[116px] min-w-[368px] items-center justify-between gap-4 rounded-2xl border p-[10px] duration-300",
        { "border-main": selected, "border-black/10": !selected }
      )}
      onClick={() => {
        toggleSelection(file.id);
      }}
    >
      <div className="flex h-[96px] w-[96px] shrink-0 flex-col items-center justify-center rounded-[24px] bg-[#FAFAFA]">
        <TypeImage type={file.type} />
      </div>
      <div className="flex h-full w-full justify-between">
        <div className="flex h-full flex-col justify-between">
          <h6 className="mb-[14px] text-[12px] font-[500]">{file.name}</h6>
          <div className="flex h-full flex-col justify-between gap-3">
            <FileTags tags={file.tags} />
            <p className="text-[12px] font-[500]">{file.last_modified}</p>
          </div>
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="relative flex justify-end gap-1">
            <button onClick={(event) => handleToggleFavoriteClick(event)}>
              {isFavorite ? <StarIcon /> : <StarOutlineIcon />}
            </button>
            <DropDownList icon={<MoreDotsIcon />} list={actionsList} />
          </div>
          <AssignedUsers users={file.assigned_users} />
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default React.memo(FileCard);
