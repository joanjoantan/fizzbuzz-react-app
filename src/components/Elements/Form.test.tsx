import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Form from "./Form";

test("displays an error message for invalid input", () => {
  render(<Form />);
  const inputElement = screen.getByLabelText("Enter a number:");
  fireEvent.change(inputElement, { target: { value: "invalid" } });
  const errorMessage = screen.getByText("Please enter a valid number.");
  expect(errorMessage).toBeInTheDocument();
});

test("calculates and displays Fizz for input 3", () => {
  render(<Form />);
  const inputElement = screen.getByLabelText("Enter a number:");
  fireEvent.change(inputElement, { target: { value: "3" } });
  const resultElement = screen.getByText("Result: Fizz");
  expect(resultElement).toBeInTheDocument();
});

test("calculates and displays Buzz for input 5", () => {
  render(<Form />);
  const inputElement = screen.getByLabelText("Enter a number:");
  fireEvent.change(inputElement, { target: { value: "5" } });
  const resultElement = screen.getByText("Result: Buzz");
  expect(resultElement).toBeInTheDocument();
});

test("calculates and displays FizzBuzz for input 15", () => {
  render(<Form />);
  const inputElement = screen.getByLabelText("Enter a number:");
  fireEvent.change(inputElement, { target: { value: "15" } });
  const resultElement = screen.getByText("Result: FizzBuzz");
  expect(resultElement).toBeInTheDocument();
});
