import React from "react";
import CartItem from "../CartItem/CartItem";
import { GroceryItem } from "../../types/global.types";

interface CartProps {
  handleToggleCart?: () => void;
  cartItems: GroceryItem[] | [];
}

export default function Cart({ handleToggleCart, cartItems }: CartProps) {
  return (
    <div className="cart">
      <div className="cart-header-container">
        <div className="back-button-container">
          <button onClick={handleToggleCart}>back</button>
        </div>
        <h3>Cart</h3>
      </div>
      <div className="items-container">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}
