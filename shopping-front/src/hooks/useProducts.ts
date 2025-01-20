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

  const getProduct = async (productId: number | string): Promise<Product | null> => {
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
    id: number | string,
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
        // actualización optimista del estado donde almacenamos los objetos
        const productDetailsCopy = structuredClone(productDetails.data);
        const updatedProductDetails = productDetailsCopy.map((product) => {
          if (product?.id == id) {
            return {
              ...product,
              stock: newStock,
            };
          }
          return product;
        });

        setProductDetails((prevState) => ({
          ...prevState,
          data: updatedProductDetails,
        }));

        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const updateProductFavorite = async (id: string, favValue: number | string): Promise<boolean> => {
    try {
      const response = await axios.patch(`${apiRoutes.updateProduct}/${id}`, {
        favorite: favValue,
      });

      if (response.status == 200) {
        const productDetailsCopy: Product[] = structuredClone(productDetails.data);
        const updatedProductDetails: Product[] = productDetailsCopy.map((product) => {
          if (product?.id == id) {
            return {
              ...product,
              favorite: favValue,
            };
          }
          return product;
        });

        setProductDetails((prevState) => ({
          ...prevState,
          data: updatedProductDetails,
        }));
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return { getProducts, productDetails, updateProductStock, updateProductFavorite };
}
