import { Star } from "lucide-react";

interface FavouritesButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const FavouritesButton = ({ onClick }: FavouritesButtonProps) => {
  return (
    <button onClick={onClick} className="flex items-center gap-1">
      <span className="text-sm text-black/65">Favorites</span>{" "}
      <Star fill="#85858C" stroke="none" />
    </button>
  );
};

export default FavouritesButton;
