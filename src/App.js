import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import Portfolio from "./pages/portfolio";
import AppStateProvider from "./StateProvider/appStateProvider";

const App = () => {
  return (
    <main>
      <div className="db-page-wrapper">
        <Router>
          <AppStateProvider>
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
          </AppStateProvider>
        </Router>
      </div>
      <Footer />
    </main>
  );
};

export default App;
