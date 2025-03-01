import { useEffect, useState } from "react";
import { CartItem as CartItemInterface } from "../../types/global.types";

interface CartItemProps {
  itemDetails: CartItemInterface;
  handleAddItem: (id: string) => Promise<void>;
  handleSubtractItem: (id: string) => Promise<void>;
}

export default function CartItem({
  itemDetails,
  handleAddItem,
  handleSubtractItem,
}: CartItemProps) {
  const [itemUpdating, setItemUpdating] = useState(false);

  useEffect(() => {
    setItemUpdating(false);
  }, [itemDetails]);

  const addItem = () => {
    setItemUpdating(true);
    handleAddItem(itemDetails?.id);
  };

  const subtractItem = () => {
    setItemUpdating(true);
    handleSubtractItem(itemDetails?.id);
  };

  return (
    <div className="cart-item">
      <img src={itemDetails?.image_url} />
      <div className="action-container">
        <span>{itemDetails?.productName}</span>
        <div className="item-quantity-container">
          <button disabled={itemUpdating} onClick={subtractItem}>
            -
          </button>
          <span>{itemDetails?.quantity}</span>
          <button disabled={itemUpdating} onClick={addItem}>
            +
          </button>
        </div>
      </div>
      <div className="price-container">
        <span>{itemDetails?.price}€</span>
      </div>
    </div>
  );
}
