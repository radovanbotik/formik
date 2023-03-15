import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useField } from "formik";

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const errorStyles = meta.touched && meta.error && "border-2 border-solid border-red-500";

  return (
    <div>
      <label htmlFor={props.name || props.id}>{label}</label>
      <select {...field} {...props} className={`${errorStyles}`} />
      {meta.touched && meta.error && <ErrorMessage message={meta.error} />}
    </div>
  );
};

export default Select;
