import { useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { GroceryItem } from "./types/global.types";

function App() {
  const handleAddItemToCart = (itemDetails: GroceryItem): void => {
    console.log(itemDetails);
  };

  const fakeItemDetails = {
    id: "41fd4fd9-95c7-4809-96db-a147d352fdbb",
    image_url: "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
    stock: 8,
    productName: "Unbranded Metal Chair",
    price: 43,
    productDescription:
      "Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.",
    favorite: "1",
  };

  return (
    <div className="app">
      <div className="product-list">
        <ProductCard itemDetails={fakeItemDetails} handleAddItemToCart={handleAddItemToCart} />
        <ProductCard itemDetails={fakeItemDetails} handleAddItemToCart={handleAddItemToCart} />
        <ProductCard itemDetails={fakeItemDetails} handleAddItemToCart={handleAddItemToCart} />
        <ProductCard itemDetails={fakeItemDetails} handleAddItemToCart={handleAddItemToCart} />
        <ProductCard itemDetails={fakeItemDetails} handleAddItemToCart={handleAddItemToCart} />
        <ProductCard itemDetails={fakeItemDetails} handleAddItemToCart={handleAddItemToCart} />
        <ProductCard itemDetails={fakeItemDetails} handleAddItemToCart={handleAddItemToCart} />
        <ProductCard itemDetails={fakeItemDetails} handleAddItemToCart={handleAddItemToCart} />
        <ProductCard itemDetails={fakeItemDetails} handleAddItemToCart={handleAddItemToCart} />
        <ProductCard itemDetails={fakeItemDetails} handleAddItemToCart={handleAddItemToCart} />
        <ProductCard itemDetails={fakeItemDetails} handleAddItemToCart={handleAddItemToCart} />
        <ProductCard itemDetails={fakeItemDetails} handleAddItemToCart={handleAddItemToCart} />
      </div>
      <div className="cart">
        <h3>Checkout</h3>
      </div>
    </div>
  );
}

export default App;
