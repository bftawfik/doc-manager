import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import React, { KeyboardEvent, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import InputField from "../inputField/InputField";
interface RadioGroupList {
  id: number;
  title: string;
}

interface VersionControllerProps {
  list: RadioGroupList[];
  selected: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  labelClassName?: string;
  contentClassName?: string;
  disabled?: boolean;
}

const VersionController: React.FC<VersionControllerProps> = ({
  list,
  selected,
  contentClassName,
  onChange,
  disabled = false,
  labelClassName = "w-[220px] items-center flex justify-between focus-within:ring-brand focus-within:ring-2 focus:outline-brand rounded-sm bg-[#EDEDED] p-2 text-black text-start text-sm font-normal placeholder:text-black",
}) => {
  const renderedVersionsList = list;
  const [versionField, setVersionField] = useState("");

  const handleDropDownChange = (value: string) => {
    onChange(+value);
  };

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newVersionItem = {
        id: renderedVersionsList.length + 1,
        title: versionField,
      };
      renderedVersionsList.push(newVersionItem);
      setVersionField("");
    }
  };
  const selectedValue = renderedVersionsList.find(
    (item) => item.id === selected
  )?.title;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={disabled} asChild>
        <button className={labelClassName}>
          <span className={clsx({ "text-black/60": disabled })}>
            {selectedValue}
          </span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={contentClassName}>
        <DropdownMenuRadioGroup
          value={`${selected}`}
          onValueChange={handleDropDownChange}
        >
          {renderedVersionsList.map(({ title, id }) => (
            <DropdownMenuRadioItem key={id} value={`${id}`}>
              {title}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>

        <InputField
          value={versionField}
          onKeyDown={onPressEnter}
          onChange={(e) => setVersionField(e.target.value)}
          className="mt-1 w-full p-2 ps-3 text-sm text-black placeholder:text-black focus:outline-brand"
          placeholder="+ New Version"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default VersionController;
