import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import ContactCard from "./cards/ContactCard";

const Contact = () => {
  const contactData = [
    {
      icon: "phone",
      text: "(469) 233-3943"
    },
    {
      icon: "email",
      text: "jxcoulton@verizon.net"
    }
  ];
  return (
    <Box mt={8} mb={40}>
      <Typography variant="h2" color="primary" gutterBottom={true}>
        Contact
      </Typography>
      <Grid container spacing={3}>
        {contactData.map(data => (
          <Grid
            container
            item
            sm={6}
            justify="center"
            alignItems="center"
            key={data.text}
          >
            <ContactCard {...data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
