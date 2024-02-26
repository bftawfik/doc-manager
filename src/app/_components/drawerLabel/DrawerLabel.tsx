import clsx from "clsx";
import React from "react";

interface BrandLabelProps {
  disabled?: boolean;
  label: string;
}
const DrawerLabel = ({ disabled = false, label }: BrandLabelProps) => {
  return (
    <p
      className={clsx(" text-sm font-medium", {
        "text-black/60 ": disabled,
      })}
    >
      {label}
    </p>
  );
};

export default DrawerLabel;
