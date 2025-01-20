import React from "react";
import { AddFavoriteIcon } from "../Icons/AddFavoriteIcon";
import { FilledFavoriteIcon } from "../Icons/FilledFavoriteIcon";

interface FavoriteItemProps {
  isFavorite: boolean;
}

export default function FavoriteItem({ isFavorite }: FavoriteItemProps) {
  return (
    <div className="favorite-item">
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
