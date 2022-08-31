import React from "react";
import bizEdgeLogo from "../../assets/logos/Bizedge Logo.svg";
import { Box, Stack } from "@mui/material";
import AuthSvg from "./AuthSvg";
import { useTheme, styled } from "@mui/material/styles";
// # ui components
// -- logo
// -- container
// ---- side display
// ------- svg
// ------- text
// ---- main display
// ------- form
// -------- input
// -------- button

const AuthLayout = ({ children }) => {
  const theme = useTheme();
  return (
    <AuthLayout.Wrapper sx={{ px: 3 }}>
      <Box className="logo__container">
        <img className="logo" src={bizEdgeLogo} alt="BizEdge logo" />
      </Box>
      <Stack
        spacing={2}
        direction={{ md: "row-reverse" }}
        // divider={<Divider orientation="vertical" flexItem />}
        alignItems="center">
        <Box flexBasis="50%" px={{ lg: 3 }}>
          {children}
        </Box>
        <Box
          borderRight={{ md: `1px solid ${theme.palette.secondary.light4}` }}
          sx={{
            flexBasis: "50%",
          }}>
          <AuthSvg />
        </Box>
      </Stack>
    </AuthLayout.Wrapper>
  );
};

export default AuthLayout;

AuthLayout.Wrapper = styled(Box)`
  .logo__container {
    margin-bottom: 4rem;
    padding-top: 2rem;
    img {
      height: 40px;
    }
  }
`;
