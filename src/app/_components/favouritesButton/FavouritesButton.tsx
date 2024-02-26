import clsx from "clsx";

import { StarIcon } from "../svgs";

interface FavouritesButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  showFavorites?: boolean;
}
const FavouritesButton = ({
  onClick,
  showFavorites = false,
}: FavouritesButtonProps) => {
  return (
    <button onClick={onClick} className="flex items-center gap-1">
      <span className="text-sm text-black/65">Favorites</span>{" "}
      <StarIcon
        className={clsx({
          "text-[#FFA500]": showFavorites,
          "text-[#85858C]": !showFavorites,
        })}
      />
    </button>
  );
};

export default FavouritesButton;
