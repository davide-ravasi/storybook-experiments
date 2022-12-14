import React from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({
  options: [
    {
      label: "red",
      value: "red",
    },
    {
      label: "green",
      value: "green",
    },
    {
      label: "blue",
      value: "blue",
    },
    {
      label: "white",
      value: "white",
    },
  ],
});

Default.args = {};
