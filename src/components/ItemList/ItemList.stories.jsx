import React from "react";
import ItemList from "./ItemList";

export default {
  title: "Components/ItemList",
  component: ItemList,
};

const Template = (args) => <ItemList {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    { id: 1, name: "Tomatoes", value: 5.0 },
    { id: 2, name: "Basil", value: 2.5 },
    { id: 3, name: "Mozzarella", value: 9.99 },
  ],
};
