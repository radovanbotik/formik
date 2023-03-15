import React from "react";
import { useField } from "formik";

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const isError = meta.touched && meta.error;
  const isValid = Boolean(meta.value);

  return (
    <div className={`form-control w-full max-w-xs`}>
      <label htmlFor={props.name || props.id} className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        {...field}
        {...props}
        className={`select  ${isValid ? "select-success" : "select-bordered"} ${
          isError ? "select-error" : "select-bordered"
        }`}
      />
      {isError && (
        <label className="label">
          <span className="label-text-alt">{meta.error}</span>
        </label>
      )}
    </div>
  );
};

export default Select;
