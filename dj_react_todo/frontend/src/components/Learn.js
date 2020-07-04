import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

function Learn({ errors, touched, values, isSubmitting }) {
  return (
    <Form>
      <Field
        type="text"
        name="email"
        placeholder="Enter Email"
        className="form-control m-2"
      />
      <div className="text-danger ml-2">
        {touched.email && errors.email && errors.email}
      </div>
      <Field
        type="password"
        name="password"
        placeholder="Enter Password"
        className="form-control m-2"
      />
      <div className="text-danger ml-2">
        {touched.password && errors.password && errors.password}
      </div>
      <label>
        <Field
          type="checkbox"
          name="newsletter"
          checked={values.newsletter}
          className="form-check-input m-2"
        />
        Subscribe our newsletter
      </label>
      <Field
        name="plan"
        component="select"
        className="form-select form-select-md m-2"
      >
        <option value="">----</option>
        <option value="free">Free</option>
        <option value="premium">Premium</option>
      </Field>
      <div className="text-danger ml-2">
        {touched.plan && errors.plan && errors.plan}
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="btn btn-outline-primary m-2"
      >
        Submit
      </button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues({ email, password, newsletter }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || false,
    };
  },
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(10).required(),
    plan: yup.string().required(),
  }),
  handleSubmit(values, { resetForm, setSubmitting, setErrors }) {
    setTimeout(() => {
      if (values.email == "ahmaat19@gmail.com") {
        setErrors({
          email: `${values.email}: is already exist in the database`,
        });
      } else {
        console.log(values);
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  },
})(Learn);
