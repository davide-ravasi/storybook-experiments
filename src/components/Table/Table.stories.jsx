import React from "react";
import Table from "./Table";

export default {
  title: "Components/Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [
    { name: "Orange", color: "bg-stone-50", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ],
  config: [
    { label: "Name of Fruit", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    { label: "Score", render: (fruit) => fruit.score },
  ],
};
