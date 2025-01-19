import React from "react";
import { Product, UpdateProductOperation } from "../../types/global.types";
import ProductCard from "../ProductCard/ProductCard";

interface ProductListProps {
  products: Product[];
  isLoading: boolean;
  handleAddItemToCart: (
    id: number | string,
    operation: UpdateProductOperation,
    amount: number
  ) => Promise<boolean>;
}

export default function ProductList({
  products,
  isLoading,
  handleAddItemToCart,
}: ProductListProps) {
  if (isLoading) {
    return (
      <div>
        <h3>Loading products...</h3>
      </div>
    );
  }
  if (products?.length < 1 && !isLoading) {
    return (
      <div className="product-list">
        <h3>No products found :(</h3>
      </div>
    );
  }

  if (products?.length > 0) {
    return (
      <div className="product-list">
        {products.map((product: Product) => (
          <ProductCard
            key={product?.id}
            itemDetails={product}
            handleAddItemToCart={handleAddItemToCart}
          />
        ))}
      </div>
    );
  }
}
