// src/components/CarouselItem.js
import React from "react";

const CarouselItem = ({ src, text }) => {
  return (
    <div className="carousel__item">
      <img src={src} alt={text} style={{ width: "100%" }} />
      <p>{text}</p>
    </div>
  );
};

export default CarouselItem;
