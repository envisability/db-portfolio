import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

export default function Header(props): JSX.Element {
  // Implement sticky
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(props.theme);
  const scrollHandler = () => {
    const winOffset = window.scrollY;
    if (winOffset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  //define the classes for the header
  let stuck = "";
  let navbarTheme = "";
  // if (props.theme == "dark") {
  //   navbarTheme = "navbar-dark";
  // } else {
  //   navbarTheme = "navbar-light";
  // }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  });

  if (scrolled) {
    stuck = "navbar-stuck";
    //theme = "navbar-light";
  } else {
    stuck = "";
  }

  return (
    <header
      className={`cs-header navbar navbar-expand-md ${theme} navbar-sticky navbar-floating ${stuck}`}
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
