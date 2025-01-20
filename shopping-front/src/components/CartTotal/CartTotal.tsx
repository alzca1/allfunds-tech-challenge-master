import { CartItem } from "../../types/global.types";

interface CartTotalProps {
  cartItems: CartItem[];
}

export default function CartTotal({ cartItems }: CartTotalProps) {
  const total: number = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item?.price * item?.quantity,
    0
  );

  return (
    <div className="cart-total">
      <h4>Checkout</h4>
      <h4>{`${total.toFixed(2)}`}€</h4>
    </div>
  );
}
