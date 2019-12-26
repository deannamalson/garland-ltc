import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@material-ui/core";
import NavLinks from "./NavLinks";

const Header = () => (
  <AppBar>
    <Toolbar>
      <Box flexGrow={1}>
        <Typography variant="h6">GARLAND CHL</Typography>
      </Box>
      <NavLinks />
    </Toolbar>
  </AppBar>
);

export default Header;
