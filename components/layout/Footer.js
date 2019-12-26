import React from "react";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer} p={3}>
      <Grid container justify="center">
        <Typography>Garland CHL</Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
