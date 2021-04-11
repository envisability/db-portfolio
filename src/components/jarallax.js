import React, { useRef, useEffect, useState } from "react";
import { jarallax, jarallaxVideo } from "jarallax";

export default function HeroJarallax(props) {
  const jlxElement = useRef(null);
  useEffect(() => {
    jarallax(jlxElement.current, props.options);
    console.log("useeffect:", props.options);
  });
  return (
    <div className={`jarallax`} ref={jlxElement}>
      <span className="bg-overlay opacity-60"></span>
      <img src={props.options.src} alt="" className="jarallax-img" />
    </div>
  );
}
