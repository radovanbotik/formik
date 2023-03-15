import React from "react";
import { useField } from "formik";
import ErrorMessage from "./ErrorMessage";

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  const errorStyles = meta.touched && meta.error && "border-2 border-solid border-red-500";
  return (
    <div>
      <label className={`${errorStyles}`}>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error && <ErrorMessage message={meta.error} />}
    </div>
  );
};

export default Checkbox;
