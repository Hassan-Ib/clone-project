import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7372",
      white: "#FFFFFF",
    },
    secondary: {
      main: "#2898A4",
      light1: "#31B9C7",
      light2: "#E0EEF0",
      light3: "#2898A4",
      light4: "#E1E1E1",
    },
    dark: {
      main: "#000C11",
      black: "#000000",
    },
    backgrounds: {
      main: "#FFFFFF",
      grey: "#F9F9F9",
      gray: "#F4F4F4",
    },
  },
  typography: {
    fontFamily: "Black Sans",
  },
  overrides: {
    "@global": {
      "font-family": "Black Sans",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 16,
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        color: "secondary",
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "submit", color: "secondary.main" },
          style: {
            borderRadius: "1.5rem",
            backgroundColor: "#2898A4",
          },
        },
      ],
    },
  },
});

export default theme;
