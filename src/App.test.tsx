import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

test("renders FizzBuzz React App", () => {
  render(<App />);
  const titleElement = screen.getByText("FizzBuzz React App");
  expect(titleElement).toBeInTheDocument();
});
