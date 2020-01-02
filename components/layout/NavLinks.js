import React, { useContext } from "react";
import { makeStyles, Box } from "@material-ui/core";
import NavContext from "../../context/nav-context";
import { NavLink } from "../elements/Links";

const useStyles = makeStyles(theme => ({
  linksWrapper: {
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    }
  }
}));

const NavLinks = ({ onSelect, color }) => {
  const { state } = useContext(NavContext);
  const classes = useStyles();
  // Note: id will correspond with page section in the state. Order matters!
  const navData = [
    {
      id: 0,
      text: "License to Carry"
    },
    {
      id: 1,
      text: "Private Lessons"
    },
    {
      id: 2,
      text: "Contact"
    }
  ];

  // Scroll to clicked section
  const handleClick = id => {
    // If "onSelect" is provided, call the function
    // For the mobile menu, will tell it to close itself on selection
    if (onSelect) {
      onSelect();
    }
    window.scrollTo({
      top: state.sections[id].top - 75,
      behavior: "smooth"
    });
  };

  return (
    <Box
      className={classes.linksWrapper}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {navData.map(data => (
        <NavLink
          key={data.id}
          handleClick={handleClick}
          isActive={state.active === data.id}
          color={color}
          {...data}
        />
      ))}
    </Box>
  );
};

export default NavLinks;
