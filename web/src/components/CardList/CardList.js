import React from "react";
import Card from "../Card/Card";
import classes from "./CardList.module.css";

const CardLists = (props) => {
  let data = [];
  if (props.result) {
    data = props.result || [];
  }

  if (data !== []) {
    return (
      <div>
        {data.map((item, index) => (
          <div className={classes.container}>
            <Card
              setSearchText={props.setSearchText}
              onClick={props.onClick}
              key={index}
              result={item}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return <div>พิมค้นหาแล้วกด enter ได้เลย !</div>;
  }
};

export default CardLists;
