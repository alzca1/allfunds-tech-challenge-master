import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, beforeEach, vi, expect } from "vitest";
import CartItem from "../src/components/CartItem/CartItem";
import { CartItem as CartItemInterface } from "../src/types/global.types";

const mockHandleAddItem = vi.fn();
const mockHandleSubtractItem = vi.fn();

const mockCartItem: CartItemInterface = {
  id: "41fd4fd9-95c7-4809-96db-a147d352fdbb",
  image_url: "https:Metal Chair",
  productName: "Unbranded Metal",
  price: 43,
  quantity: 2,
};

describe("CartItem Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders cart item details correctly", () => {
    render(
      <CartItem
        itemDetails={mockCartItem}
        handleAddItem={mockHandleAddItem}
        handleSubtractItem={mockHandleSubtractItem}
      />
    );

    expect(screen.getByText("Unbranded Metal")).toBeInTheDocument();
    expect(screen.getByText("43€")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockCartItem.image_url);
  });

  it("disables buttons when itemUpdating is true", () => {
    render(
      <CartItem
        itemDetails={mockCartItem}
        handleAddItem={mockHandleAddItem}
        handleSubtractItem={mockHandleSubtractItem}
      />
    );

    const addButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(addButton);

    expect(addButton).toBeDisabled();
    const subtractButton = screen.getByRole("button", { name: "-" });
    expect(subtractButton).toBeDisabled();
  });

  it("calls handleAddItem when the add button is clicked", async () => {
    render(
      <CartItem
        itemDetails={mockCartItem}
        handleAddItem={mockHandleAddItem}
        handleSubtractItem={mockHandleSubtractItem}
      />
    );

    const addButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(addButton);

    expect(mockHandleAddItem).toHaveBeenCalledWith(mockCartItem.id);
    expect(mockHandleAddItem).toHaveBeenCalledTimes(1);
  });

  it("calls handleSubtractItem when the subtract button is clicked", async () => {
    render(
      <CartItem
        itemDetails={mockCartItem}
        handleAddItem={mockHandleAddItem}
        handleSubtractItem={mockHandleSubtractItem}
      />
    );

    const subtractButton = screen.getByRole("button", { name: "-" });
    fireEvent.click(subtractButton);

    expect(mockHandleSubtractItem).toHaveBeenCalledWith(mockCartItem.id);
    expect(mockHandleSubtractItem).toHaveBeenCalledTimes(1);
  });

  it("resets itemUpdating when itemDetails change", () => {
    const { rerender } = render(
      <CartItem
        itemDetails={mockCartItem}
        handleAddItem={mockHandleAddItem}
        handleSubtractItem={mockHandleSubtractItem}
      />
    );

    const addButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(addButton);
    expect(addButton).toBeDisabled();

    const updatedCartItem = { ...mockCartItem, quantity: 3 };
    rerender(
      <CartItem
        itemDetails={updatedCartItem}
        handleAddItem={mockHandleAddItem}
        handleSubtractItem={mockHandleSubtractItem}
      />
    );

    expect(addButton).not.toBeDisabled();
  });
});
