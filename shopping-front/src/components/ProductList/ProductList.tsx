import React from "react";
import { CartItem, Product, UpdateProductOperation } from "../../types/global.types";
import ProductCard from "../ProductCard/ProductCard";

interface ProductListProps {
  isLoading: boolean;
  products: Product[];
  handleUpdateCart: (cartItems: CartItem[]) => void;
  updateProductStock: (
    id: number | string,
    operation: UpdateProductOperation,
    amount: number
  ) => Promise<boolean>;
  cartItems: CartItem[];
}

export default function ProductList({
  isLoading,
  products,
  handleUpdateCart,
  updateProductStock,
  cartItems,
}: ProductListProps) {
  const handleAddItemToCart = async (
    itemDetails: Product,
    operation: UpdateProductOperation,
    amount: number
  ): Promise<void> => {
    const update = await updateProductStock(itemDetails?.id, operation, amount);
    const hasCartItem = cartItems.some((cartItem: CartItem) => cartItem?.id === itemDetails?.id);
    const cartItemsCopy: CartItem[] = structuredClone(cartItems);

    if (update && !hasCartItem) {
      const item: CartItem = {
        id: itemDetails?.id,
        image_url: itemDetails?.image_url,
        productName: itemDetails?.productName,
        quantity: 1,
        price: itemDetails?.price,
      };

      cartItemsCopy.push(item);
      handleUpdateCart(cartItemsCopy);
      return;
    }

    if (update && hasCartItem) {
      const updatedCartItems: CartItem[] = cartItemsCopy?.map((cartItem: CartItem) => {
        if (cartItem?.id === itemDetails?.id) {
          const currentQuantity = cartItem?.quantity;
          return {
            ...cartItem,
            quantity: currentQuantity + 1,
          };
        }
        return cartItem;
      });

      handleUpdateCart(updatedCartItems);
      return;
    }
  };

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
