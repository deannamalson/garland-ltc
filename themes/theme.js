import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ec7a1c",
      dark: "#90462c"
    },
    secondary: {
      main: "#44443b"
    },
    error: {
      main: "#c44747"
    },
    background: {
      default: "#fff",
      dark: "#44443b"
    },
    text: {
      white: "#fff",
      offWhite: "#e6e4e0"
    }
  }
});

export default theme;
