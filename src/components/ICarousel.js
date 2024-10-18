
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ICarousel.css";
import CarouselItem from "./CarouselItem";
import iceland from './images/iceland.jpg';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const ICarousel = () => {
  const items = [
    { id: 1, src: iceland, text: "Image 1 Description" },
    { id: 2, src: iceland, text: "Image 2 Description" },
    { id: 3, src: iceland, text: "Image 3 Description" },
    { id: 4, src: iceland, text: "Image 4 Description" }
  ];

  return (
    <div className="carousel"> 
      <h1>Image Carousel with Text</h1>
          <Carousel responsive={responsive}>
            {items.map((item) => (
              <CarouselItem key={item.id} src={item.src} text={item.text} />
            ))}
          </Carousel>
    </div>
  );
};

export default ICarousel;

