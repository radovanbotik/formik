import { useField } from "formik";
import React from "react";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error && <p>{meta.error}</p>}
    </>
  );
};

export default TextInput;
