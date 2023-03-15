import React from "react";
import { Formik, Form } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Select from "./Select";

const Formular = () => {
  return (
    <Formik
      initialValues={{ firstname: "", lastname: "", email: "", TOS: false, haircolor: "" }}
      validationSchema={Yup.object({
        firstname: Yup.string().max(15, "Must be 15 characters or less").required("This field is required."),
        lastname: Yup.string().max(15, "Must be 15 characters or less").required("This field is required."),
        email: Yup.string().email("Invalid email address.").required("This field is required."),
        TOS: Yup.boolean().isTrue("You have to agree to our TOS in order to continue."),
        haircolor: Yup.string()
          .oneOf(["blonde", "red", "blue"], "Please select from provided haircolors.")
          .required("This field is required."),
      })}
      onSubmit={(values, actions) => {
        actions.resetForm();
        actions.setSubmitting(false);
      }}
    >
      {formik => (
        <Form className="flex flex-col w-md">
          <TextInput label="First Name" name="firstname" type="text" />
          <TextInput label="Last Name" name="lastname" type="text" />
          <TextInput label="Email" name="email" type="email" />
          <Checkbox name="TOS">I accept TOS</Checkbox>
          <Select label="Select desired hair color" name="haircolor">
            <option value="" disabled>
              Please select a haircolor
            </option>
            <option value="blonde">Blonde</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </Select>
          <Button isSubmiting={formik.isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default Formular;
