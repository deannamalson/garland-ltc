import React, { useContext, useRef, useEffect } from "react";
import { Container } from "@material-ui/core";
import NavContext from "../../context/nav-context";
import { getSectionOuterHeight, getSectionInView } from "../../utils/helpers";
import LicenseToCarry from "../LicenseToCarry";
import PrivateLessons from "../PrivateLessons";
import Contact from "../Contact";

const NavContent = ({ headerShowHeight, scrollOffset }) => {
  const { dispatch } = useContext(NavContext);

  // Set up section refs
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  // sets up listeners to handle setting section positions and active tabs
  useEffect(() => {
    let sections = [];
    let currentActive = -1;
    let headerVisible = false;

    // On resize - update sections data
    const handleResize = () => {
      sections = [
        {
          top: section1.current.offsetTop,
          height: getSectionOuterHeight(section1.current)
        },
        {
          top: section2.current.offsetTop,
          height: getSectionOuterHeight(section2.current)
        },
        {
          top: section3.current.offsetTop,
          height: getSectionOuterHeight(section3.current)
        }
      ];
      dispatch({ type: "UPDATE_SECTIONS", newData: sections });
    };

    // On scroll - check active tab
    const handleScroll = () => {
      // Check for header scroll in
      if (window.scrollY > headerShowHeight) {
        if (!headerVisible) {
          dispatch({ type: "SHOW_HEADER" });
          headerVisible = true;
        }
      } else {
        if (headerVisible) {
          dispatch({ type: "HIDE_HEADER" });
          headerVisible = false;
        }
      }

      // Check for active section change
      const newActive = getSectionInView(sections, scrollOffset);
      if (newActive !== currentActive) {
        dispatch({ type: "UPDATE_ACTIVE", newActive });
        currentActive = newActive;
      }
    };

    // Initialize sections and scroll (e.g. on page load)
    handleResize();
    handleScroll();

    // Setup listeners
    window.addEventListener("resize", handleResize);
    document.addEventListener("scroll", handleScroll);

    // Remove listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <div ref={section1}>
        <LicenseToCarry />
      </div>
      <div ref={section2}>
        <PrivateLessons />
      </div>
      <div ref={section3}>
        <Contact />
      </div>
    </Container>
  );
};

NavContent.defaultProps = {
  // TODO - calculate both based on view height?
  headerShowHeight: 300,
  scrollOffset: 400
};

export default NavContent;
