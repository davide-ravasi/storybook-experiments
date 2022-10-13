import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextInput from "./TextInput";
import userEvent from "@testing-library/user-event";

test("check that TextInput show correctly with props datas", () => {
  const data = {
    name: "firstname",
    label: "insert your name",
    placeholder: "insert the name here",
    type: "text",
  };

  render(<TextInput {...data} />);

  const inputField = screen.getByLabelText("insert your name");
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveAttribute("type", "text");
  expect(inputField).toHaveAttribute("placeholder", "insert the name here");
  expect(inputField).toHaveAttribute("name", "firstname");
  expect(inputField).toHaveAttribute("id", "firstname");

  userEvent.type(inputField, "try write something");

  expect(inputField).toHaveValue("try write something");
});
