import { sanitizeInput } from "../components/elements/InputComponent";

describe("sanitizeInput", () => {
  it("replaces invalid characters with HTML entities", () => {
    const input = "Hello! @World";
    const expectedOutput = "Hello&#33;&#32;&#64;World";

    const sanitizedInput = sanitizeInput(input);

    expect(sanitizedInput).toBe(expectedOutput);
  });

  it("does not modify valid characters", () => {
    const input = "Valid 123 characters";
    const expectedOutput = "Valid 123 characters";

    const sanitizedInput = sanitizeInput(input);

    expect(sanitizedInput).toBe(expectedOutput);
  });

  it("handles special characters", () => {
    const input = "$pecial characters !@#$%^&*()";
    const expectedOutput =
      "$pecial characters &#33;&#64;&#35;&#36;&#37;&#94;&#38;&#42;&#40;&#41;";

    const sanitizedInput = sanitizeInput(input);

    expect(sanitizedInput).toBe(expectedOutput);
  });
});
