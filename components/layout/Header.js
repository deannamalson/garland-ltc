import React, { useState, useEffect } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Box,
  Typography
} from "@material-ui/core";
import NavLinks from "./NavLinks";

const useStyles = makeStyles(() => ({
  navStyles: {
    top: "-70px",
    transition: "top 0.3s"
  },
  show: {
    top: 0
  }
}));

const Header = ({ scrollInHeight }) => {
  const classes = useStyles();
  // Set up state
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // Check if scrolled to designated point
    const handleScroll = () => {
      if (window.scrollY > scrollInHeight) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    // Set up event listener
    document.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar className={`${classes.navStyles} ${showHeader && classes.show}`}>
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h6">GARLAND CHL</Typography>
        </Box>
        <NavLinks />
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  scrollInHeight: 200
};

export default Header;
