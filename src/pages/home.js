import React from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Goal from "../components/goal";
import ExternalPortfolio from "../components/externalPortfolio";

function Home(props) {
  return (
    <React.Fragment>
      {/*  Push the footer to the bottom of the page */}
      <Hero />
      <Goal />
      <Gallery />
      {/*<Services />*/}
      <ExternalPortfolio />
    </React.Fragment>
  );
}

export default Home;
