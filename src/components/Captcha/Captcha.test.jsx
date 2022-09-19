import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fireEvent } from "@storybook/testing-library";
import Captcha from "./Captcha";

test("check that captcha works well when clicked", () => {
  render(<Captcha />);

  const button = screen.getByRole("button", {
    name: "I'm not a Robot",
  });

  const captcha = screen.getByTestId("captcha", {
    hidden: true,
  });

  expect(captcha).toHaveClass("hidden");

  fireEvent.click(button);

  expect(captcha).not.toHaveClass("hidden");
});
