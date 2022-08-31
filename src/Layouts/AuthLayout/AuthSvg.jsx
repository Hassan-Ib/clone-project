import React from "react";
import BusinessSvg from "../../assets/images/Business deal-amico.svg";
import { Box } from "@mui/material";
import styled from "styled-components";

const AuthSvg = () => {
  return (
    <AuthSvg.Wrapper>
      <Box
        component="img"
        src={BusinessSvg}
        sx={{
          display: "block",
          maxWidth: "100%",
          //   width: "100%",
          height: "auto",
          objectFit: "contain ",
          objectPosition: "center",
        }}
        alt="Business deal"
      />
      <Box
        component={"p"}
        sx={{
          maxWidth: "350px",
          fontFamily: "Black sans",
          mt: "1rem",
        }}
        fontSize={{ sm: "20px", md: "24px" }}
        textAlign={"center"}>
        One platform that caters for all your business
      </Box>
    </AuthSvg.Wrapper>
  );
};

export default AuthSvg;

AuthSvg.Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
