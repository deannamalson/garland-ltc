import React from "react";
import { makeStyles, Box, Typography, Grid, Link } from "@material-ui/core";
import PromoCode from "./PromoCode";
import LazyBackground from "../vendors/LazyBackground";
import { CTALink } from "../elements/Links";

const useStyles = makeStyles(theme => ({
  bannerImg: {
    background: `linear-gradient(
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.75)
    ),
    url('/static/lawshield_pic.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
}));

const LawShieldCard = () => {
  const classes = useStyles();
  return (
    <Box
      bgcolor="white"
      color="primary.light"
      boxShadow={1}
      borderTop={5}
      borderColor="secondary.main"
    >
      <Grid container direction="row">
        {/* Background image and title */}
        <Grid container item md={6}>
          <LazyBackground
            backgroundImg="/static/lawshield_pic.jpg"
            gradient={`linear-gradient(
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.75)
          )`}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              minHeight={200}
              height={1}
              width={1}
              p={2}
              color="white"
            >
              <Typography variant="h3">Protect Your Rights</Typography>
              <Typography variant="h5" gutterBottom={true}>
                Save on legal counsel with Texas Lawshield
              </Typography>
            </Box>
          </LazyBackground>
        </Grid>
        {/* Text */}
        <Grid item md={6}>
          <Box p={2}>
            {/* <Typography>
            In the event you are required to defend yourself, a family member, or
            anyone else, we strongly recommend that you make arrangements to have
            immediate access to legal counsel. We have been working with Texas
            Lawshield for many years now and have come to trust and depend on them.
            </Typography> */}
            <Typography gutterBottom={true}>
              Founded by lawyers who are also Texas License to Carry
              instructors, Texas Lawshield offers several programs for
              individuals with and without License To Carry permits. At a cost
              of only $10.95 a month, all of your legal fees are covered for as
              long as you stay in the program.
            </Typography>
            <Typography gutterBottom={true}>
              Lawyers that specialize in self-defense law may charge $800 -
              $1000 / hr. An unfortunate incident could cost thousands of
              dollars in legal fees - and/or many years of incarceration. You
              can't afford not to have the best lawyers available in your
              corner.
            </Typography>

            {/* Promo box */}
            <Box align="center" m={3}>
              <Typography align="center" gutterBottom={true}>
                To qualify for available specials or offerings, use our promo
                code:
              </Typography>
              <PromoCode />
            </Box>
            <Typography align="center" variant="h6">
              <Link
                href="https://www.uslawshield.com/"
                rel="noreferrer"
                target="_blank"
                align="center"
                underline="always"
              >
                Sign up with Texas Lawshield
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LawShieldCard;
