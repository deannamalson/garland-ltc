import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import NavContext from "../../context/nav-context";
import { NavLink } from "../elements/Links";

const NavLinks = () => {
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

  const { state } = useContext(NavContext);

  // Scroll to clicked section
  const handleClick = id => {
    window.scrollTo({
      top: state.sections[id].top - 75,
      behavior: "smooth"
    });
  };

  return (
    <Box>
      {navData.map(data => (
        <NavLink
          key={data.id}
          handleClick={handleClick}
          isActive={state.active === data.id}
          {...data}
        />
      ))}
    </Box>
  );
};

export default NavLinks;
