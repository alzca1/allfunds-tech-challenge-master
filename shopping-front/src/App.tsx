import { CartItem, Product, UpdateProductOperation } from "./types/global.types";
import ProductList from "./components/ProductList/ProductList";
import { useEffect, useState } from "react";
import { useViewPort } from "./hooks/useViewport";
import Cart from "./components/Cart/Cart";
import { useProducts } from "./hooks/useProducts";

function App() {
  const isMobile: boolean = useViewPort();

  const [isCheckoutVisible, setIsCheckoutVisible] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const { getProducts, productDetails, updateProductStock } = useProducts();

  useEffect(() => {
    const fetchProducts = async () => {
      await getProducts();
    };

    fetchProducts();
  }, []);

  const handleToggleCart = (): void => {
    setIsCheckoutVisible((prevState) => !prevState);
  };

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
      setCartItems(cartItemsCopy);
      return;
    }

    if (update && hasCartItem) {
      const updatedCartItems: CartItem[] = cartItemsCopy?.map((cartItem: CartItem) => {
        if (cartItem?.id === itemDetails?.id) {
          return {
            ...cartItem,
            quantity: (cartItem.quantity += 1),
          };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
      return;
    }
  };

  return (
    <div className="app">
      {isMobile ? (
        <div className="mobile">
          <ProductList
            isLoading={productDetails?.isLoading}
            products={productDetails?.data}
            handleAddItemToCart={handleAddItemToCart}
          />
          <div
            className={`${isCheckoutVisible ? "mobile-cart visible" : "mobile-cart not-visible"}`}
          >
            <Cart handleToggleCart={handleToggleCart} cartItems={cartItems} />
          </div>
          {isCheckoutVisible ? null : (
            <div className="mobile-floating-button-container">
              <button onClick={handleToggleCart}> Go to Checkout</button>
            </div>
          )}
        </div>
      ) : (
        <div className="desktop">
          <ProductList
            products={productDetails?.data}
            isLoading={productDetails?.isLoading}
            handleAddItemToCart={handleAddItemToCart}
          />
          <Cart cartItems={cartItems} />
        </div>
      )}
    </div>
  );
}

export default App;
