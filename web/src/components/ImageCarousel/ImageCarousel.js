import React from "react";
import classes from "./ImageCarousel.module.css";

const ImageCarousel = ({ photos }) => {
  const createImageCarousel = (photos) => {
    let extraPhoto = [];
    for (let i = 1; i < photos.length; i++) {
      extraPhoto.push(photos[i]);
    }

    return extraPhoto.map((item, index) => (
      <img className={classes.img} key={index} alt={index} src={item}></img>
    ));
  };

  return <div className={classes.container}>{createImageCarousel(photos)}</div>;
};

export default ImageCarousel;
