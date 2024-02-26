import clsx from "clsx";
import React, { ReactNode } from "react";
interface ColumnsWrapperProps {
  children?: ReactNode;
  gridView: boolean;
  detailsSection: boolean;
}
const ColumnsWrapper = ({
  children,
  gridView,
  detailsSection,
}: ColumnsWrapperProps) => {
  return (
    <div
      className={clsx(
        "flex w-full flex-col gap-4",
        { "grid grid-cols-2": gridView && detailsSection },
        { "grid grid-cols-3": gridView && !detailsSection }
      )}
    >
      {children}
    </div>
  );
};

export default ColumnsWrapper;
