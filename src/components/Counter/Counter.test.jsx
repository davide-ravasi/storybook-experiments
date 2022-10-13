import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fireEvent } from "@storybook/testing-library";
import Counter from "./Counter";

test("check initial counter state", () => {
  render(<Counter backgroundColor="blue" />);

  const btnIncrement = screen.getByRole("button", {
    name: "+",
  });

  const btnDecrement = screen.getByRole("button", {
    name: "-",
  });

  const counter = screen.getByTestId("counter");

  expect(btnIncrement).toBeInTheDocument();
  expect(btnDecrement).toBeInTheDocument();
  expect(counter).toBeInTheDocument();
  expect(counter).toHaveTextContent("Counter: 0");
});

test("check counter INCREMENT function", () => {
  render(<Counter backgroundColor="blue" />);

  const btnIncrement = screen.getByRole("button", {
    name: "+",
  });

  const btnDecrement = screen.getByRole("button", {
    name: "-",
  });

  const counter = screen.getByTestId("counter");
});

test("check counter DECREMENT function", () => {
  render(<Counter backgroundColor="blue" />);

  const btnIncrement = screen.getByRole("button", {
    name: "+",
  });

  const btnDecrement = screen.getByRole("button", {
    name: "-",
  });

  const counter = screen.getByTestId("counter");
});
