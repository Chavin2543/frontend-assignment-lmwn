import React from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import classes from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  let firstTagList = [];
  const navigate = useNavigate();
  let extraPhoto = [];
  let descriptionShort = "";
  let lastTag = props.result.tags[props.result.tags.length - 1];

  const handleTagInput = (item) => {
    props.onClick(item);
    props.setSearchText(item);
    navigate(`/trips?keyword=${item}`);
  };

  for (
    var indexPhoto = 1;
    indexPhoto < props.result.photos.length;
    indexPhoto++
  ) {
    extraPhoto.push(props.result.photos[indexPhoto]);
  }

  for (var indexTag = 0; indexTag < props.result.tags.length - 1; indexTag++) {
    firstTagList.push(props.result.tags[indexTag]);
  }

  if (props.result.description.length > 180) {
    descriptionShort = props.result.description.substring(0, 180);
  } else {
    descriptionShort = props.result.description;
  }

  console.log("firstTagList" + firstTagList);
  return (
    <div className={classes.container}>
      <img
        className={classes.coverPhoto}
        alt="cover"
        src={props.result.photos[0]}
      ></img>
      <div className={classes.infoContainer}>
        <div className={classes.title}>
          <a target="_blank" rel="noopener noreferrer" href={props.result.url}>
            {props.result.title}
          </a>
        </div>
        <div className={classes.description}>
          {descriptionShort}
          <span>
            <span>...</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.result.url}
              className={classes.link}
            >
              อ่านต่อ
            </a>
          </span>
        </div>
        <div className={classes.tagContainer}>
          <button className={classes.lastTag}>หมวด:</button>
          {firstTagList.map((item, tagIndex) => (
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
              handleTagInput(lastTag);
            }}
          >
            {" "}
            {lastTag}
          </button>
        </div>
        <div className={classes.carousel}>
          <ImageCarousel photos={extraPhoto} />
        </div>
      </div>
    </div>
  );
};

export default Card;
