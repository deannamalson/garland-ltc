import React from "react";
import { useMediaQuery, makeStyles, Box, Typography } from "@material-ui/core";
import LazyBackground from "./vendors/LazyBackground";
import NavLinks from "./layout/NavLinks";

const useStyles = makeStyles(theme => ({
  hero: {
    [theme.breakpoints.up("md")]: {
      height: "85vh",
      marginTop: 0
    }
  }
}));

const Hero = () => {
  const classes = useStyles();
  const desktopDevice = useMediaQuery(theme => theme.breakpoints.up("md"));
  return (
    <LazyBackground
      backgroundImg="/static/hero.jpg"
      gradient={`linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.9)
    )`}
    >
      <Box
        className={classes.hero}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width={1}
        height="60vh"
        mt="70px"
        p={2}
        color="white"
        fontWeight="fontWeightBold"
      >
        <Typography variant="h1">GARLAND CHL</Typography>
        {desktopDevice && <NavLinks />}
      </Box>
    </LazyBackground>
  );
};

export default Hero;
