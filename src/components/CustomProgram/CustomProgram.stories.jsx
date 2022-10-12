import React from "react";
import CustomProgram from "./CustomProgram";

export default {
  title: "Components/CustomProgram",
  component: CustomProgram,
};

const Template = (args) => <CustomProgram {...args} />;

export const Default = Template.bind({});

Default.args = {};
