import React from "react";
import { Box, Typography } from "@material-ui/core";

const PromoCode = () => (
  <Box
    maxWidth={200}
    width={1}
    bgcolor="white"
    border={2}
    borderColor="secondary.main"
    textAlign="center"
  >
    <Box
      p={1}
      color="white"
      bgcolor="secondary.main"
      textAlign="center"
      fontWeight="fontWeightBold"
    >
      PROMO CODE
    </Box>
    <Typography variant="h5">
      <Box p={1}>GARLANDCHL</Box>
    </Typography>
  </Box>
);

export default PromoCode;
