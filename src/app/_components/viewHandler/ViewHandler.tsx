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
    <main className="relative flex h-full w-full flex-row">
      <div
        className={clsx(
          " h-full w-full px-4 py-8 transition-[width] duration-300 ease-in-out ",
          { "w-2/3": detailsSection }
        )}
      >
        <div
          className={clsx(
            "flex h-full w-full flex-col gap-4",
            { "grid grid-cols-2": gridView && detailsSection },
            { "grid grid-cols-3": gridView && !detailsSection }
          )}
        >
          {/* here's the position of the cards/button that opens details aside */}
        </div>
      </div>

      <aside
        className={clsx(
          "absolute right-0  top-0 h-full w-1/3 bg-green-300 transition-transform duration-300 ease-in-out",
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
