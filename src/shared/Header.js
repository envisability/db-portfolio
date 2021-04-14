import React, { useEffect, useState, useContext } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { ThemeContext } from "../StateProvider/appStateProvider";

export default function Header(props): JSX.Element {
  // Implement sticky
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext);

  let floatingClass = "";
  useEffect(() => {
    // Add floating element if needed
    if (theme.currentTheme.isFloating) {
    }
  });

  // Stick the header upon scrolling
  const scrollHandler = () => {
    const winOffset = window.scrollY;
    if (winOffset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleTheme = () => {
    if (theme.currentTheme === "light") {
      setTheme.currentTheme = "dark";
    } else {
      setTheme.currentTheme = "light";
    }
  };

  useEffect(() => {
    // Handle scroll stuck
    window.addEventListener("scroll", scrollHandler);
    // Handle theme color changes based on page input
    toggleTheme();
  });

  //define the classes for the header
  let stuck = "";

  if (scrolled) {
    stuck = "navbar-stuck";
  } else {
    stuck = "";
  }

  return (
    <header
      className={`cs-header navbar navbar-expand-md ${theme.currentTheme}   
      ${theme.isFloating ? theme.floatingClass : "x"} navbar-sticky ${stuck}`}
    >
      <div className="container px-0 px-xl-3">
        <Link to="/" className="navbar-brand order-md-1 mr-md-5 mr-0 pr-lg-2">
          <img
            className="navbar-brand-static"
            src={logo}
            alt="david barel logo"
            width="130"
          />
          <img
            className="navbar-brand-floating"
            src={logo}
            alt="david barel logo"
            width="130"
          />
        </Link>

        <nav
          className="collapse navbar-collapse order-md-2"
          id="navbarCollapse1"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" activeClassName="active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-link"
                activeClassName="active"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" activeClassName="active">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
