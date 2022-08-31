import React from "react";
import AuthLayout from "../../../Layouts/AuthLayout/AuthLayout";
import { Stack, Box, Link } from "@mui/material";
import { FormTextHeader, FormSubText } from "../../../components";

import SignInForm from "./Form";

const SignIn = () => {
  return (
    <AuthLayout>
      <Stack spacing={2} sx={{ padding: "1rem" }}>
        <Box>
          <FormTextHeader>Welcome back</FormTextHeader>
          <FormSubText>
            You can read through and understand the company’s policies and
            information
          </FormSubText>
        </Box>
        <SignInForm />
        <Link
          href="/auth-forget-password"
          color="secondary"
          sx={{ alignSelf: "center" }}>
          Forget Password
        </Link>
      </Stack>
    </AuthLayout>
  );
};

export default SignIn;
