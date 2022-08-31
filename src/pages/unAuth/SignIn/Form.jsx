import { Formik } from "formik";
import { TextField, Stack, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useAuth } from "../../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import AuthServices from "../../../services/auth.services";
import { validationSchema } from "./validationSchema";
import Alert from "../../../components/Alert/Alert";
import useAlert from "../../../hooks/useAlert";

const SignInForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const { setAuth } = useAuth();

  const {
    open: error,
    handleOpen: openError,
    handleClose: closeError,
    message,
  } = useAlert(10000);

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const user = await AuthServices.login({
        email: values.email,
        password: values.password,
      });
      //   console.log("user", user);
      setAuth({ user });
      setSubmitting(false);
      navigate(from, { replace: true });
    } catch (error) {
      const { code } = error.response.data;
      //   console.log("login error", error.response.data);
      setSubmitting(false);
      openError(code);
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
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
              type="email"
              name="email"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
              color="secondary"
              focused
            />
            <TextField
              type="password"
              name="password"
              label="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password && touched.password}
              color="secondary"
              helperText={
                errors.password && touched.password && errors.password
              }
            />
            <LoadingButton
              loading={isSubmitting}
              variant="contained"
              color="secondary"
              sx={{ borderRadius: "1.5rem" }}
              type="submit"
              disabled={isSubmitting}>
              Submit
            </LoadingButton>
          </Stack>
          <Alert
            open={error}
            handleClose={closeError}
            severity="error"
            message={message}
          />
        </Box>
      )}
    </Formik>
  );
};

export default SignInForm;
