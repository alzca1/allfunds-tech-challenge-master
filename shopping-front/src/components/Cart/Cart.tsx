import React from "react";
import CartItem from "../CartItem/CartItem";
import { GroceryItem } from "../../types/global.types";

interface CartProps {
  handleToggleCart?: () => void;
  cartItems: GroceryItem[] | [];
}

export default function Cart({ handleToggleCart, cartItems }: CartProps) {
  return (
    <div className="checkout">
      <button onClick={handleToggleCart}>back</button>
      <CartItem />
    </div>
  );
}
