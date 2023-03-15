import React from "react";
import { useField } from "formik";

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.name || props.id}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && <p>{meta.error}</p>}
    </div>
  );
};

export default Select;
