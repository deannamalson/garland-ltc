import React from "react";
import { Box } from "@material-ui/core";
import { NavLink } from "../elements/Links";

const NavLinks = () => (
  <Box>
    <NavLink text="License to Carry" />
    <NavLink text="Private Lessons" />
    <NavLink text="Contact" />
  </Box>
);

export default NavLinks;
