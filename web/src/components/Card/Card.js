import React from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import classes from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ item, onClick, setSearchText }) => {
  const navigate = useNavigate();

  const managePhoto = (photoData) => {
    let extraPhoto = [];
    for (let i = 1; i < photoData.length; i++) {
      extraPhoto.push(photoData[i]);
    }

    return extraPhoto;
  };

  const manageTag = (tagData) => {
    let firstTagList = [];
    for (let j = 0; j < tagData.length - 1; j++) {
      firstTagList.push(tagData[j]);
    }
    return firstTagList;
  };

  const manageDescription = (descriptionData) => {
    let descriptionShort = "";
    if (item.description.length > 180) {
      descriptionShort = descriptionData.substring(0, 180);
    } else {
      descriptionShort = descriptionData;
    }
    return descriptionShort;
  };

  const handleTagInput = (item) => {
    onClick(item);
    setSearchText(item);
    navigate(`/trips?keyword=${item}`);
  };

  return (
    <div className={classes.container}>
      <img
        className={classes.coverPhoto}
        alt="cover"
        src={item.photos[0]}
      ></img>
      <div className={classes.infoContainer}>
        <div className={classes.title}>
          <a target="_blank" rel="noopener noreferrer" href={item.url}>
            {item.title}
          </a>
        </div>
        <div className={classes.description}>
          {manageDescription(item.description)}
          <span>
            <span>...</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.url}
              className={classes.link}
            >
              อ่านต่อ
            </a>
          </span>
        </div>
        <div className={classes.tagContainer}>
          <button className={classes.lastTag}>หมวด:</button>
          {manageTag(item.tags).map((item, tagIndex) => (
            <button
              className={classes.tag}
              key={tagIndex}
              onClick={() => {
                handleTagInput(item);
              }}
            >
              {item}
            </button>
          ))}
          <button className={classes.lastTag}>และ</button>
          <button
            className={classes.tag}
            onClick={() => {
              handleTagInput(item.tags);
            }}
          >
            {" "}
            {item.tags[item.tags.length - 1]}
          </button>
        </div>
        <div className={classes.carousel}>
          <ImageCarousel photos={managePhoto(item.photos)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
