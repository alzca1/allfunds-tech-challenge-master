import { describe, it, expect } from "vitest";
import { truncateText } from "../src/helpers/helpers";

describe("truncateText", () => {
  it("should return original text when the text provided does not reach the maximum amount of characters for the string", () => {
    const text = "Hello world";
    const result = truncateText(text, 20);

    expect(result).toBe(text);
  });

  it("should truncate text and add '...' if the text's length is bigger than the maximum amount of characters for the string", () => {
    const text =
      "Harum modi sunt. Voluptatem ut molestiae consequatur. Ea omnis architecto laboriosam accusantium reiciendis corporis exercitationem ad dolor. Fugit autem placeat voluptas sint aut aliquam sed. Totam fuga nesciunt rerum voluptatibus. Voluptatibus voluptates vel ut et temporibus perferendis laboriosam accusamus.";

    const expectedText = "Harum modi sunt. Voluptatem ut molestiae consequatur. E...";

    const result = truncateText(text, 55);
    expect(result).toBe(expectedText);
  });

  it("should return an empty string if the text string is empty", () => {
    const text = "";
    const result = truncateText(text, 5);

    expect(result).toBe("");
  });

  it("should handle correctly a maximum number of characters equal to 0", () => {
    const text = "Hello world";
    const result = truncateText(text, 0);

    expect(result).toBe("...");
  });

  it("should return the original text if no maximum amount of characters is provided", () => {
    const text = "Hello world";
    const result = truncateText(text, undefined as unknown as number);
    expect(result).toBe(text);
  });

  it("should handle correctly an undefined as text", () => {
    const text = undefined as unknown as string;
    const result = truncateText(text, 0);

    expect(result).toBe(undefined);
  });
});
