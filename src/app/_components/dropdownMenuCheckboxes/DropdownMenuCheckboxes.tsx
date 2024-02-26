import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import React from "react";

import { textWithCommaSeprator } from "@/app/_helpers/textWithCommaSeperator";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CheckboxItem {
  id: number;
  title: string;
  disabled: boolean;
}

interface DropdownMenuCheckboxesProps {
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  list: CheckboxItem[];
  labelClassName?: string;
  withArrow?: boolean;
  disabled?: boolean;
  checkedValues: { [id: number]: boolean };
  onChange: (id: number, checked: boolean) => void;
}

const DropdownMenuCheckboxes: React.FC<DropdownMenuCheckboxesProps> = ({
  list,
  icon,
  label,
  withArrow,
  onChange,
  checkedValues,
  disabled = false,
  labelClassName = "flex justify-between items-center w-[220px] rounded-sm bg-[#EDEDED] p-2 text-black text-start text-sm font-normal placeholder:text-black",
}) => {
  const selectedValues = list.filter((item) => checkedValues[item.id]);
  const visibleLabel = selectedValues.length
    ? textWithCommaSeprator(selectedValues)
    : label;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        disabled={disabled}
        className="cursor-pointer focus:outline-none"
      >
        <button className={labelClassName}>
          <span
            className={clsx("w-[200px] truncate text-sm", {
              "text-black/60": disabled,
            })}
          >
            {visibleLabel}
          </span>
          {icon ? icon : null}
          {withArrow ? <ChevronDown className="h-4 w-4" /> : null}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {list.map(({ id, title, disabled }) => (
          <React.Fragment key={id}>
            <DropdownMenuCheckboxItem
              key={id}
              checked={checkedValues[id] || false}
              onCheckedChange={(checked) => onChange(id, checked)}
              className="cursor-pointer"
              disabled={disabled}
              onSelect={(event) => event.preventDefault()}
            >
              {title}
            </DropdownMenuCheckboxItem>
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

/* eslint-disable import/no-unused-modules */
export default DropdownMenuCheckboxes;
