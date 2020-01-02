import React, { useState } from "react";
import { Box, Icon, Drawer, Typography, Grid } from "@material-ui/core";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <Box display="flex" justify="center" cursor="pointer">
        <Icon onClick={() => setShowMenu(true)} fontSize="large">
          menu
        </Icon>
      </Box>

      <Drawer anchor="top" open={showMenu} onClose={() => setShowMenu(false)}>
        <Box minHeight="70px" p={2}>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography variant="h6" color="secondary">
                GARLAND CHL
              </Typography>
            </Grid>
            <Grid item>
              <Icon onClick={() => setShowMenu(false)} fontSize="large">
                close
              </Icon>
            </Grid>
          </Grid>
        </Box>
        <Box p={3}>
          <NavLinks onSelect={() => setShowMenu(false)} color="black" />
        </Box>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
