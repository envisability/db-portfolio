import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../logo.svg";

export default function Header(): JSX.Element {
  return (
    <Navbar
      sticky={"top"}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="cs-header navbar navbar-expand-md navbar-dark navbar-sticky navbar-floating"
    >
      <Navbar.Brand href="#home">
        <a className="navbar-brand order-md-1 mr-md-5 mr-0 pr-lg-2" href="/">
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
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
