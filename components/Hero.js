import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import NavLinks from "./layout/NavLinks";

const useStyles = makeStyles(() => ({
  hero: {
    background: `linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.9)
      ),
      url("/static/hero.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.hero}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width={1}
      height="85vh"
      p={2}
      color="white"
      fontWeight="fontWeightBold"
    >
      <Typography variant="h1">GARLAND CHL</Typography>
      <NavLinks />
    </Box>
  );
};

export default Hero;
