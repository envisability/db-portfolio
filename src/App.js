import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./shared/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./shared/Footer";
import Services from "./components/Services";
import Goal from "./components/goal";
import Contact from "./components/contact";

const App = () => {
  return (
    <main>
      {/*  Push the footer to the bottom of the page */}
      <div className="db-page-wrapper">
        <Header />
        <Hero />
        <Goal />
        <Gallery />
        {/*<Services />*/}
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default App;
