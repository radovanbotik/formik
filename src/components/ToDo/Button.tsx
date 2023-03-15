import React from "react";

const Button = ({ isSubmiting }) => {
  const isSubmitting = Boolean(isSubmiting);
  return (
    <div className="form-control mt-6">
      <button type="submit" disabled={isSubmiting} className={`btn btn-primary ${isSubmiting && "loading"}`}>
        submit
      </button>
    </div>
  );
};

export default Button;
