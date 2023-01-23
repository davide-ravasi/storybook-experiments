import React from "react";
import TableRef from "./TableRef";

export default {
  title: "Components/TableRef",
  component: TableRef,
};

const Template = (args) => <TableRef {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [
    { name: "Orange", color: "bg-stone-50", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ],
  config: [
    {
      label: "Name of Fruit",
      name: "name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      name: "color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      name: "score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ],
};

/*
  - add possibility to have a table and a sortable table
  - add a header prop in config
  - add an if  in rendered headers render function
  - add fragment for key
  - add sortValue in config
  - create sortable table HOC SortableTable
  - new config:
    {
      label: 'Score'
      render: (fruit) => fruit.score
      sortValue: (fruit) => fruit.score
      //////// inside sortable table ///////
      header: () => <th>Score</th>
    }
*/
