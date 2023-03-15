import { useField } from "formik";
import React from "react";
import ErrorMessage from "./ErrorMessage";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const errorStyles = meta.touched && meta.error && "border-2 border-solid border-red-500 shake";

  const isError = meta.touched && meta.error;
  const isValid = Boolean(meta.value);

  return (
    <div className="form-control w-full max-w-xs">
      <label htmlFor={props.id || props.name} className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...field}
        {...props}
        className={`input input-bordered ${isValid && "input-success"} ${
          isError && "input-error shake"
        } w-full max-w-xs`}
      />
      {isError && (
        <label className="label">
          <span className="label-text-alt">{meta.error}</span>
        </label>
      )}
    </div>
  );
};

export default TextInput;
