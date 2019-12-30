import React from "react";
import { makeStyles, Box, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  link: {
    display: "inline-block",
    position: "relative",
    padding: "10px 15px",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    cursor: "pointer",
    "&::after": {
      display: "block",
      position: "absolute",
      bottom: 0,
      width: 0,
      left: "50%",
      height: "2px",
      background: theme.palette.secondary.main,
      transition: "width 0.3s ease 0s, left 0.3s ease 0s",
      content: "''"
    },
    "&:hover::after": {
      left: 0,
      width: "100%"
    }
  },
  active: {
    "&::after": {
      display: "block",
      position: "absolute",
      bottom: 0,
      width: "100%",
      left: 0,
      height: "2px",
      background: theme.palette.secondary.main,
      content: "''"
    }
  }
}));

const NavLink = ({ text, id, isActive, handleClick }) => {
  const classes = useStyles();
  return (
    <Link
      onClick={() => handleClick(id)}
      className={`${classes.link} ${isActive ? classes.active : ""}`}
      underline="none"
    >
      <Box color="white">{text}</Box>
    </Link>
  );
};

export { NavLink };
