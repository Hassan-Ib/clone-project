import React from "react";
import { AuthLayout } from "../../../Layouts";
import { Formik } from "formik";
import { Stack, Box, TextField, Button } from "@mui/material";
import { FormTextHeader, FormSubText } from "../../../components";
const ForgetPassword = () => {
  return (
    <AuthLayout>
      <Stack spacing={2} sx={{ padding: "1rem" }}>
        <Box>
          <FormTextHeader>Reset Password</FormTextHeader>
          <FormSubText>
            You can read through and understand the company’s policies and
            information
          </FormSubText>
        </Box>
        <ForgetPasswordForm />
      </Stack>
    </AuthLayout>
  );
};

export default ForgetPassword;

const ForgetPasswordForm = () => {
  return (
    <Formik
      initialValues={{ password: "", passwordConfirm: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.password) {
          errors.password = "Required";
        }

        if (!values.passwordConfirm) {
          errors.passwordConfirm = "please confirm your password";
        } else if (values.password !== values.passwordConfirm) {
          errors.passwordConfirm = "password does not match";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              type="password"
              name="password"
              label="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password && touched.password}
              helperText={
                errors.password && touched.password && errors.password
              }
            />
            <TextField
              type="password"
              name="passwordConfirm"
              label="Password Confirm"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirm}
              error={errors.passwordConfirm && touched.passwordConfirm}
              helperText={
                errors.passwordConfirm &&
                touched.passwordConfirm &&
                errors.passwordConfirm
              }
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: "1.5rem" }}
              type="submit"
              disabled={isSubmitting}>
              Submit
            </Button>
          </Stack>
        </Box>
      )}
    </Formik>
  );
};
