import { createMuiTheme, lighten } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#424242",
      light: lighten("#424242", 0.07)
    },
    secondary: {
      main: "#2196f3"
    }
  }
});

// Typography overrides
theme.typography.h1 = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
  fontSize: "3rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "4rem"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "6rem"
  }
};

theme.typography.h2 = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
  fontSize: "3rem",
  fontSize: "2.75rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "3.75rem"
  }
};

theme.typography.h3 = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 400,
  fontSize: "3rem",
  fontSize: "2.25rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem"
  }
};

export default theme;
