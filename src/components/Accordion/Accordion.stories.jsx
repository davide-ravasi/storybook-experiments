import React from "react";
import Accordion from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [
    {
      id: 123,
      title: "prova 1",
      content:
        "lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet",
    },
    {
      id: 345,
      title: "prova 2",
      content:
        "lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet",
    },
  ],
};
