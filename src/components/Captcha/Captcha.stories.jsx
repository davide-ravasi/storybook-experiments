import React from "react";
import Captcha from "./Captcha";

export default {
  title: "Components/Captcha",
  component: Captcha,
};

const Template = (args) => <Captcha {...args} />;

export const Default = Template.bind({});

Default.args = {};
