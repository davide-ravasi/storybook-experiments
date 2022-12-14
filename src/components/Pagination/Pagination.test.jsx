import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";

describe("Custom program component", () => {
  it("list elements should be presents", async () => {
    render(<Pagination totalItems="4" itemsPage="2" />);

    // check the list
    const listNames = await screen.findByRole("table", { name: "Names list:" });
    expect(listNames).toBeInTheDocument();

    // check elements in the list
    const { findAllByRole } = within(listNames);
    const items = await findAllByRole("columnheader");
    expect(items.length).toBe(2);
    const items2 = await findAllByRole("cell");
    expect(items2.length).toBe(6);
  });

  it("paging elements should be presents", async () => {
    render(<Pagination totalItems="4" itemsPage="2" />);

    // check the pagination
    const listPages = await screen.findByRole("list", {
      name: "Navigate between the pages",
    });
    expect(listPages).toBeInTheDocument();

    // check elements in pagination
    const { findAllByRole } = within(listPages);
    const listPagesItems = await findAllByRole("listitem");
    expect(listPagesItems.length).toBe(2);

    // check selected elements in pagination at start
    expect(listPagesItems[0]).toHaveClass("current");
    expect(listPagesItems[0]).toHaveTextContent("1");
  });

  it("check change pages", async () => {
    render(<Pagination totalItems="4" itemsPage="2" />);

    const listPages = await screen.findByRole("list", {
      name: "Navigate between the pages",
    });

    // check elements in pagination
    const { findAllByRole } = within(listPages);
    const listPagesItems = await findAllByRole("listitem");
    const listPageTwo = listPagesItems[1];
    expect(listPageTwo).toHaveTextContent("2");

    userEvent.click(listPageTwo);

    // check clicked element in pagination
    expect(listPageTwo).toHaveClass("current");

    const listNames = await screen.findByRole("table", { name: "Names list:" });

    // mock datas
    expect(listNames).toMatchSnapshot();
  });
});
