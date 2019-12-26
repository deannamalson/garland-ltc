import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import InfoCard from "./InfoCard";
import DetailsList from "../elements/DetailsList";

// Component for Step One content
const StepOneContent = () => {
  const list = [
    "laws relating to the use of force and deadly force",
    "handgun use and safety",
    "non-violent dispute resolution",
    "proper storage practices for handguns"
  ];
  return (
    <Box>
      <Typography gutterBottom={true}>
        The State of Texas requires all applicants for a License To Carry (LTC)
        to take a 4-6 hour class.
      </Typography>
      <Typography>This course includes:</Typography>
      <DetailsList list={list} />
      <Typography gutterBottom={true}>
        These requirements can be fulfilled in an online course (cost: $49) or
        in a class with a qualified instructor.
      </Typography>
      <Typography variant="p">
        (We do not have any classroom sessions scheduled at this time. Special
        arrangements available upon request.)
      </Typography>
    </Box>
  );
};

const CardsList = () => {
  const cardsData = [
    {
      isComponent: true,
      title: "Step 1",
      text: <StepOneContent />,
      action: {
        href: "https://www.handgunlicense.com/ref/56/",
        linkText: "Take the Online Course"
      }
    },
    {
      title: "Step 2",
      text: (
        <Box>
          <Typography gutterBottom={true}>
            After completing the online class, students are required to take an
            additional 1-2 hours of range training and a shooting proficiency.
            Please contact us to schedule the training and proficiency.
          </Typography>
          <Typography>
            Cost: $40 per person (range fees not included)
          </Typography>
        </Box>
      ),
      action: {
        href: "#",
        linkText: "Schedule Training & Proficiency",
        anchor: true
      }
    },
    {
      title: "Step 3",
      text: (
        <Box>
          <Typography gutterBottom={true}>
            Apply for your LTC at the State of Texas License To Carry website.
          </Typography>
          <Typography>
            Note: You can apply for your LTC before taking the required class
            and proficiency, but your application will not be processed until
            they receive the classroom completion forms.
          </Typography>
        </Box>
      ),
      action: {
        href: "https://txapps.texas.gov/txapp/txdps/ltc/",
        linkText: "Apply for your License to Carry"
      }
    }
  ];
  return (
    <Box mt={4} mb={4}>
      <Grid container spacing={1} direction="row">
        {cardsData.map(cardData => (
          <Grid container item md={4} key={cardData.title}>
            <InfoCard {...cardData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardsList;
