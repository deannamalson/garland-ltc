import React from "react";
import Head from "next/head";

import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import LicenseToCarry from "../components/LicenseToCarry";
import PrivateLessons from "../components/PrivateLessons";
import Contact from "../components/Contact";
import Footer from "../components/layout/Footer";
import { Box, Container } from "@material-ui/core";

const Home = () => (
  <Box>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Hero />
    <Container>
      <LicenseToCarry />
      <PrivateLessons />
      <Contact />
    </Container>
    <Footer />
  </Box>
);

export default Home;
