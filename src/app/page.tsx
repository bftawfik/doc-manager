"use client";

import { AccordionNav } from "./_components/accordionNav/AccordionNav";
import { DbIcon } from "./_components/svgs";

//eslint-disable-next-line import/no-unused-modules
export default function Home() {
  const handleButtonClick = (id: number) => {};

  const menus = [
    {
      id: 1,
      title: "Holding",
      handler: () => handleButtonClick(1),
    },
    {
      id: 2,
      title: "Investmennts",
      handler: () => handleButtonClick(2),
    },
    {
      id: 3,
      title: "The MarQ",
      handler: () => handleButtonClick(3),
    },
    {
      id: 4,
      title: "Technology",
      handler: () => handleButtonClick(4),
    },
  ];
  return (
    <main className="min-h-screen p-6">
      <div className="grid grid-cols-12">
        <div className="col-span-2 flex flex-col gap-6">
          <AccordionNav menus={menus} title="Database" icon={DbIcon} />
          <AccordionNav menus={menus} title="Database" icon={DbIcon} />
          <AccordionNav menus={menus} title="Database" icon={DbIcon} />
        </div>
        <div className="col-span-10"></div>
      </div>
    </main>
  );
}
