import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import Portfolio from "./pages/portfolio";

const App = () => {
  return (
    <main>
      <Router>
        <div className="db-page-wrapper">
          <Header theme="dark" />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
