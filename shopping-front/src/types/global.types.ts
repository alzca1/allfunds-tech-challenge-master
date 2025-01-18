export interface GroceryItem {
  id: string;
  image_url: string;
  stock: number;
  productName: string;
  price: number;
  productDescription: string;
  favorite: string | number;
}
