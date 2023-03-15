import React from "react";

const Button = ({ isSubmiting }) => {
  const isSubmitting = Boolean(isSubmiting);
  return (
    <button type="submit" disabled={isSubmiting} className={`btn ${isSubmiting && "loading"} mt-4`}>
      submit
    </button>
  );
};

export default Button;
