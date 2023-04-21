import React from "react";
import GalleryData from "../data/GalleryData";
import { motion } from "framer-motion";

function Gallery() {
  return (
    <div className="gallery-wrapper">
      <motion.div
        animate={{ opacity: 100 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="gallery-grid-container">
          {GalleryData.map((item) => {
            return (
              <div className="gallery-grid-box">
                <img src={`${process.env.PUBLIC_URL}/imgs/gallery/${item}`} alt="Gym" />
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Gallery;
