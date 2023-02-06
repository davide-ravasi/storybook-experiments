import {
  screen,
  render,
  fireEvent,
  cleanup,
  getByTestId,
  waitFor,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import WriteSentenceInput from "./WriteSentenceInput";

describe("WriteSentenceInput component", () => {
  afterEach(cleanup);

  it("should display an input field and a sentence", async () => {
    render(<WriteSentenceInput />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();

    const form = screen.getByTestId("form");

    const finalSentenceWrapper = screen.getByTestId("final-sentence-wrapper");
    expect(finalSentenceWrapper).toBeInTheDocument();

    fireEvent.change(input, {
      target: { value: "This is a test sentence" },
    });
    fireEvent.submit(form);

    // Wait for the setInterval to complete
    await waitFor(
      () => {
        expect(screen.getByTestId("final-sentence-wrapper").textContent).toBe(
          "This is a test sentence"
        );
      },
      {
        timeout: 3000,
      }
    );
  });
});
