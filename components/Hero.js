import React from "react";
import { Box, Grid } from "@material-ui/core";
import Links from "./global/Links";

const Hero = () => (
  <Grid
    className="hero"
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    <Grid item>
      <h1 className="hero__title">GARLAND LTC</h1>
    </Grid>
    <Grid item>
      <Links />
    </Grid>
  </Grid>
);

export default Hero;
