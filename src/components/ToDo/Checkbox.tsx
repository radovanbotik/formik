import React from "react";
import { useField } from "formik";

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div>
      <label>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error && <p>{meta.error}</p>}
    </div>
  );
};

export default Checkbox;
