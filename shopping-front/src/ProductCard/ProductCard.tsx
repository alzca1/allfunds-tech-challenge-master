import React from "react";
import { GroceryItem } from "../types/global.types";

interface ProductCardProps {
  itemDetails: GroceryItem;
  handleAddItemToCart: (itemDetails: GroceryItem) => void;
}

export default function ProductCard({ itemDetails, handleAddItemToCart }: ProductCardProps) {
  const { image_url, stock, productName, price, productDescription } = itemDetails;
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={image_url} />
      </div>
      <div className="product-first-row">
        <h6>{productName}</h6>
        <span>{price}</span>
      </div>
      <div className="product-second-row">
        <p>{productDescription}</p>
      </div>
      <div className="product-third-row">
        <span>{stock} left</span>
        <button onClick={() => handleAddItemToCart(itemDetails)}>+ add</button>
      </div>
    </div>
  );
}
