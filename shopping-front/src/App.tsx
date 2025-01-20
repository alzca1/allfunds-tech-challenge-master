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

  const handleUpdateCart = (cartItems: CartItem[]) => {
    setCartItems(cartItems);
  };

  return (
    <div className="app">
      {isMobile ? (
        <div className="mobile">
          <ProductList
            isLoading={productDetails?.isLoading}
            products={productDetails?.data}
            handleUpdateCart={handleUpdateCart}
            updateProductStock={updateProductStock}
            cartItems={cartItems}
          />
          <div
            className={`${isCheckoutVisible ? "mobile-cart visible" : "mobile-cart not-visible"}`}
          >
            <Cart
              cartItems={cartItems}
              handleUpdateCart={handleUpdateCart}
              updateProductStock={updateProductStock}
              handleToggleCart={handleToggleCart}
            />
          </div>
          {!isCheckoutVisible && cartItems?.length > 0 ? (
            <div className="mobile-floating-button-container">
              <button onClick={handleToggleCart}> Go to Checkout</button>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="desktop">
          <ProductList
            isLoading={productDetails?.isLoading}
            products={productDetails?.data}
            handleUpdateCart={handleUpdateCart}
            updateProductStock={updateProductStock}
            cartItems={cartItems}
          />
          <Cart
            cartItems={cartItems}
            handleUpdateCart={handleUpdateCart}
            updateProductStock={updateProductStock}
          />
        </div>
      )}
    </div>
  );
}

export default App;
