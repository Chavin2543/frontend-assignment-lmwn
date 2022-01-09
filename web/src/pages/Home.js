import React from "react";
import { useState } from "react";
import { axiosInstance } from "../config/axios";
import Searchbar from "../components/SearchBar/Searchbar";
import CardLists from "../components/CardList/CardList";
import classes from "./Home.module.css";

const Home = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");

  const keywordSearch = async (searchText) => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: `/trips?keyword=${searchText}`,
      });

      setSearchResult(response.data);
      setSearchText(searchText);
    } catch (err) {
      console.log("error", err.message);
    }
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.title}>เที่ยวไหนดี</div>
        <div className={classes.searchbar}>
          <Searchbar
            searchText={searchText}
            setSearchText={setSearchText}
            onSearch={keywordSearch}
            result={searchResult}
          />
        </div>
      </div>
      <CardLists
        setSearchText={setSearchText}
        onClick={keywordSearch}
        items={searchResult}
      ></CardLists>
    </div>
  );
};

export default Home;
