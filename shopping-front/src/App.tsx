import { GroceryItem } from "./types/global.types";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const handleAddItemToCart = (itemDetails: GroceryItem): void => {
    console.log(itemDetails);
  };

  const products = [
    {
      id: "41fd4fd9-95c7-4809-96db-a147d352fdbb",
      image_url: "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
      stock: 8,
      productName: "Unbranded Metal Chair",
      price: 43,
      productDescription:
        "Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.",
      favorite: "1",
    },
    {
      id: "20cc33f1-223b-4cf0-878d-fdedb3f60b56",
      image_url: "https://dummyimage.com/400x400/2ee9f7/000&text=Handcrafted Metal Towels",
      stock: 41,
      productName: "Handcrafted Metal Towels",
      price: 98,
      productDescription:
        "Rerum minima laudantium blanditiis dolorem dolores ut sint ut quidem. Est doloremque repellat excepturi dolor consequatur rerum qui. Facere ut vel et enim accusamus ipsum dolores aut. Eaque quo ut omnis unde quam error voluptas non iure.",
      favorite: 0,
    },
    {
      id: "ab284424-8e46-4a3e-8e13-e179b0ab8bb5",
      image_url: "https://dummyimage.com/400x400/4de5d5/000&text=Awesome Cotton Soap",
      stock: 47,
      productName: "Awesome Cotton Soap",
      price: 66,
      productDescription:
        "Molestias sunt quia omnis reprehenderit quia. Iste quia et similique voluptate. Et sit molestias.",
      favorite: 0,
    },
    {
      id: "c34287bf-9cb7-40a7-ad07-6534e45a6868",
      image_url: "https://dummyimage.com/400x400/bc27b5/000&text=Gorgeous Frozen Chair",
      stock: 28,
      productName: "Gorgeous Frozen Chair",
      price: 47,
      productDescription:
        "Harum modi sunt. Voluptatem ut molestiae consequatur. Ea omnis architecto laboriosam accusantium reiciendis corporis exercitationem ad dolor. Fugit autem placeat voluptas sint aut aliquam sed. Totam fuga nesciunt rerum voluptatibus. Voluptatibus voluptates vel ut et temporibus perferendis laboriosam accusamus.",
      favorite: 0,
    },
    {
      id: "41fb4f07-22fd-4ef6-b23c-1ac022b57d11",
      image_url: "https://dummyimage.com/400x400/f04d95/000&text=Incredible Fresh Ball",
      stock: 36,
      productName: "Incredible Fresh Ball",
      price: 71,
      productDescription:
        "Eveniet aliquid quisquam eveniet quam. Porro autem dolorem repellat minus occaecati neque non aperiam. Quaerat aut quia dolor illo et. Voluptatibus nemo eos eum.",
      favorite: 0,
    },
    {
      id: "b590e450-1e0c-4344-92b8-e1f6cc260587",
      image_url: "https://dummyimage.com/400x400/adca70/000&text=Fantastic Wooden Sausages",
      stock: 0,
      productName: "Fantastic Wooden Sausages",
      price: 1,
      productDescription:
        "Ea qui et. Minus minima omnis. Nisi temporibus quam vel doloribus tempore ut possimus repellendus minus. Aut et repudiandae et dolorum ut consectetur. Qui laborum tenetur corporis odit architecto. Rerum neque odit.",
      favorite: 0,
    },
    {
      id: "1db18081-575b-47b2-b0d8-395314a6b327",
      image_url: "https://dummyimage.com/400x400/c49fd9/000&text=Gorgeous Rubber Salad",
      stock: 44,
      productName: "Gorgeous Rubber Salad",
      price: 62,
      productDescription:
        "Officiis facilis dignissimos dolores numquam. Quidem soluta et. Quis est eveniet rem aut aut. Perferendis reprehenderit repellat sunt magni consequuntur quas. Enim aut minus voluptate explicabo neque voluptatem quas.",
      favorite: 0,
    },
    {
      id: "7eca1ea3-0bf6-4b00-bb6b-e08ba834dd4e",
      image_url: "https://dummyimage.com/400x400/6b90de/000&text=Rustic Soft Table",
      stock: 48,
      productName: "Rustic Soft Table",
      price: 49,
      productDescription:
        "Exercitationem iure quia officiis sed hic illo iusto vero maxime. Fuga iste quia nemo. Officiis nihil veritatis doloremque in praesentium sit autem fugit.",
      favorite: 0,
    },
    {
      id: "57483e83-1378-42f3-8d40-e4d75e4ff767",
      image_url: "https://dummyimage.com/400x400/93182/000&text=Fantastic Fresh Car",
      stock: 47,
      productName: "Fantastic Fresh Car",
      price: 23,
      productDescription:
        "Rem et id blanditiis deleniti et. Consectetur illo veniam. Et dolores voluptatem ullam et error quis aut. Corrupti aut et aut id. Unde iusto et qui doloremque vel commodi alias.",
      favorite: 0,
    },
    {
      id: "11a7aee9-d712-4395-9c35-bde70c9f0171",
      image_url: "https://dummyimage.com/400x400/5be5c9/000&text=Awesome Plastic Gloves",
      stock: 46,
      productName: "Awesome Plastic Gloves",
      price: 71,
      productDescription:
        "Cupiditate ab unde maxime. Ab cumque quasi vel excepturi voluptate recusandae et nemo. Fuga laboriosam tenetur.",
      favorite: 0,
    },
    {
      id: "7ac6d979-0771-4b8c-809d-eb8aa36be7f4",
      image_url: "https://dummyimage.com/400x400/61cc38/000&text=Awesome Plastic Towels",
      stock: 2,
      productName: "Awesome Plastic Towels",
      price: 93,
      productDescription:
        "Earum voluptates animi excepturi sed dolor nemo. Ab sed magnam modi saepe et est optio dolorum. Eum pariatur dolor voluptatibus. Ut magnam omnis. Culpa nisi provident cumque libero.",
      favorite: 0,
    },
    {
      id: "ea46848e-f2fe-4d8f-a0b2-c30c0f1d2417",
      image_url: "https://dummyimage.com/400x400/f02ef0/000&text=Tasty Wooden Car",
      stock: 10,
      productName: "Tasty Wooden Car",
      price: 90,
      productDescription:
        "Voluptatibus quia est eveniet consequatur est veritatis. Esse ex sapiente. Consequatur numquam quam assumenda vel. Itaque non consectetur sed doloribus perspiciatis. Corporis officiis deserunt.",
      favorite: 0,
    },
    {
      id: "031806fb-89b6-4790-a889-5c0fa94d380a",
      image_url: "https://dummyimage.com/400x400/513c52/000&text=Handcrafted Granite Pants",
      stock: 25,
      productName: "Handcrafted Granite Pants",
      price: 4,
      productDescription:
        "Impedit nihil dolorem. Illum reprehenderit sit. Doloribus quo reprehenderit beatae est vero. Expedita ut praesentium. Incidunt quisquam a dolore a animi. Voluptas molestiae aut fuga.",
      favorite: 0,
    },
  ];

  return (
    <div className="app">
      <ProductList products={products} handleAddItemToCart={handleAddItemToCart} />
      <div className="cart">
        <h3>Checkout</h3>
      </div>
    </div>
  );
}

export default App;
