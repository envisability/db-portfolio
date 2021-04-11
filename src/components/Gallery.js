import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const galleryData = [
    {
      id: 1,
      src: "images/gallery/01.png",
      alt: "First slide",
      title: "First slide label",
      interval: 1000,
      description: "ulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: 2,
      src: "images/gallery/02.png",
      alt: "second slide",
      title: "second slide label",
      interval: 500,
      description: "ulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: 3,
      src: "images/gallery/03.png",
      alt: "third slide",
      title: "third slide label",
      interval: 500,
      description: "ulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ];

  return (
    <section className="gallery py-lg-6 pt-5 pb-4">
      <div className="container pt-2 pt-lg-0">
        <h3 className="h6 mb-2 text-uppercase">
          How did I create this project?
        </h3>
        <div className="mb-lg-5 mb-4 d-flex justify-content-between">
          <h2 className="h1 mb-0">Process Gallery</h2>
        </div>
      </div>
      <Carousel>
        {galleryData.map((elem, index) => (
          <Carousel.Item key={index} className="rounded tns-item">
            <img className="d-block w-100" src={elem.src} alt="First slide" />
            <Carousel.Caption className="cs-portfolio-card-body">
              <h3 className="cs-portfolio-card-title">{elem.title}</h3>
              <p className="font-size-sm text-muted">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
