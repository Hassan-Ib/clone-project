import React from "react";
import { IconButton, Box } from "@mui/material";
// import Typography from "@mui/material/Typography";
import { AuthLayoutWithStepper } from "../../../Layouts";
import { Formik } from "formik";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SignUpStep1 from "./SignUpStep1";
import SignUpStep2 from "./SignUpStep2";
import { validationSchema } from "./validationSchema";

const steps = [SignUpStep1, SignUpStep2];

const SignUp = () => {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <AuthLayoutWithStepper
      steps={steps}
      stepper={({ handleNext, handleBack, activeStep }) => {
        return (
          <Formik
            initialValues={{ email: "", password: "", passwordConfirm: "" }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(formikProps) => {
              return (
                <Box component={"form"} px={2}>
                  {activeStep > 0 ? (
                    <IconButton onClick={handleBack} aria-label="back step">
                      <ArrowBackIcon />
                    </IconButton>
                  ) : null}
                  {steps.map((Step, index) => {
                    return (
                      <AuthLayoutWithStepper.Step
                        activeStep={activeStep}
                        key={index}
                        index={index}>
                        <Step
                          formikProps={formikProps}
                          stepProps={{ handleNext, handleBack }}
                        />
                      </AuthLayoutWithStepper.Step>
                    );
                  })}
                </Box>
              );
            }}
          </Formik>
        );
      }}
    />
  );
};

export default SignUp;
