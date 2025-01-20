import { AddFavoriteIcon } from "../Icons/AddFavoriteIcon";
import { FilledFavoriteIcon } from "../Icons/FilledFavoriteIcon";

interface FavoriteItemProps {
  isFavorite: boolean;
  toggleProductFavorite: () => void;
}

export default function FavoriteItem({ isFavorite, toggleProductFavorite }: FavoriteItemProps) {
  return (
    <div className="favorite-item" onClick={toggleProductFavorite}>
      {isFavorite ? (
        <div className="favorite-container">
          <FilledFavoriteIcon />
        </div>
      ) : (
        <div className="add-favorite-container">
          <AddFavoriteIcon />
        </div>
      )}
    </div>
  );
}
