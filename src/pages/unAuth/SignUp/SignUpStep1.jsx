import { Button, TextField, Stack, Box } from "@mui/material";
import { FormTextHeader, FormSubText } from "../../../components";

const SignUpStep1 = ({ formikProps, stepProps }) => {
  const { values, errors, touched, handleChange, handleBlur } = formikProps;
  const { handleNext } = stepProps;

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
        type="email"
        name="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email && touched.email}
        helperText={errors.email && touched.email && errors.email}
      />
      <Button
        sx={{
          borderRadius: "1.5rem",
        }}
        variant="contained"
        disabled={errors.email || !values.email}
        onClick={handleNext}
        color="secondary">
        Proceed
      </Button>
    </Stack>
  );
};

export default SignUpStep1;
