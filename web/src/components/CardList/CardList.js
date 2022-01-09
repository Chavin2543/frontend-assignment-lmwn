import React from "react";
import Card from "../Card/Card";
import classes from "./CardList.module.css";

const CardLists = ({ items, setSearchText, onClick }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className={classes.container}>
          <Card item={item} setSearchText={setSearchText} onClick={onClick} />
        </div>
      ))}
    </div>
  );
};

export default CardLists;
