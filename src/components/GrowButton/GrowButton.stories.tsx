import React from "react";
import GrowButton from "./GrowButton";

export default {
  title: "Components/GrowButton",
  component: GrowButton
}

const Template = (args) => <GrowButton {...args} />

export const Default = Template.bind({});

Default.args = { width: 60, height: 20, growingrate: 5 };