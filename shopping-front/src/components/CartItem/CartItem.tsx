import React, { useState } from "react";
import { CartItem as CartItemInterface } from "../../types/global.types";

interface CartItemProps {
  itemDetails: CartItemInterface;
}

export default function CartItem({ itemDetails }: CartItemProps) {
  const [itemQuantity, setItemQuantity] = useState(1);

  // ** Consideraciones **
  // TODO: Cuando el item llegue a 0, debemos eliminar el item de la cesta de la compra
  // TODO: Si restamos items de un producto, el número de artículos disponible de ese item
  // en el listado general de artículos debe actualizarse.
  // TODO: el incremento o decremento de artículos debe reflejarse en el componente Checkout.

  const handleAddItem = () => {
    if (itemQuantity < 99) {
      setItemQuantity((prevState) => prevState + 1);
    }
  };

  const handleSubtractItem = () => {
    if (itemQuantity > 0) {
      setItemQuantity((prevState) => prevState - 1);
    }
    
  };


  return (
    <div className="cart-item">
      <img src={itemDetails?.image_url} />
      <div className="action-container">
        <span>{itemDetails?.productName}</span>
        <div className="item-quantity-container">
          <button onClick={handleSubtractItem}>-</button>
          <span>{itemQuantity}</span>
          <button onClick={handleAddItem}>+</button>
        </div>
      </div>
      <div className="price-container">
        <span>{itemDetails?.price}€</span>
      </div>
    </div>
  );
}
