import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Subscribe from "../components/subscribe";
import { Facebook, Instagram, Twitter, Linkedin } from "react-bootstrap-icons";
import App from "../App";
import ExternalPortfolio from "../components/externalPortfolio";

export default function Footer() {
  return (
    <footer className="cs-footer pt-3 bg-dark">
      <div className="container py-lg-5 py-4">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-12 order-md-1 order-2 mb-md-0 mb-4">
            <h3 className="h6 mb-3 text-uppercase text-light">
              Want to hire me?
            </h3>
            <ul className="nav nav-light flex-column">
              <li className="nav-item mb-2">
                <a
                  href="tel:(405)555-0128"
                  className="nav-link p-0 font-weight-normal"
                >
                  <span className="text-light">Call: </span>
                  (888) 555-6666
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="mailto:hello@example.com"
                  className="nav-link p-0 font-weight-normal"
                >
                  <span className="text-light">Email: </span>
                  me@DavidBarel.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-12 order-md-2 order-1 offset-lg-1 mb-md-0 mb-4">
            <h3 className="h6 mb-3 text-uppercase text-light">Quick links</h3>

            <ul className="nav nav-light flex-md-column flex-sm-row flex-column">
              <li className="nav-item mb-2">
                <a
                  href="/"
                  className="nav-link mr-md-0 mr-sm-4 p-0 font-weight-normal"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="portfolio.html"
                  className="nav-link mr-md-0 mr-sm-4 p-0 font-weight-normal"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="about.html"
                  className="nav-link mr-md-0 mr-sm-4 p-0 font-weight-normal"
                >
                  About us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="blog.html"
                  className="nav-link mr-md-0 mr-sm-4 p-0 font-weight-normal"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/contact"
                  className="nav-link mr-md-0 mr-sm-4 p-0 font-weight-normal"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 order-md-3 order-sm-4 order-3 offset-lg-1 mb-md-0 mb-4">
            <h3 className="h6 mb-3 text-uppercase text-light">Follow me</h3>
            <a
              href="#"
              className="social-btn sb-solid sb-round sb-light mr-2 mb-2 mt-md-0 mt-sm-1"
            >
              <i className="cxi-facebook"></i>
            </a>
            <a
              href="#"
              className="social-btn sb-solid sb-round sb-light mr-2 mb-2 mt-md-0 mt-sm-1"
            >
              <i className="cxi-instagram"></i>
            </a>
            <a
              href="#"
              className="social-btn sb-solid sb-round sb-light mr-2 mb-2 mt-md-0 mt-sm-1"
            >
              <i className="cxi-twitter"></i>
            </a>
            <a
              href="#"
              className="social-btn sb-solid sb-round sb-light mr-2 mb-2 mt-md-0 mt-sm-1"
            >
              <i className="cxi-behance"></i>
            </a>
            <a
              href="#"
              className="social-btn sb-solid sb-round sb-light mb-2 mt-md-0 mt-sm-1"
            >
              <i className="cxi-dribbble"></i>
            </a>
          </div>
          <div className="col-md-3 col-sm-6 order-md-4 order-sm-3 order-4 mb-md-0 mb-4">
            <h3 className="h6 mb-3 text-uppercase text-light">Subscribe</h3>
            <Subscribe />
          </div>
        </div>
      </div>
    </footer>
  );
}
