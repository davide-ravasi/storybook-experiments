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
    <div className="mb-4">
      <label className="block text-grey-700 text-sm font-bold mb-2" htmlFor={name} >{label}</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3" name={name} type={type} placeholder={placeholder} />
    </div>
  )
}

export default TextInput;