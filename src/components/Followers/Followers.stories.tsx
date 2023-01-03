import React from "react";
import Followers from "./Followers";

export default {
  title: "Components/Followers",
  component: Followers,
};

const Template = (args) => <Followers {...args} />;

export const Default = Template.bind({});

Default.args = {};
