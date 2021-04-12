import React from "react";

function ExternalPortfolio(props) {
  return (
    <section className="container mb-4 mb-sm-5 mt-3 mt-md-4 mt-lg-0 px-3 py-lg-6 py-5">
      <div className="row justify-content-center px-2 px-sm-0">
        <div className="col-md-3 col-sm-4 col px-2 px-sm-3">
          <h3 className="h6 pb-lg-3 pb-2 text-uppercase text-muted text-center">
            Follow Me
          </h3>
          <a className="d-block" href="#">
            <img
              class="rounded"
              src="images/logo/block-dribbble.svg"
              alt="Dribble"
            />
          </a>
          <a className="mt-sm-4 mt-3 d-block" href="#">
            <img
              class="rounded"
              src="images/logo/block-behance.svg"
              alt="Behance"
            />
          </a>
        </div>
        <div className="divider-vertical d-sm-block d-none offset-sm-1"></div>
        <div className="col-md-3 col-sm-4 col offset-sm-1 px-2 px-sm-3">
          <h3 className="h6 pb-lg-3 pb-2 text-uppercase text-muted text-center">
            Get in touch
          </h3>
          <a className="d-block" href="#">
            <img
              className="rounded"
              src="images/logo/block-upwork.svg"
              alt="Upwork"
            />
          </a>
          <a className="mt-sm-4 mt-3 d-block" href="mailto:hello@example.com">
            <img
              className="rounded"
              src="images/logo/block-email.svg"
              alt="Email"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ExternalPortfolio;
