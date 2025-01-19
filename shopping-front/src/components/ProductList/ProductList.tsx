import React from "react";
import { Product, ProductDetailState } from "../../types/global.types";
import ProductCard from "../ProductCard/ProductCard";

interface ProductListProps {
  products: Product[];
  isLoading: boolean;
  handleAddItemToCart: (itemDetails: Product) => void;
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
