import React from "react";

const Button = ({ isSubmiting }) => {
  return (
    <button type="submit" disabled={isSubmiting}>
      submit
    </button>
  );
};

export default Button;
