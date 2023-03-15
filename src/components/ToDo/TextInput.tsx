import { useField } from "formik";
import React from "react";
import ErrorMessage from "./ErrorMessage";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const errorStyles = meta.touched && meta.error && "border-2 border-solid border-red-500 shake";

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} className={`${errorStyles}`} />
      {meta.touched && meta.error && <ErrorMessage message={meta.error} />}
    </>
  );
};

export default TextInput;
