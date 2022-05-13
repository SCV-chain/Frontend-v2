import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#574CE6",
      dark: "#575CE6",
      light: "#575CE9",
    },
    secondary: {
      main: "#77CDFE",
      dark: " #C193F5",
      light: "#FFE345",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#fff",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Inter",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSize: 14,
    h1: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: "3.4rem",
    },
    h2: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: "2.4rem",
    },
    h3: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "2.0rem",
    },
    h4: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "1.6rem",
    },
    h5: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "1.5rem",
    },
    h6: {
      fontFamily: "Inter",
      fontWeight: 300,
      fontSize: "1.3rem",
    },
    body1: {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "1.4rem",
    },
    button: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "1.4rem",
    },
  },
});

export default theme;