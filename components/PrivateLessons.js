import React from "react";
import { Box, Typography } from "@material-ui/core";
import DetailsList from "./elements/DetailsList";

const LicenseToCarry = () => {
  const classroomTopics = [
    "learning how the firearm works",
    "review safety rules involving the use of firearms",
    "ammunition and the basics of marksmanship"
  ];
  return (
    <Box mt={8} mb={20}>
      <Typography variant="h2" color="primary" gutterBottom={true}>
        Private Lessons
      </Typography>
      <Typography gutterBottom={true}>
        Private lessons are also available for the basics of using a rifle,
        pistol, or shotgun. Lessons are approximately 2 hours (1 hour in a
        classroom, plus 1 hour on the range gaining hands-on experience).
      </Typography>
      <Typography>In the classroom, we'll cover the following:</Typography>
      <DetailsList list={classroomTopics} />
      <Typography>
        For more information or to schedule an appointment, please contact John
        Coulton by phone or email (listed below).
      </Typography>
    </Box>
  );
};

export default LicenseToCarry;
