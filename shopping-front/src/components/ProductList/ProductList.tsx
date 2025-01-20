import React from "react";
import { CartItem, Product, UpdateProductOperation } from "../../types/global.types";
import ProductCard from "../ProductCard/ProductCard";

interface ProductListProps {
  isLoading: boolean;
  products: Product[];
  productListActions: {
    handleUpdateCart: (cartItems: CartItem[]) => void;
    updateProductStock: (
      id: number | string,
      operation: UpdateProductOperation,
      amount: number
    ) => Promise<boolean>;
    updateProductFavorite: (id: string, favValue: string | number) => Promise<boolean>;
  };
  cartItems: CartItem[];
  showFavorites: boolean;
}

export default function ProductList({
  isLoading,
  products,
  productListActions,
  cartItems,
  showFavorites,
}: ProductListProps) {
  const { handleUpdateCart, updateProductStock, updateProductFavorite } = productListActions;
  const favorites = products.filter((product: Product) => product.favorite === "1");
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
      <div className="loading-message">
        <h2>Loading products...</h2>
      </div>
    );
  }
  if (products?.length < 1 && !isLoading) {
    return (
      <div className="error-message">
        <h2>No products found :(</h2>
      </div>
    );
  }

  if (products?.length > 0) {
    return (
      <div className="product-list">
        {showFavorites
          ? favorites.map((product: Product) => (
              <ProductCard
                key={product?.id}
                itemDetails={product}
                handleAddItemToCart={handleAddItemToCart}
                updateProductFavorite={updateProductFavorite}
              />
            ))
          : products.map((product: Product) => (
              <ProductCard
                key={product?.id}
                itemDetails={product}
                handleAddItemToCart={handleAddItemToCart}
                updateProductFavorite={updateProductFavorite}
              />
            ))}
      </div>
    );
  }
}
