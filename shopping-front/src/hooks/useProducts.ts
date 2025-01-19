import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { apiRoutes } from "../routes/apiRoutes";
import { Product, ProductDetailState } from "../types/global.types";

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

  return { getProducts, productDetails };
}
