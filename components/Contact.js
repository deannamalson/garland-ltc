import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import ContactCard from "./cards/ContactCard";

const Contact = () => {
  const contactData = [
    {
      icon: "phone",
      text1: "(469) ",
      text2: "233-3943",
    },
    {
      icon: "email",
      text1: "jxcoulton",
      text2: "@verizon.net",
    },
  ];
  return (
    <Box mt={8} mb={40}>
      <Typography variant="h2" gutterBottom={true}>
        Contact
      </Typography>
      <Typography gutterBottom={true}>
        John Coulton has been a Texas Concealed Carry / License to Carry
        instructor since the program's conception, teaching and qualifying
        thousands of students to date. As an avid hunter and gun enthusiast, he
        enjoys sharing his decades of experience and enthusiasm for the sport of
        shooting with others.
      </Typography>
      <Typography gutterBottom={true}>
        Personal protection with a firearm should be undertaken with a full
        understanding of the laws governing the use of force and deadly force.
        Therefore, we believe a proper education can only be delivered by the
        most qualified instructors available. John Coulton is a certified NRA
        instructor for rifles, pistol, shotguns - and, most importantly,
        personal protection and home firearms safety.
      </Typography>
      <Box mt={3}>
        <Typography gutterBottom={true}>
          For appointments or questions, please contact John Coulton via phone
          or email:
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {contactData.map((data) => (
          <Grid container item md={6} key={data.icon}>
            <ContactCard {...data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
