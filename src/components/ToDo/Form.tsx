import React from "react";
import Input from "./Input";
import { useFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().max(15, "Must be 15 characters or less").required("This field is required."),
      lastname: Yup.string().max(15, "Must be 15 characters or less").required("This field is requried."),
      email: Yup.string().email("Invalid email address.").required("This field is required."),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={formik.handleSubmit}>
      <Input formikprops={formik.getFieldProps("firstname")} id={"firstname"} />
      {formik.touched.firstname && formik.errors.firstname && <p>{formik.errors.firstname}</p>}
      <Input formikprops={formik.getFieldProps("lastname")} id={"lastname"} />
      {formik.touched.lastname && formik.errors.lastname && <p>{formik.errors.lastname}</p>}
      <Input formikprops={formik.getFieldProps("email")} id={"email"} />
      {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
      <Button />
    </form>
  );
};

export default Form;
