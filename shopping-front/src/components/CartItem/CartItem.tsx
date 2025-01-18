import React, { useState } from "react";

export default function CartItem() {
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
    // TODO: añadir lógica para incrementar el número de artículos disponibles en este mismo
    // artículo de la lista general.

    // TODO: si el artículo llega a itemQuantity == 0, debemos eliminar el artículo de la lista de la compra.
  };

  const itemDetails = {
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
    <div className="cart-item">
      <img src={itemDetails?.image_url} />
      <h6>{itemDetails?.productName}</h6>
      <button onClick={handleSubtractItem}>-</button>
      <button onClick={handleAddItem}>+</button>
      {itemQuantity}
      <span>{itemDetails?.price}</span>
    </div>
  );
}
