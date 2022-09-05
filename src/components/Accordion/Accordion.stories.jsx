import React from "react";
import Accordion from "./Accordion";

export default {
  title: "Example/Accordion",
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [
    {
      title: "prova 1",
      content:
        "lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet",
    },
    {
      title: "prova 2",
      content:
        "lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet lorem ipsum dolar sic amet",
    },
  ],
};
