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
    { name: "Orange", color: "bg-stone-50", score: 5, weight: 1000 },
    { name: "Apple", color: "bg-red-500", score: 3, weight: 2000 },
    { name: "Banana", color: "bg-yellow-500", score: 1, weight: 500 },
    { name: "Lime", color: "bg-green-500", score: 4, weight: 800 },
  ],
  config: [
    { label: "Name of Fruit", name: "name", render: (fruit) => fruit.name },
    {
      label: "Color",
      name: "color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    { label: "Score", name: "score", render: (fruit) => fruit.score },
    { label: "Weight", name: "weight", render: (fruit) => fruit.weight },
  ],
};
