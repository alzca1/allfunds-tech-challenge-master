import React from "react";
import { Product } from "../../types/global.types";
import { truncateText } from "../../helpers/helpers";

interface ProductCardProps {
  itemDetails: Product;
  handleAddItemToCart: (itemDetails: Product) => void;
}

export default function ProductCard({ itemDetails, handleAddItemToCart }: ProductCardProps) {
  const { image_url, stock, productName, price, productDescription } = itemDetails;
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={image_url} />
      </div>
      <div className="product-first-row">
        <h6>{truncateText(productName, 19)}</h6>
        <span>{price}</span>
      </div>
      <div className="product-second-row">
        <p>{truncateText(productDescription, 130)}</p>
      </div>
      <div className="product-third-row">
        <span>{stock} left</span>
        <button onClick={() => handleAddItemToCart(itemDetails)}>+ add</button>
      </div>
    </div>
  );
}
