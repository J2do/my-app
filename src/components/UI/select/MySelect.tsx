import React from "react";

interface SelectProps {
  options: any;
  defaultValue: any;
  value: any;
  onChange: any;
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
      {options.map(({ option }: any) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
