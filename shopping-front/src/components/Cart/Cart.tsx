import React from "react";
import CartItem from "../CartItem/CartItem";
import { CartItem as CartItemInterface } from "../../types/global.types";
import CartTotal from "../CartTotal/CartTotal";

interface CartProps {
  handleToggleCart?: () => void;
  cartItems: CartItemInterface[] | [];
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
        {cartItems?.map((cartItem) => (
          <CartItem key={cartItem?.id} itemDetails={cartItem} />
        ))}
      </div>
      <CartTotal cartItems={cartItems} />
    </div>
  );
}
