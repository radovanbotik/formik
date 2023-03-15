import React from "react";
import Input from "./Input";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "./Button";
import * as Yup from "yup";

const Formular = () => {
  return (
    <Formik
      initialValues={{ firstname: "", lastname: "", email: "", hair: "blonde" }}
      validationSchema={Yup.object({
        firstname: Yup.string().max(15, "Must be 15 characters or less").required("This field is required."),
        lastname: Yup.string().max(15, "Must be 15 characters or less").required("This field is requried."),
        email: Yup.string().email("Invalid email address.").required("This field is required."),
        hair: Yup.string().required("This field is required."),
      })}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {formik => (
        <Form style={{ display: "flex", flexDirection: "column" }}>
          {/* <Input formikprops={formik.getFieldProps("firstname")} id={"firstname"} /> */}
          {/* {formik.touched.firstname && formik.errors.firstname && <p>{formik.errors.firstname}</p>} */}
          {/* <Input formikprops={formik.getFieldProps("lastname")} id={"lastname"} /> */}
          {/* {formik.touched.lastname && formik.errors.lastname && <p>{formik.errors.lastname}</p>} */}
          {/* <Input formikprops={formik.getFieldProps("email")} id={"email"} /> */}
          {/* {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>} */}
          <label htmlFor="firstname">First Name</label>
          <Field name="firstname" type="text" />
          <ErrorMessage name="firstname" />

          <label htmlFor="lastname">Last Name</label>
          <Field name="lastname" type="text" />
          <ErrorMessage name="lastname" />

          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="hair">Hair</label>
          <Field name="hair" as="select">
            <option value="blonde">Blonde</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </Field>
          <ErrorMessage name="hair" />

          <Button />
        </Form>
      )}
    </Formik>
  );
};

export default Formular;
