import React from "react";
import Head from "next/head";
import "../styles/styles.scss";

import Header from "../components/global/Header";
import Hero from "../components/Hero";
import LicenseToCarry from "../components/LicenseToCarry";
import OurMission from "../components/OurMission";
import Contact from "../components/Contact";
import Footer from "../components/global/Footer";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Hero />
    <OurMission />
    <LicenseToCarry />
    <Contact />
    <Footer />
  </div>
);

export default Home;
