import { Button, TextField, Stack, Box } from "@mui/material";
import { FormTextHeader, FormSubText } from "../../../components";

const SignUpStep2 = ({ formikProps }) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
  } = formikProps;
  //   const { handleNext } = stepProps;
  return (
    <Stack spacing={2}>
      <Box>
        <FormTextHeader>Sign up</FormTextHeader>

        <FormSubText>
          You can read through and understand the company’s policies and
          information
        </FormSubText>
      </Box>
      <TextField
        type="password"
        name="password"
        label="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password && touched.password}
        helperText={errors.password && touched.password && errors.password}
      />
      <TextField
        type="password"
        name="passwordConfirm"
        label="PasswordConfirm"
        value={values.passwordConfirm}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.passwordConfirm && touched.passwordConfirm}
        helperText={
          errors.passwordConfirm &&
          touched.passwordConfirm &&
          errors.passwordConfirm
        }
      />
      <Button
        sx={{
          borderRadius: "1.5rem",
        }}
        variant="contained"
        disabled={!!errors.password || !!errors.passwordConfirm || isSubmitting}
        onClick={handleSubmit}
        type="submit"
        color="secondary">
        Proceed
      </Button>
    </Stack>
  );
};

export default SignUpStep2;
