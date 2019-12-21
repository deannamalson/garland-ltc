import React from "react";
import Head from "next/head";

import Header from "../components/global/Header";
import Hero from "../components/Hero";
import LicenseToCarry from "../components/LicenseToCarry";
import OurMission from "../components/OurMission";
import Contact from "../components/Contact";
import Footer from "../components/global/Footer";
import { Box, Container } from "@material-ui/core";

const Home = () => (
  <Box>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* <Header /> */}
    <Hero />
    <Container>
      <OurMission />
      <LicenseToCarry />
      <Contact />
    </Container>
    <Footer />
  </Box>
);

export default Home;
