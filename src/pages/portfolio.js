import React from "react";

function Portfolio(props) {
  const items = [
    {
      title: "Abstract Modern Graphic 3D Render",
      category: "branding",
      img: {
        src: "images/portfolio/DSC_0774.jpg",
        alt: "",
      },
    },
    {
      title: "Abstract Modern Graphic 3D Render",
      category: "video-production",
      img: {
        src: "images/portfolio/DSC_0802.jpg",
        alt: "",
      },
    },
    {
      title: "Abstract Modern Graphic 3D Render",
      category: "web-design",
      img: {
        src: "images/portfolio/DSC_0779.jpg",
        alt: "",
      },
    },
    {
      title: "Abstract Modern Graphic 3D Render",
      category: "mobile-app",
      img: {
        src: "images/portfolio/DSC_0782.jpg",
        alt: "",
      },
    },
  ];
  return (
    <section className=" portfolio-grid py-lg-6 py-5 bg-secondary bg-size-contain bg-position-top-left bg-no-repeat">
      <div className="container mt-5 py-3 pb-lg-0 pt-md-5 pt-lg-4">
        <div data-filter-grid>
          <h3 className="h6 mb-2 text-uppercase">My Work</h3>
          <div className="row align-items-end mb-lg-5 mb-4">
            <div className="col-lg">
              <h2 className="h1 mb-lg-0 mb-md-3 mb-2">Portfolio</h2>
            </div>
            <div className="col-lg-9">
              <div
                className="mb-lg-0 mb-4 pb-lg-0 pb-2"
                data-simplebar
                data-simplebar-auto-hide="false"
              >
                <ul className="nav flex-lg-wrap flex-nowrap justify-content-lg-end mx-lg-0 mx-n3 mt-1 text-nowrap">
                  <li className="nav-item mb-0">
                    <span className="nav-link active" data-filter="all">
                      All
                      <sup className="ml-1">12</sup>
                    </span>
                  </li>
                  <li className="nav-item mb-0">
                    <span className="nav-link" data-filter=".mobile-apps">
                      Mobile Apps
                      <sup className="ml-1">2</sup>
                    </span>
                  </li>
                  <li className="nav-item mb-0">
                    <span className="nav-link" data-filter=".web-design">
                      Web Design
                      <sup className="ml-1">4</sup>
                    </span>
                  </li>
                  <li className="nav-item mb-0">
                    <span className="nav-link" data-filter=".branding">
                      Branding
                      <sup className="ml-1">5</sup>
                    </span>
                  </li>
                  <li className="nav-item mb-0">
                    <span className="nav-link" data-filter=".video-production">
                      Video Production
                      <sup className="ml-1">1</sup>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            {items.map((item, index) => (
              <div
                key={index}
                className={`cs-grid-item ${item.category} col-md-8 pb-lg-2 mb-4 `}
              >
                <a
                  className="cs-portfolio-card-scale"
                  href="portfolio-single-v1.html"
                >
                  <div className="cs-portfolio-card-img">
                    <img src={item.img.src} alt={item.img.alt} />
                  </div>
                  <div className="cs-portfolio-card-body">
                    <h3 className="cs-portfolio-card-title">{item.title}</h3>
                    <span className="font-size-sm text-muted">
                      {item.category}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-lg-4 text-center">
          <button
            className="btn btn-lg btn-link load-more-btn p-0 text-decoration-none"
            type="button"
          >
            <i className="cxi-arrow-convert mt-n1 mr-3 align-middle"></i>
            Load more
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
