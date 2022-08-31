import React from "react";
import bizEdgeLogo from "../../assets/logos/Bizedge Logo.svg";
import { Box, Stack } from "@mui/material";
import AuthSvg from "./AuthSvg";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";

// # ui components
// -- logo
// -- container
// ---- side display
// ------- svg
// ------- text
// ------- stepper indicator
// ---- main display
// ------- form
// -------- input
// -------- button

const AuthLayoutWithStepper = ({ stepper, steps, children }) => {
  const theme = useTheme();
  const { activeStep, handleNext, handleBack } = useStepeper(steps.length);

  return (
    <AuthLayoutWithStepper.Wrapper sx={{ px: 3 }}>
      <section className="logo__container">
        <img className="logo" src={bizEdgeLogo} alt="BizEdge logo" />
      </section>
      <Stack
        spacing={2}
        direction={{ md: "row-reverse" }}
        // divider={<Divider orientation="vertical" flexItem />}
        justifyContent="center"
        alignItems="center">
        <Box sx={{ padding: "4" }}>
          {stepper({ handleNext, handleBack, activeStep })}
        </Box>
        <Box
          flexGrow={1}
          sx={{
            flexBasis: "50%",
          }}
          borderRight={{ md: `1px solid ${theme.palette.secondary.light4}` }}>
          <AuthSvg />
          <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
            {steps.map((step, index) => {
              console.log(activeStep === index);
              return (
                <Box
                  key={index}
                  sx={{
                    width: "20px",
                    height: "2px",
                    backgroundColor:
                      activeStep === index
                        ? theme.palette.secondary.main
                        : theme.palette.secondary.light4,
                  }}></Box>
              );
            })}
          </Stack>
        </Box>
      </Stack>
    </AuthLayoutWithStepper.Wrapper>
  );
};

export default AuthLayoutWithStepper;

AuthLayoutWithStepper.Wrapper = styled(Box)`
  .logo__container {
    margin-bottom: 4rem;
    padding-top: 2rem;
    img {
      height: 40px;
    }
  }
`;

const useStepeper = (steps) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (stepError) => {
    if (!stepError) {
      throw new Error("Step is not filled");
    }
    if (activeStep === steps.length - 1) return;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep < 1) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return { activeStep, handleNext, handleBack };
};

AuthLayoutWithStepper.Step = ({ children, activeStep, index }) => {
  return activeStep === index ? children : null;
};
