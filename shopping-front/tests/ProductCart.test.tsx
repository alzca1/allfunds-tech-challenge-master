import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, beforeEach, vi, expect } from "vitest";
import ProductCard from "../src/components/ProductCard/ProductCard";
import { Product, UpdateProductOperation } from "../src/types/global.types";

const mockHandleAddItemToCart = vi.fn();

const mockProduct: Product = {
  id: "41fd4fd9-95c7-4809-96db-a147d352fdbb",
  image_url: "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
  stock: 8,
  productName: "Unbranded Metal",
  price: 43,
  productDescription: "Porro tempore autem.",
  favorite: "1",
};

describe("ProductCard Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders product details correctly", () => {
    render(<ProductCard itemDetails={mockProduct} handleAddItemToCart={mockHandleAddItemToCart} />);

    expect(screen.getByText("Unbranded Metal")).toBeInTheDocument();
    expect(screen.getByText("43")).toBeInTheDocument();
    expect(screen.getByText("8 left")).toBeInTheDocument();
    expect(screen.getByText("Porro tempore autem.")).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockProduct.image_url);
  });

  it("disables the button when stock is 0", () => {
    render(
      <ProductCard
        itemDetails={{ ...mockProduct, stock: 0 }}
        handleAddItemToCart={mockHandleAddItemToCart}
      />
    );

    const button = screen.getByRole("button", { name: "+add" });
    expect(button).toBeDisabled();
  });

  it("calls handleAddItemToCart when the button is clicked", async () => {
    render(<ProductCard itemDetails={mockProduct} handleAddItemToCart={mockHandleAddItemToCart} />);

    const button = screen.getByRole("button", { name: "+add" });
    fireEvent.click(button);

    expect(mockHandleAddItemToCart).toHaveBeenCalledWith(
      mockProduct,
      UpdateProductOperation.SUBTRACT,
      1
    );

    expect(mockHandleAddItemToCart).toHaveBeenCalledTimes(1);
  });

  it("shows 'updating' when productUpdating is true", async () => {
    render(<ProductCard itemDetails={mockProduct} handleAddItemToCart={mockHandleAddItemToCart} />);

    const button = screen.getByRole("button", { name: "+add" });

    fireEvent.click(button);

    expect(button).toHaveTextContent("updating");
  });

  it("updates product details when itemDetails change", () => {
    const { rerender } = render(
      <ProductCard itemDetails={mockProduct} handleAddItemToCart={mockHandleAddItemToCart} />
    );

    expect(screen.getByText("Unbranded Metal")).toBeInTheDocument();
    expect(screen.getByText("8 left")).toBeInTheDocument();

    const updatedProduct = { ...mockProduct, stock: 10, productName: "Updated Product" };
    rerender(
      <ProductCard itemDetails={updatedProduct} handleAddItemToCart={mockHandleAddItemToCart} />
    );

    expect(screen.getByText("Updated Product")).toBeInTheDocument();
    expect(screen.getByText("10 left")).toBeInTheDocument();
  });
});
