import { CartItem, Product } from "./types/global.types";
import ProductList from "./components/ProductList/ProductList";
import { useEffect, useState } from "react";
import { useViewPort } from "./hooks/useViewport";
import Cart from "./components/Cart/Cart";
import { useProducts } from "./hooks/useProducts";

function App() {
  const isMobile: boolean = useViewPort();

  const [isCheckoutVisible, setIsCheckoutVisible] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const { getProducts, productDetails, updateProductStock, updateProductFavorite } = useProducts();
  const favoriteProducts = productDetails?.data?.filter(
    (product: Product) => product.favorite === "1"
  );

  useEffect(() => {
    const fetchProducts = async () => {
      await getProducts();
    };

    fetchProducts();
  }, []);

  const handleToggleFavorites = () => {
    setShowFavorites((prevState) => !prevState);
  };

  const handleToggleCart = (): void => {
    setIsCheckoutVisible((prevState) => !prevState);
    if (showFavorites) {
      setShowFavorites(false);
    }

    if (!showFavorites && favoriteProducts?.length > 0) {
      setShowFavorites(true);
    }
  };

  const handleUpdateCart = (cartItems: CartItem[]) => {
    setCartItems(cartItems);
  };

  const productListActions = {
    handleUpdateCart: handleUpdateCart,
    updateProductStock: updateProductStock,
    updateProductFavorite: updateProductFavorite,
  };

  return (
    <div className="app">
      {isMobile ? (
        <div className="mobile">
          <ProductList
            isLoading={productDetails?.isLoading}
            products={productDetails?.data}
            productListActions={productListActions}
            showFavorites={showFavorites}
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
            productListActions={productListActions}
            cartItems={cartItems}
            showFavorites={showFavorites}
          />
          <Cart
            cartItems={cartItems}
            handleUpdateCart={handleUpdateCart}
            updateProductStock={updateProductStock}
          />
        </div>
      )}

      {favoriteProducts?.length > 0 && !isCheckoutVisible ? (
        <div className="favorites-toggler">
          <button onClick={handleToggleFavorites}>♥️ Wishlist ({favoriteProducts?.length})</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
