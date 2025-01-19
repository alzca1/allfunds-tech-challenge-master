import { Product } from "./types/global.types";
import ProductList from "./components/ProductList/ProductList";
import { useEffect, useState } from "react";
import { useViewPort } from "./hooks/useViewport";
import Cart from "./components/Cart/Cart";
import { useProducts } from "./hooks/useProducts";

function App() {
  const isMobile: boolean = useViewPort();

  const [isCheckoutVisible, setIsCheckoutVisible] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState([]);

  const { getProducts, productDetails } = useProducts();

  const handleAddItemToCart = (itemDetails: Product): void => {
    console.log(itemDetails);
  };
  const handleToggleCart = (): void => {
    setIsCheckoutVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      await getProducts();
    };

    fetchProducts();
  }, []);

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
