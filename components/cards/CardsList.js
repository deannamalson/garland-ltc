import React from "react";
import { Grid } from "@material-ui/core";
import InfoCard from "./InfoCard";

const CardsList = () => {
  const cardsData = [
    {
      title: "Step 1",
      text: `The State of Texas requires all applicants for a License To Carry (LTC) to take a 4-6 hour class.
        This course includes: learning the laws that relate to the use of force and deadly force, handgun use and safety,
        non-violent dispute resolution, and proper storage practices for handguns. These requirements can be fulfilled in
        a classroom setting with a qualified instructor (Currently, we do not have any classroom sessions scheduled but
          we can make special arrangements upon request) or in an online class. The online course is available at
          www.handgunlicense.com/ref/56/ the cost is  $49, upon completion online class students are required
          to take an additional 1-2 hours of range training and a shooting proficiency. After the completion of the online
          class, you will be required to contact us to schedule the additional range training and proficiency at a cost
          of $40 per person (Range fees are not included). Please contact John Coulton at jlcoulton@verizon.net or
          (469) 233-3943.`
    },
    {
      title: "Step 2",
      text: `Apply for your License To Carry (LTC) at The State of Texas License To Carry website
      https://txapps.texas.gov/txapp/txdps/ltc/. You can apply for your LTC before taking the required
      class and proficiency, but your application will not be processed until they received the required
      classroom completion forms.`
    }
  ];
  return (
    <Grid container spacing={3} direction="row" alignItems="flex-start">
      {cardsData.map(cardData => (
        <Grid item md={6} key={cardData.title}>
          <InfoCard {...cardData} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsList;
