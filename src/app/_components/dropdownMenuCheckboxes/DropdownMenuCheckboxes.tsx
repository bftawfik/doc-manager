import React from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CheckboxItem {
  id: number;
  checked: boolean;
  title: string;
  disabled: boolean;
  onChange: ({ checked, title }: { checked: boolean; title: string }) => void;
}

interface DropdownMenuCheckboxesProps {
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  list: CheckboxItem[];
  labelClassName?: string;
}

const DropdownMenuCheckboxes: React.FC<DropdownMenuCheckboxesProps> = ({
  list,
  icon,
  label,
  labelClassName = "flex items-center gap-1",
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="cursor-pointer focus:outline-none"
      >
        <button className={labelClassName}>
          <span className="text-sm text-black/65">{label}</span>
          {icon && icon}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {list.map(({ id, title, checked, disabled, onChange }) => (
          <React.Fragment key={id}>
            <DropdownMenuCheckboxItem
              key={id}
              checked={checked}
              onCheckedChange={(checked) => onChange({ checked, title })}
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
