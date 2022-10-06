import React from "react";
import { screen, render, within, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ItemList from "./ItemList";

// https://claritydev.net/blog/testing-react-hook-form-with-react-testing-library/

const mockItems = [
  { id: 1, name: "Tomatoes", value: 5.0 },
  { id: 2, name: "Basil", value: 2.5 },
  { id: 3, name: "Mozzarella", value: 9.99 },
];

describe("ItemList", () => {
  it("should render the basic fields", () => {
    render(<ItemList items={mockItems} />);

    const textbox = screen.getByRole("textbox", { name: /Insert the name/i });
    const spinbutton = screen.getByRole("spinbutton", {
      name: /Insert the price/i,
    });

    expect(textbox).toBeInTheDocument();
    expect(textbox).toHaveAttribute("type", "text");

    expect(spinbutton).toBeInTheDocument();
    expect(spinbutton).toHaveAttribute("type", "number");

    expect(screen.getByRole("button", { name: /Insert/i })).toBeInTheDocument();
  });

  it("should render the basic list", () => {
    render(<ItemList items={mockItems} />);

    const itemList = screen.getByRole("list", { name: /Item List/i });

    const { getAllByRole } = within(itemList);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(3);
  });

  it("should give ERROR MESSAGE if fields empty", () => {
    render(<ItemList items={mockItems} />);

    const submit = screen.getByRole("button", { name: /Insert/i });

    userEvent.click(submit);

    expect(screen.getByRole("alert").textContent).toEqual(
      "The values must not be empty"
    );
  });

  it("should give ERROR MESSAGE if number is invalid", () => {
    render(<ItemList items={mockItems} />);

    const textbox = screen.getByRole("textbox", { name: /Insert the name/i });

    const spinbutton = screen.getByRole("spinbutton", {
      name: /Insert the price/i,
    });

    userEvent.type(textbox, "Melanzana");

    //userEvent.type(spinbutton, "0");
    fireEvent.change(spinbutton, { target: { value: "-23" } });

    expect(textbox).toHaveValue("Melanzana");

    expect(spinbutton).toHaveValue(-23);

    const submit = screen.getByRole("button", { name: /Insert/i });

    userEvent.click(submit);

    expect(screen.getByRole("alert").textContent).toEqual(
      "The price must be > 0"
    );
  });

  it("should ADD an element", () => {
    render(<ItemList items={mockItems} />);

    const itemList = screen.getByRole("list", { name: /Item List/i });

    const textbox = screen.getByRole("textbox", { name: /Insert the name/i });

    const spinbutton = screen.getByRole("spinbutton", {
      name: /Insert the price/i,
    });

    userEvent.type(textbox, "Melanzana");

    fireEvent.change(spinbutton, { target: { value: "100" } });

    expect(textbox).toHaveValue("Melanzana");

    expect(spinbutton).toHaveValue(100);

    const submit = screen.getByRole("button", { name: /Insert/i });

    userEvent.click(submit);

    const { getAllByRole } = within(itemList);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(4);
  });

  it("should REMOVE an element", () => {
    render(<ItemList items={mockItems} />);

    const itemList = screen.getByRole("list", { name: /Item List/i });

    const { getAllByRole } = within(itemList);
    const itemsBefore = getAllByRole("listitem");
    expect(itemsBefore.length).toBe(3);

    const removeBtn = screen.getByTestId("remove-3");
    userEvent.click(removeBtn);

    const itemsAfter = getAllByRole("listitem");
    expect(itemsAfter.length).toBe(2);
  });
});
