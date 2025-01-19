import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { apiRoutes } from "../routes/apiRoutes";
import { Product, ProductDetailState, UpdateProductOperation } from "../types/global.types";

export function useProducts() {
  const [productDetails, setProductDetails] = useState<ProductDetailState>({
    isLoading: false,
    data: [],
    error: null,
  });

  const getProducts = async () => {
    setProductDetails({
      isLoading: true,
      data: [],
      error: null,
    });
    try {
      const response: AxiosResponse<Product[]> = await axios.get(apiRoutes.getProducts);

      if (response.status === 200) {
        setProductDetails((prevState) => ({
          ...prevState,
          isLoading: false,
          data: response?.data,
          error: null,
        }));
        return;
      }

      setProductDetails({
        isLoading: false,
        data: [],
        error: null,
      });
    } catch (error) {
      console.error(error);
      setProductDetails({
        isLoading: false,
        data: [],
        error: error as Error,
      });
    }
  };

  const getProduct = async (productId: number): Promise<Product | null> => {
    try {
      const response: AxiosResponse<Product> = await axios.get(
        `${apiRoutes.getProduct}/${productId}`
      );

      if (response.status === 200) {
        return response.data;
      }

      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const updateProductStock = async (
    id: number,
    operation: UpdateProductOperation,
    amount: number
  ): Promise<boolean> => {
    try {
      const product = await getProduct(id);

      if (!product) {
        throw new Error(`Product with id ${id} not found `);
      }

      let newStock: number = product?.stock;

      if (operation === UpdateProductOperation.SUM) {
        newStock += amount;
      }

      if (operation === UpdateProductOperation.SUBTRACT) {
        newStock -= amount;
      }

      if (newStock < 0) {
        throw new Error("Product stock cannot be negative");
      }

      const response: AxiosResponse = await axios.patch(`${apiRoutes.updateProduct}/${id}`, {
        stock: newStock,
      });

      if (response.status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return { getProducts, productDetails, updateProductStock };
}
