import React from "react";
import { Typography } from "@mui/material";

const FormSubText = ({ children }) => {
  return (
    <Typography variant="body1" fontWeight={300}>
      {children}
    </Typography>
  );
};

export default FormSubText;
