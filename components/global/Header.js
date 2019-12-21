import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import Links from "./Links";
import MobileHeader from "./MobileHeader";

const Header = () => (
  <Box color="text.offWhite" bgcolor="background.dark">
    <Container>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={6}>
          <h2>GARLAND LTC</h2>
        </Grid>
        <Grid item xs={6}>
          <Links />
        </Grid>
        {/* <MobileHeader /> */}
      </Grid>
    </Container>
  </Box>
);

export default Header;
