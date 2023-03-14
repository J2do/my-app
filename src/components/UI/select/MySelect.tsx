import React from "react";

interface IOption {
  value: string;
  name: string;
}

interface SelectProps {
  options: IOption[];
  defaultValue: string;
  value?: string;
  onChange(value: string): void;
}

const MySelect: React.FC<SelectProps> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
