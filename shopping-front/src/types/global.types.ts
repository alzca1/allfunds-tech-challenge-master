export interface Product {
  id: string;
  image_url: string;
  stock: number;
  productName: string;
  price: number;
  productDescription: string;
  favorite: string | number;
}

export interface CartItem {
  id: string;
  image_url: string;
  productName: string;
  quantity: number;
  price: number;
}

export interface ProductDetailState {
  isLoading: boolean;
  data: Product[];
  error: Error | null;
}

export enum UpdateProductOperation {
  SUM = "sum",
  SUBTRACT = "subtract",
}
