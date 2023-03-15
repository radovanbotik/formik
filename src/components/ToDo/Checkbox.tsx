import React from "react";
import { useField } from "formik";
import ErrorMessage from "./ErrorMessage";

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  const isError = meta.touched && meta.error;
  const isValid = Boolean(meta.value);

  return (
    <div className="form-control">
      <label className={`label cursor-pointer`}>
        <span className="label-text">{children}</span>
        <input
          type="checkbox"
          {...field}
          {...props}
          className={`checkbox ${isError && "checkbox-error"} ${isValid && "checkbox-success"}`}
        />
      </label>
      {isError && (
        <label className="label">
          <span className="label-text-alt">{meta.error}</span>
        </label>
      )}
    </div>
  );
};

export default Checkbox;
