"use client";
import React from "react";

import { databaseMenu, filesMenu, tagsMenu } from "@/app/_mocks/sideBarData";

import { AccordionNav } from "../accordionNav/AccordionNav";
import { DbIcon, FilesIcon, TagsIcon } from "../svgs";
interface SideBarMenuProps {
  className?: string;
}

const SideBarMenu = ({
  className = "border-e border-black/10 flex flex-col gap-3 shrink-0 py-8 px-4 lg:w-60",
}: SideBarMenuProps) => {
  return (
    <aside className={className}>
      <AccordionNav menus={databaseMenu} title="Database" icon={DbIcon} />
      <AccordionNav menus={filesMenu} title="File types" icon={FilesIcon} />
      <AccordionNav menus={tagsMenu} title="Tags" icon={TagsIcon} />
    </aside>
  );
};

export default SideBarMenu;
