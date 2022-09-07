import React from "react";

type InputType = "text" | "password" | "email" | "date";

export interface TextInputProps {
  label: string;
  name: string;
  type: InputType;
  placeholder: string;
}

const TextInput = ({ label, name, type, placeholder }: TextInputProps) => {
  return (
    <>
      <label htmlFor={name} >{label}</label>
      <input name={name} type={type} placeholder={placeholder} />
    </>
  )
}

export default TextInput;