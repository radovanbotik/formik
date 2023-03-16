import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting: boolean;
  type: "submit";
  children: string;
}

const Button = ({ isSubmitting, type, children }: ButtonProps) => {
  return (
    <div className="form-control mt-6">
      <button type={type} disabled={isSubmitting} className={`btn-primary btn ${isSubmitting && "loading"}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
