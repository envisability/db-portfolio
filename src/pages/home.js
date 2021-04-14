import React, { useContext, useEffect } from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Goal from "../components/goal";
import ExternalPortfolio from "../components/externalPortfolio";
import Bio from "../components/bio";
import { ThemeContext } from "../StateProvider/appStateProvider";

function Home(props) {
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(
    () =>
      setTheme((prevState) => ({
        ...prevState,
        isFloating: true,
      })),
    []
  );

  return (
    <React.Fragment>
      {/*  Push the footer to the bottom of the page */}
      <Hero />
      <Goal />
      <Gallery />
      {/*<Services />*/}
      <Bio />
      <ExternalPortfolio />
    </React.Fragment>
  );
}

export default Home;
