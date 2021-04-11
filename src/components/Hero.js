import React, { useRef, useEffect, useState } from "react";
import { jarallax } from "jarallax";

import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  // Reference the Jarallax DOM element
  const jlxRef = useRef(null);
  // Set the initial data params for the jarallax plugin and then set the state
  const jlxDataBlock = {
    uid: 1,
    options: {
      src: heroBg,
      speed: 0.6,
    },
  };
  // const [jlxDataBlock, setBlocks] = useState(initialJlxBlock);
  useEffect(() => {
    jarallax(jlxRef.current, jlxDataBlock.options);
    console.log("useffect:", jlxDataBlock.options);
  });

  return (
    <section
      className="  hero jarallax d-flex align-items-stretch"
      ref={jlxRef}
    >
      <span className="bg-overlay opacity-60"></span>
      <div className="container d-flex flex-column justify-content-between mt-5 py-3">
        <div className="d-flex flex-column justify-content-between h-100 mt-4 mt-md-5 pt-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 text-center">
              <h1 className="display-1 mb-4 pb-md-3 text-light">
                Golden Ratio Painting Project
              </h1>
              <p className="lead text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                laoreet magna eget suscipit luctus. Donec sit amet orci a felis
                volutpat aliquam in sed mauris. Nam molestie iaculis urna, eu
                tempus est bibendum ut.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 text-center">
              <a
                href="#section-goal"
                data-scroll=""
                className="font-size-sm font-weight-bold text-light text-decoration-none"
              >
                <i className="cxi-arrow-down h4 mt-n1 mr-2 mb-0 text-light align-middle"></i>
                View project
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={jlxDataBlock.options.src} alt="" className="jarallax-img" />
    </section>
  );
}
