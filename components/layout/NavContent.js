import React, { useContext, useRef, useEffect } from "react";
import NavContext from "../../context/nav-context";
import { Container } from "@material-ui/core";
import LicenseToCarry from "../LicenseToCarry";
import PrivateLessons from "../PrivateLessons";
import Contact from "../Contact";

const NavContent = ({ headerShowHeight }) => {
  const { dispatch } = useContext(NavContext);

  // Set up section refs
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  // sets up listeners to handle setting section positions and active tabs
  useEffect(() => {
    let sections = [];
    let activeSection = -1;
    let headerVisible = false;

    // Calculate outerHeight
    const outerHeight = el => {
      const componentEl = el.childNodes[0]; // component is first child of ref div
      const height = componentEl.offsetHeight;
      const { marginTop, marginBottom } = window.getComputedStyle(componentEl);
      return height + parseInt(marginTop) + parseInt(marginBottom);
    };

    // On resize - update sections data
    const handleResize = () => {
      sections = [
        {
          top: section1.current.offsetTop,
          height: outerHeight(section1.current)
        },
        {
          top: section2.current.offsetTop,
          height: outerHeight(section2.current)
        },
        {
          top: section3.current.offsetTop,
          height: outerHeight(section3.current)
        }
      ];
      dispatch({ type: "UPDATE_SECTIONS", newData: sections });
    };

    // On scroll - check active tab
    const handleScroll = () => {
      const offset = 400;
      let newActive = -1;

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

      // Check for active sections
      sections.forEach((section, index) => {
        if (section) {
          // TODO - get view height and calc 50% or more?
          const belowTop = window.scrollY > section.top - offset;
          const aboveBottom =
            window.scrollY < section.top + section.height - offset;
          if (belowTop && aboveBottom) {
            newActive = index;
          }
        }
      });
      // Update active section on change
      if (newActive !== activeSection) {
        dispatch({ type: "UPDATE_ACTIVE", newActive });
        activeSection = newActive;
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
  // TODO - calculate this based on view height?
  headerShowHeight: 300
};

export default NavContent;
