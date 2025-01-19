import React, { useEffect, useState } from "react";
import { Product, UpdateProductOperation } from "../../types/global.types";
import { truncateText } from "../../helpers/helpers";

interface ProductCardProps {
  itemDetails: Product;
  handleAddItemToCart: (
    id: number | string,
    operation: UpdateProductOperation,
    amount: number
  ) => Promise<boolean>;
}

export default function ProductCard({ itemDetails, handleAddItemToCart }: ProductCardProps) {
  const { image_url, stock, productName, price, productDescription } = itemDetails;

  const [productUpdating, setProductUpdating] = useState(false);

  const addItemToCart = (): void => {
    if (stock === 0) {
      return;
    }
    setProductUpdating(true);
    handleAddItemToCart(itemDetails?.id, UpdateProductOperation.SUBTRACT, 1);
  };

  useEffect(() => {
    setProductUpdating(false);
  }, [itemDetails]);

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
        <button disabled={productUpdating || stock == 0} onClick={addItemToCart}>
          {productUpdating ? `updating` : `+add`}
        </button>
      </div>
    </div>
  );
}
