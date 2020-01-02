import React, { useContext } from "react";
import NavContext from "../../context/nav-context";
import {
  makeStyles,
  useMediaQuery,
  AppBar,
  Toolbar,
  Box,
  Typography
} from "@material-ui/core";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const useStyles = makeStyles(theme => ({
  navStyles: {
    minHeight: "70px",
    justifyContent: "center"
  },
  [theme.breakpoints.up("md")]: {
    navStyles: {
      top: "-70px",
      transition: "top 0.3s"
    },
    show: {
      top: 0
    }
  }
}));

const Header = () => {
  const { state } = useContext(NavContext);
  const classes = useStyles();
  const desktopDevice = useMediaQuery(theme => theme.breakpoints.up("md"));
  return (
    <AppBar
      className={`${classes.navStyles} ${state.showHeader ? classes.show : ""}`}
    >
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h6">GARLAND CHL</Typography>
        </Box>
        {desktopDevice ? <NavLinks /> : <MobileMenu />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
