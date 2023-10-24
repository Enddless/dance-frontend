import { createTheme } from "@mui/material/styles";

export const headerTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      light: "#FF0563",
      dark: "#b9b9b9", //hover for button
      contrastText: "#000",
    },
    secondary: {
      main: "#000",
      light: "#FF0563",
      dark: "#FC4D8F",
      contrastText: "#000",
    },
    text: {
      primary: "#000",
    },
  },
  typography: {
    fontSize: 8,
  },
});

export const footerTheme = createTheme({
  palette: {
    primary: {
      main: "#e4e3e3",
      light: "#FF0563",
      dark: "#FC4D8F",
      contrastText: "#000",
    },
    text: {
      primary: "#fff",
    },
  },
  typography: {
    fontSize: 6,
  },
});
