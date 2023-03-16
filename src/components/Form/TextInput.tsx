import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  name: string;
}

const TextInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);

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
        className={`input-bordered input ${isValid && "input-success"} ${
          isError && "shake input-error"
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
