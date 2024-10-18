// src/components/CarouselItem.js
import React from "react";

const CarouselItem = ({ src, text }) => {
  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      <img src={src} alt={text} style={{ width: "100%" }} />
      <p style={{ marginTop: "10px", fontSize: "16px" }}>{text}</p>
    </div>
  );
};

export default CarouselItem;
