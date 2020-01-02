import React, { useReducer } from "react";
import Head from "next/head";
import NavContext from "../context/nav-context";
import navReducer from "../reducers/nav";

import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import NavContent from "../components/layout/NavContent";
import Footer from "../components/layout/Footer";
import { Box } from "@material-ui/core";

const Home = () => {
  // Setup reducer
  const [state, dispatch] = useReducer(navReducer, {
    active: -1,
    sections: [],
    showHeader: false
  });

  return (
    <Box>
      <Head>
        <title>Garland CHL</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <NavContext.Provider value={{ state, dispatch }}>
        <Header />
        <Hero />
        <NavContent />
        <Footer />
      </NavContext.Provider>
    </Box>
  );
};

export default Home;
