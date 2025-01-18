import React from "react";
import { GroceryItem } from "../types/global.types";
import ProductCard from "../ProductCard/ProductCard";

interface ProductListProps {
  products: GroceryItem[];
  handleAddItemToCart: (itemDetails: GroceryItem) => void;
}

export default function ProductList({ products, handleAddItemToCart }: ProductListProps) {
  if (products?.length < 1) {
    return (
      <div className="product-list">
        <h3>No hay productos que mostrar</h3>
      </div>
    );
  }

  if (products?.length > 0) {
    return (
      <div className="product-list">
        {products.map((product: GroceryItem) => (
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
