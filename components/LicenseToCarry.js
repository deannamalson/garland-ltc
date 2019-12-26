import React from "react";
import CardsList from "./cards/CardsList";
import LawShieldCard from "./cards/LawShieldCard";
import { Box, Typography } from "@material-ui/core";

const LicenseToCarry = () => (
  <Box mt={8}>
    {/* Header */}
    <Typography variant="h2" color="primary" gutterBottom={true}>
      License to Carry
    </Typography>

    {/* Mission statement */}
    <Typography variant="h5">
      <Box color="primary.light">
        Our goal is to provide the finest education available - with a
        common-sense approach to making decisions when protecting yourself and
        your loved ones. You will not find a more qualified instructor anywhere
        in Texas.
      </Box>
    </Typography>

    {/* Information */}
    <CardsList />

    {/* Law shield*/}
    <LawShieldCard />
  </Box>
);

export default LicenseToCarry;
