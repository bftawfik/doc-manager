"use client";
import clsx from "clsx";
import React, { useState } from "react";

const ViewHandler = () => {
  const [detailsSection, setDetailsSection] = useState(false);
  const [gridView, setGridView] = useState(false);
  const handleViewDetailsSection = () => {
    setDetailsSection(!detailsSection);
  };
  return (
    <main className="w-full flex flex-row h-full relative">
      <div
        className={clsx(
          " py-8 px-4 h-full transition-[width] duration-300 ease-in-out w-full ",
          { "w-2/3": detailsSection }
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-4 w-full h-full",
            { "grid grid-cols-2": gridView && detailsSection },
            { "grid grid-cols-3": gridView && !detailsSection }
          )}
        >
          {/* here's the position of the cards/button that opens details aside */}
        </div>
      </div>

      <aside
        className={clsx(
          "absolute h-full  bg-green-300 right-0 top-0 w-1/3 transition-transform duration-300 ease-in-out",
          {
            "translate-x-0 ": detailsSection,
            "translate-x-full ": !detailsSection,
          }
        )}
      >
        {/* here's the content of the detailed opend card */}
      </aside>
    </main>
  );
};

export default ViewHandler;
