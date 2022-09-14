import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Accordion, { Data } from "./Accordion";
import { fireEvent } from "@storybook/testing-library";

test("check that accordion show correctly with mock datas", () => {
  const data = [
    {
      id: 123,
      title: "prova 1",
      content:
        "aaaa lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet",
    },
    {
      id: 345,
      title: "prova 2",
      content:
        "bbbb lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet",
    },
    {
      id: 350,
      title: "prova 3",
      content:
        "cccc lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet",
    },
  ];

  render(<Accordion data={data} />);

  const headers = screen.getAllByRole("button");

  expect(headers).toHaveLength(3);

  const contents = screen.getAllByRole("region");

  expect(contents).toHaveLength(3);

  const firstHeader = screen.getByText(data[0].title);

  expect(firstHeader).toBeInTheDocument();

  const firstContent = screen.getByText(data[0].content);

  expect(firstContent).toBeVisible();

  fireEvent.click(firstHeader);
});
