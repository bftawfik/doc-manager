"use client";

import React, { useState } from "react";

interface ViewItem {
  renderedItem: React.ReactNode;
  onClickFunction: () => void;
}
interface ViewTogglerProps {
  items: ViewItem[];
  selectedIndex?: number;
  className?: string;
}

const ViewToggler: React.FC<ViewTogglerProps> = ({
  items,
  selectedIndex = 0,
  className = "inline-flex items-center justify-center gap-3",
}) => {
  const [selectedIdx, setSelectedIdx] = useState(selectedIndex);

  const handleItemClick = (index: number, onClickFunction: () => void) => {
    if (selectedIdx !== index) {
      setSelectedIdx(index);
      onClickFunction();
    }
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => handleItemClick(index, item.onClickFunction)}
          className={`cursor-pointer ${
            selectedIdx === index && "pointer-events-none"
          }`}
        >
          {item.renderedItem}
        </div>
      ))}
    </div>
  );
};

export default React.memo(ViewToggler);
