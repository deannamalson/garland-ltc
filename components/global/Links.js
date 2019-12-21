import React from "react";
import { Grid } from "@material-ui/core";

const Links = () => (
  <Grid container justify="center" spacing={2}>
    <Grid item>
      <a className="link">OUR MISSION</a>
    </Grid>
    <Grid item>
      <a className="link">LICENSE TO CARRY</a>
    </Grid>
    <Grid item>
      <a className="link">CONTACT</a>
    </Grid>
  </Grid>
);

export default Links;
