import CartItem from "../CartItem/CartItem";
import { CartItem as CartItemInterface, UpdateProductOperation } from "../../types/global.types";
import CartTotal from "../CartTotal/CartTotal";
import { LeftArrowIcon } from "../Icons/LeftArrowIcon";

interface CartProps {
  cartItems: CartItemInterface[] | [];
  handleUpdateCart: (cartItems: CartItemInterface[]) => void;
  updateProductStock: (
    id: number | string,
    operation: UpdateProductOperation,
    amount: number
  ) => Promise<boolean>;
  handleToggleCart?: () => void;
}

export default function Cart({
  handleToggleCart,
  cartItems,
  handleUpdateCart,
  updateProductStock,
}: CartProps) {
  const handleAddItem = async (id: string): Promise<void> => {
    const updatedStock = await updateProductStock(id, UpdateProductOperation.SUBTRACT, 1);
    const cartItemsCopy: CartItemInterface[] = structuredClone(cartItems);

    if (updatedStock) {
      const updatedCartItems: CartItemInterface[] = cartItemsCopy?.map(
        (cartItem: CartItemInterface) => {
          if (cartItem?.id === id) {
            const currentQuantity = cartItem?.quantity;
            return {
              ...cartItem,
              quantity: currentQuantity + 1,
            };
          }
          return cartItem;
        }
      );

      handleUpdateCart(updatedCartItems);
      return;
    }
  };

  const handleSubtractItem = async (id: string): Promise<void> => {
    const update = await updateProductStock(id, UpdateProductOperation.SUM, 1);
    const cartItemsCopy: CartItemInterface[] = structuredClone(cartItems);
    const hasItemQuantityLeft = cartItems.some(
      (cartItem: CartItemInterface) => cartItem?.id == id && cartItem?.quantity - 1 > 0
    );

    if (update && hasItemQuantityLeft) {
      const updatedCartItems: CartItemInterface[] = cartItemsCopy?.map(
        (cartItem: CartItemInterface) => {
          if (cartItem?.id === id) {
            const currentQuantity = cartItem?.quantity;
            return {
              ...cartItem,
              quantity: currentQuantity - 1,
            };
          }
          return cartItem;
        }
      );
      handleUpdateCart(updatedCartItems);
      return;
    }

    if (update && !hasItemQuantityLeft) {
      const updatedCartItems: CartItemInterface[] = cartItemsCopy?.filter(
        (cartItem: CartItemInterface) => cartItem?.id !== id
      );

      handleUpdateCart(updatedCartItems);
      return;
    }
  };

  return (
    <div className="cart">
      <div className="cart-header-container">
        <div className="back-button-container">
          <button onClick={handleToggleCart}>
            <LeftArrowIcon />
          </button>
        </div>
        <h3>Cart</h3>
      </div>
      <div className="items-container">
        {cartItems?.map((cartItem) => (
          <CartItem
            key={cartItem?.id}
            itemDetails={cartItem}
            handleAddItem={handleAddItem}
            handleSubtractItem={handleSubtractItem}
          />
        ))}
      </div>
      <CartTotal cartItems={cartItems} />
    </div>
  );
}
