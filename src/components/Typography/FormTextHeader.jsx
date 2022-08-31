import React from "react";
import { Typography } from "@mui/material";

const FormTextHeader = ({ children }) => {
  return (
    <Typography
      variant="h4"
      componen="h1"
      fontWeight={700}
      marginBottom=".5rem">
      {children}
    </Typography>
  );
};

export default FormTextHeader;
