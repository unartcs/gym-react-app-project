import React from "react";
import GalleryData from "../data/GalleryData";

function Gallery() {
  return (
    <div className="gallery-wrapper">
      <div className="gallery-grid-container">
        {GalleryData.map((item) => {
          return (
            <div className="gallery-grid-box">
              <img src={`/imgs/gallery/${item}`} alt="Gym" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
