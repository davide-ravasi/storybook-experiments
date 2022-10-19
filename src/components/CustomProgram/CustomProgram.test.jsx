import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CustomProgram from "./CustomProgram";

describe("Custom program component", () => {
  it("buttons should be presents", () => {
    render(<CustomProgram />);

    const btnWrapper = screen.getByTestId("button-wrapper");

    const { getAllByRole } = within(btnWrapper);
    const items = getAllByRole("button");
    expect(items.length).toBe(5);
  });

  it("list functions initial value", () => {
    render(<CustomProgram />);

    const noFnsText = screen.queryByTestId("no-functions-text");
    expect(noFnsText).toBeInTheDocument();
    expect(noFnsText).toHaveTextContent("no sequence available");
  });

  it("form should be present", () => {
    render(<CustomProgram />);

    const inputText = screen.queryByRole("spinbutton", {
      name: "Insert initial value",
    });
    expect(inputText).toBeInTheDocument();
    expect(inputText).toHaveAttribute("type", "number");
  });

  it("test values initial values shoud be present", () => {
    render(<CustomProgram />);

    const testValues = screen.queryByText("? -> My Function -> ?");
    expect(testValues).toBeInTheDocument();
  });

  it("test inserting value and sequence and execute program", () => {
    render(<CustomProgram />);

    // insert value and check presence
    const inputText = screen.queryByRole("spinbutton", {
      name: "Insert initial value",
    });

    fireEvent.change(inputText, { target: { value: "2" } });

    //const testValues = screen.getByTestId("program-results");
    //expect(testValues).toHaveTextContent("2 -> function -> ?");

    // insert sequence and check snapshot
    const halfBtn = screen.getByRole("button", { name: "Half" });
    const doubleBtn = screen.getByRole("button", { name: "Double" });
    const incrementBtn = screen.getByRole("button", { name: "Increment" });

    userEvent.click(halfBtn);
    userEvent.click(doubleBtn);
    userEvent.click(incrementBtn);

    const list = screen.getByRole("list", { name: "My Function" });
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    const listContents = items.map((item) => item.textContent);

    expect(listContents).toMatchInlineSnapshot(`
      Array [
        "half",
        "double",
        "increment",
      ]
    `);

    // execute program and check results
    const submitBtn = screen.getByRole("button", { name: "Submit" });
    userEvent.click(submitBtn);
    const testValues = screen.getByTestId("program-results");
    expect(testValues).toHaveTextContent("2 -> My Function -> 3");
    const noFnsText = screen.queryByTestId("no-functions-text");
    expect(noFnsText).toBeInTheDocument();
    expect(noFnsText).toHaveTextContent("no sequence available");
  });
});
