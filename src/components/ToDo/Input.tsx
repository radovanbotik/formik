import React from "react";

const Input = ({ onChange, value, name, onBlur }) => {
  return <input type="text" name={name} value={value} onChange={onChange} onBlur={onBlur} />;
};

export default Input;
