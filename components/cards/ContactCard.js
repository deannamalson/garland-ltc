import React from "react";
import { makeStyles, Box, Grid, Typography, Icon } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  icon: {
    marginRight: "0.5rem"
  }
}));

const ContactCard = ({ icon, text }) => {
  const classes = useStyles();
  return (
    <Box mt={4} mb={4}>
      <Grid container justify="center" alignItems="center">
        <Icon className={classes.icon} fontSize="large" color="secondary">
          {icon}
        </Icon>
        <Typography variant="h5">{text}</Typography>
      </Grid>
    </Box>
  );
};

export default ContactCard;
