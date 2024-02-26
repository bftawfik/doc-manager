import React from "react";

interface BrandButtonProps {
  label: string;
  icon?: JSX.Element;
  onClick: () => void;
}
const BrandButton = ({ label, icon, onClick }: BrandButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-2 rounded-lg bg-brand px-3 py-2 text-sm text-white  hover:bg-brand/80 "
    >
      {icon}
      {label}
    </button>
  );
};

export default BrandButton;
