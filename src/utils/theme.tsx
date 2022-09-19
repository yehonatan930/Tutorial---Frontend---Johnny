import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#CC444B", // vermilion
      dark: "#ffffff", // white
      light: "#ffffff", // white
      contrastText: "#ffffff", // white
    },
    secondary: {
      main: "#f50057",
      contrastText: "#4e3434",
    },
    text: { secondary: "#E08F93" }, // pink
  },
  typography: {
    fontFamily: "'Abril Fatface', 'cursive'",
  },
});

export { defaultTheme };
