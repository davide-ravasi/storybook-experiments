import React from "react";
import Rating from "./Rating";

export default {
  title: "Example/Rating",
  component: Rating,
};

const Template = (args) => <Rating {...args} />;

export const Default = Template.bind({});

Default.args = {
  number: 5,
};
