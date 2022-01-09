import React from "react";
import classes from "./Searchbar.module.css";
import { useNavigate } from "react-router-dom";
const Searchbar = ({ searchText, onSearch, setSearchText }) => {
  const navigate = useNavigate();
  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
      navigate(`/trips?keyword=${searchText}`);
    }
  };

  return (
    <div className={classes.container}>
      <input
        className={classes.searchbar}
        placeholder="หาที่เที่ยวแล้วไปกัน"
        onChange={handleInput}
        onKeyPress={handleEnterKeyPressed}
        value={searchText}
      ></input>
    </div>
  );
};
export default Searchbar;
