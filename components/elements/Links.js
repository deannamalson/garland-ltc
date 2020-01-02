import React from "react";
import { makeStyles, Box, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  link: {
    display: "inline-block",
    position: "relative",
    width: "100%",
    padding: "1rem",
    margin: "0.5rem",
    textDecoration: "none",
    textTransform: "uppercase",
    textAlign: "center",
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
      left: "25%",
      width: "50%"
    }
  },
  active: {
    "&::after": {
      display: "block",
      position: "absolute",
      bottom: 0,
      width: "50%",
      left: "25%",
      height: "2px",
      background: theme.palette.secondary.main,
      content: "''"
    }
  },
  [theme.breakpoints.up("md")]: {
    link: {
      width: "auto",
      padding: "10px 15px",
      margin: 0,
      "&:hover::after": {
        left: 0,
        width: "100%"
      }
    },
    active: {
      "&::after": {
        width: "100%",
        left: 0
      }
    }
  }
}));

const NavLink = ({ text, id, isActive, handleClick, color }) => {
  const classes = useStyles();
  return (
    <Link
      onClick={() => handleClick(id)}
      className={`${classes.link} ${isActive ? classes.active : ""}`}
      underline="none"
    >
      <Box color={color ? color : "white"}>{text}</Box>
    </Link>
  );
};

export { NavLink };
