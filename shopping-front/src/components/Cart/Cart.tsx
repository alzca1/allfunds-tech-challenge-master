import React from "react";
import CartItem from "../CartItem/CartItem";
import { CartItem as CartItemInterface, GroceryItem } from "../../types/global.types";
import CartTotal from "../CartTotal/CartTotal";

interface CartProps {
  handleToggleCart?: () => void;
  cartItems: CartItemInterface[] | [];
}

const mockCartItems: CartItemInterface[] = [
  { price: 4.99, quantity: 2 },
  { price: 7.59, quantity: 1 },
  { price: 2.99, quantity: 4 },
];

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
      <CartTotal cartItems={mockCartItems} />
    </div>
  );
}
