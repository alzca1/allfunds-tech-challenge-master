import React from "react";
import { Product } from "../../types/global.types";
import ProductCard from "../ProductCard/ProductCard";

interface ProductListProps {
  products: Product[];
  handleAddItemToCart: (itemDetails: Product) => void;
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
