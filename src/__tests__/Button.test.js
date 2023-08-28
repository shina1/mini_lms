import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FaCheck } from "react-icons/fa";
import { Button } from "../components/elements/Button";

describe("Button component", () => {
  it("renders with text and no icon", () => {
    const { getByText, queryByTestId } = render(
      <Button text="Click me" type="primary" />
    );
    const buttonText = getByText("Click me");
    const icon = queryByTestId("icon");
    expect(buttonText).toBeInTheDocument();
    expect(icon).toBeNull();
  });

  it("renders with icon and text", () => {
    const { getByText, getByTestId } = render(
      <Button icon={FaCheck} text="Save" type="secondary" />
    );
    const buttonText = getByText("Save");
    const icon = getByTestId("icon");
    expect(buttonText).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it("calls the handleClick function when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button text="Click me" type="primary" handleClick={handleClick} />
    );
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders a primary button", () => {
    const { container } = render(<Button text="Primary" type="primary" />);
    expect(container.firstChild).toHaveClass("bg-[#FF7606]/80");
  });

  it("renders a secondary button", () => {
    const { container } = render(<Button text="Secondary" type="secondary" />);
    expect(container.firstChild).toHaveClass("bg-[#000]");
  });
});
