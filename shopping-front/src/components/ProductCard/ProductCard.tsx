import React, { useEffect, useState } from "react";
import { Product, UpdateProductOperation } from "../../types/global.types";
import { truncateText } from "../../helpers/helpers";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

interface ProductCardProps {
  itemDetails: Product;
  handleAddItemToCart: (
    itemDetails: Product,
    operation: UpdateProductOperation,
    amount: number
  ) => Promise<void>;
  updateProductFavorite: (id: string, favValue: string | number) => Promise<boolean>;
}

export default function ProductCard({
  itemDetails,
  handleAddItemToCart,
  updateProductFavorite,
}: ProductCardProps) {
  const { id, image_url, stock, productName, price, productDescription, favorite } = itemDetails;

  const [productUpdating, setProductUpdating] = useState(false);

  const addItemToCart = (): void => {
    if (stock === 0) {
      return;
    }
    setProductUpdating(true);
    handleAddItemToCart(itemDetails, UpdateProductOperation.SUBTRACT, 1);
  };

  const toggleProductFavorite = (): void => {
    debugger;
    const newFavoriteValue = favorite === 0 ? "1" : 0;
    updateProductFavorite(id, newFavoriteValue);
  };

  useEffect(() => {
    setProductUpdating(false);
  }, [itemDetails]);

  return (
    <div className="product-card">
      <div className="img-container">
        <FavoriteItem
          toggleProductFavorite={toggleProductFavorite}
          isFavorite={favorite == "1" ? true : false}
        />
        <img src={image_url} />
      </div>
      <div className="product-first-row">
        <h6>{truncateText(productName, 19)}</h6>
        <span>{price}€</span>
      </div>
      <div className="product-second-row">
        <p>{truncateText(productDescription, 130)}</p>
      </div>
      <div className="product-third-row">
        <span>{stock} left</span>
        <button disabled={productUpdating || stock == 0} onClick={addItemToCart}>
          {productUpdating ? `updating` : `+add`}
        </button>
      </div>
    </div>
  );
}
