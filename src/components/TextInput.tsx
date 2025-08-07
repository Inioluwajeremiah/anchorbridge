import React from "react";
import { IconType } from "react-icons";

type TextInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: IconType;
  type?: string;
  name?: string;
  required?: boolean;
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder = "",
  value,
  onChange,
  icon: Icon,
  type = "text",
  name,
  required = false,
}) => {
  return (
    <div className="w-full mb-4">
      <label className="uppercase block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex items-center border border-text-color-dark-two rounded-md px-3 py-2 bg-white shadow-sm focus-within:ring-1 focus-within:ring-black">
        <input
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full border-none outline-none bg-transparent text-sm text-gray-800 placeholder-gray-400 py-2"
        />
        <Icon className="text-black mr-2" size={20} />
      </div>
      {required ? (
        <span className="h-4 text-text-color-dark text-base mt-2">
          This field is required
        </span>
      ) : (
        <span className="h-4 mt-2">This field is required</span>
      )}
    </div>
  );
};

export default TextInput;
