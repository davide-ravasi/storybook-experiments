import React from "react";
import TextInput from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
  // argTypes: {
  //   type: {
  //     options: ["text", "password", "email", "date"],
  //     control: { type: "select" }
  //   }
  // }
}

const Template = (args) => <TextInput {...args} />

export const Default = Template.bind({});

Default.args = {
  label: "textInput",
  name: "default",
  type: "text",
  placeholder: "insert your name here"
};

export const Password = Template.bind({});

Password.args = {
  label: "password",
  name: "password",
  type: "password",
  placeholder: "insert your password here"
};