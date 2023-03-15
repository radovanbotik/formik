import React from "react";
import Input from "./Input";
import { useFormik } from "formik";
import Button from "./Button";

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "First name is required!";
  } else if (values.firstname.length > 15) {
    errors.firstname = "Must be 15 characters or less.";
  }

  if (!values.lastname) {
    errors.lastname = "Last name is required!";
  } else if (values.lastname.length > 15) {
    errors.lastname = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address!";
  }
  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    validate,
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={formik.handleSubmit}>
      <Input
        onChange={formik.handleChange}
        value={formik.values.firstname}
        name={"firstname"}
        onBlur={formik.handleBlur}
      />
      {formik.touched.firstname && formik.errors.firstname && <p>{formik.errors.firstname}</p>}
      <Input
        onChange={formik.handleChange}
        value={formik.values.lastname}
        name={"lastname"}
        onBlur={formik.handleBlur}
      />
      {formik.touched.lastname && formik.errors.lastname && <p>{formik.errors.lastname}</p>}
      <Input onChange={formik.handleChange} value={formik.values.email} name={"email"} onBlur={formik.handleBlur} />
      {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
      <Button />
    </form>
  );
};

export default Form;
