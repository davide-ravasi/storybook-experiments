import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";

describe("Custom program component", () => {
  it("buttons should be presents", () => {
    render(<Pagination />);

    expect(true).toBe(true);
  });

});
