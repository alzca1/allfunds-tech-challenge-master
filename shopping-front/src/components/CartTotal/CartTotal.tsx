import React from "react";
import { CartItem } from "../../types/global.types";

interface CartTotalProps {
  cartItems: CartItem[];
}

const mockCartItems: CartItem[] = [
  { price: 4.99, quantity: 2 },
  { price: 7.59, quantity: 1 },
  { price: 2.99, quantity: 4 },
];
export default function CartTotal({ cartItems }: CartTotalProps) {
  //   const total: number = cartItems.reduce(
  const total: number = mockCartItems.reduce(
    (sum: number, item: CartItem) => sum + item?.price * item?.quantity,
    0
  );

  return (
    <div className="cart-total">
      <h4>`Checkout ${total.toFixed(2)}`</h4>
    </div>
  );
}
