import React, { ReactNode, ComponentPropsWithoutRef } from "react";
import { useField } from "formik";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  type: string;
  children: ReactNode;
}

const Checkbox = ({ children, ...props }: InputProps) => {
  const [field, meta] = useField({ ...props, type: props.type });

  const isError = meta.touched && meta.error;
  const isValid = Boolean(meta.value);

  return (
    <div className="form-control">
      <label className={`label cursor-pointer`}>
        <span className="label-text">{children}</span>
        <input
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
