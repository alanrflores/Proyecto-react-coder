import React from "react";

const Input = ({
  className,
  type,
  name,
  value,
  onChange,
  placeholder,
  errors,
  inputclassname,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        errors={errors}
        inputclassname= {inputclassname}
      />
    </div>
  );
};

export default Input;
