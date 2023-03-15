import React from "react";

const Button = ({ isSubmiting }) => {
  const isSubmit = Boolean(isSubmiting);
  return (
    <div className="form-control mt-6">
      <button type="submit" disabled={isSubmit} className={`btn btn-primary ${isSubmit && "loading"}`}>
        submit
      </button>
    </div>
  );
};

export default Button;
