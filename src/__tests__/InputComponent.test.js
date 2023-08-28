import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputComponent from "../components/elements/InputComponent";

describe("InputComponent", () => {
  const mockHandleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders label and placeholder correctly", () => {
    render(
      <InputComponent
        type="text"
        name="name"
        classNames="my-input"
        label="Name"
        placeHolder="Enter your name"
        required={true}
        value=""
        handleChange={mockHandleChange}
      />
    );

    const label = screen.getByLabelText("Name");
    const input = screen.getByPlaceholderText("Enter your name");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("calls handleChange on input change", () => {
    render(
      <InputComponent
        type="text"
        name="name"
        classNames="my-input"
        label="Name"
        placeHolder="Enter your name"
        required={true}
        value=""
        handleChange={mockHandleChange}
      />
    );

    const input = screen.getByPlaceholderText("Enter your name");
    userEvent.type(input, "John");

    expect(mockHandleChange).toHaveBeenCalledTimes(4); // Event handlers trigger multiple times
    expect(mockHandleChange).toHaveBeenCalledWith("name", "J");
    expect(mockHandleChange).toHaveBeenCalledWith("name", "Jo");
    expect(mockHandleChange).toHaveBeenCalledWith("name", "Joh");
    expect(mockHandleChange).toHaveBeenCalledWith("name", "John");
  });

  it("calls handleChange and setError on blur if required field is empty", () => {
    render(
      <InputComponent
        type="text"
        name="name"
        classNames="my-input"
        label="Name"
        placeHolder="Enter your name"
        required={true}
        value=""
        handleChange={mockHandleChange}
      />
    );

    const input = screen.getByPlaceholderText("Enter your name");
    fireEvent.blur(input);

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange).toHaveBeenCalledWith("name", "");
    expect(screen.getByText("Name is required")).toBeInTheDocument();
  });

  it("doesn't call handleChange on input change if value is the same", () => {
    render(
      <InputComponent
        type="text"
        name="name"
        classNames="my-input"
        label="Name"
        placeHolder="Enter your name"
        required={true}
        value="John"
        handleChange={mockHandleChange}
      />
    );

    const input = screen.getByPlaceholderText("Enter your name");
    userEvent.type(input, "John");

    expect(mockHandleChange).toHaveBeenCalledTimes(0);
  });

  it("calls handleChange on input change if value is different", () => {
    render(
      <InputComponent
        type="text"
        name="name"
        classNames="my-input"
        label="Name"
        placeHolder="Enter your name"
        required={true}
        value="John"
        handleChange={mockHandleChange}
      />
    );

    const input = screen.getByPlaceholderText("Enter your name");
    userEvent.clear(input);
    userEvent.type(input, "Jane");

    expect(mockHandleChange).toHaveBeenCalledTimes(5);
    expect(mockHandleChange).toHaveBeenCalledWith("name", "");
    expect(mockHandleChange).toHaveBeenCalledWith("name", "J");
    expect(mockHandleChange).toHaveBeenCalledWith("name", "Ja");
    expect(mockHandleChange).toHaveBeenCalledWith("name", "Jan");
    expect(mockHandleChange).toHaveBeenCalledWith("name", "Jane");
  });
});
