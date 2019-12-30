import React, { useContext } from "react";
import NavContext from "../../context/nav-context";
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

const Header = () => {
  const classes = useStyles();
  const { state } = useContext(NavContext);
  // Set up state
  // const [showHeader, setShowHeader] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > scrollInHeight) {
  //       setShowHeader(true);
  //     } else {
  //       setShowHeader(false);
  //     }
  //   };

  //   // Set up event listener
  //   document.addEventListener("scroll", handleScroll);

  //   // clean up
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <AppBar
      className={`${classes.navStyles} ${state.showHeader ? classes.show : ""}`}
    >
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h6">GARLAND CHL</Typography>
        </Box>
        <NavLinks />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
