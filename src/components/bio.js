import React from "react";

function Bio(props) {
  return (
    <section className="container pt-lg-6 pt-sm-5 pb-lg-5 pb-4">
      <div className="row">
        <div className="col-lg-4 col-sm-5 order-sm-1 order-2">
          <div className="cs-binded-content mb-4">
            <div id="team1" className="cs-binded-item active">
              <img
                className="rounded"
                src="images/profile-pic.png"
                alt="Team member"
              />
            </div>
          </div>
          <a
            href="about.html"
            className="d-lg-none d-inline-block btn-block btn btn-outline-primary btn-pill"
          >
            More about me
          </a>
        </div>
        <div className="col-sm-7 order-sm-2 order-1 mb-sm-0 mb-4 ml-auto">
          <div className="d-flex justify-content-between">
            <div className="mr-3">
              <h3 className="h6 mb-2 text-uppercase">Creative & Innovative</h3>
              <h2 className="h1 mb-lg-5 mb-3 pb-2">Meet the artist</h2>
            </div>
            <div className="d-lg-block d-none">
              <a href="about.html" className="btn btn-outline-primary btn-pill">
                More about me
              </a>
            </div>
          </div>

          <div className="accordion" id="accordionTeam">
            <div className="card">
              <div className="card-header pt-0 pb-2" id="teamHeadingOne">
                <h3 className="accordion-heading h5">
                  <a
                    href="/profile"
                    role="button"
                    data-toggle="collapse"
                    data-binded-content="#team1"
                    aria-expanded="true"
                    aria-controls="teamCollapseOne"
                  >
                    <span className="accordion-indicator mr-3"></span>
                    David Barel
                  </a>
                </h3>
              </div>
              <div
                className="collapse show"
                id="teamCollapseOne"
                aria-labelledby="teamHeadingOne"
                data-parent="#accordionTeam"
              >
                <div className="card-body ml-n2">
                  <h4 className="h6 mb-2 pb-1 font-weight-normal text-muted">
                    A geek with a brash
                  </h4>
                  Eleifend adipiscing lacus nullam malesuada ullamcorper non
                  pharetrainteret velit. Integer pellentesque tortor amet
                  sociis. Nibh ultrices etiam enim.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
