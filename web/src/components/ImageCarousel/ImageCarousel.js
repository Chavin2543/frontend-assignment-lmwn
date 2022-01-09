import React from "react";
import classes from "./ImageCarousel.module.css";
const ImageCarousel = ({ photos }) => {
  return (
    <div className={classes.container}>
      {photos.map((item, index) => (
        <img className={classes.img} key={index} alt={index} src={item}></img>
      ))}
    </div>
  );
};

export default ImageCarousel;
