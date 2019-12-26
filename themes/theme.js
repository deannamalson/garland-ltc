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

export default theme;
