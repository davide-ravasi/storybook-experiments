import { render, screen, within } from "@testing-library/react";
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

  it("form sohuld be present", () => {  
    render(<CustomProgram />);

    const inputText = screen.queryByRole("spinbutton", {
      name: "Insert initial value",
    });
    expect(inputText).toBeInTheDocument();
    expect(inputText).toHaveAttribute("type", "number");
  });

  it("test values initial values shoud be present", () => {
    render(<CustomProgram />);

    const testValues = screen.queryByText("? -> function -> ?");
    expect(testValues).toBeInTheDocument();
  });
});
