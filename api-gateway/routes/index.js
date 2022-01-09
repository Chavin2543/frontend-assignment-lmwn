const express = require("express");
const router = express.Router();
const axios = require("axios");

router.all("/trips", (req, res) => {
  let keyword = req.query.keyword;
  var result = [];
  axios.get("http://localhost:9000/trips/").then((response) => {
    if (keyword) {
      for (var index = 0; index < response.data.length; index++) {
        if (
          response.data[index].title.includes(keyword) ||
          response.data[index].description.includes(keyword) ||
          response.data[index].tags.includes(keyword)
        ) {
          result.push(response.data[index]);
        }
      }
      res.send(result);
    } else {
      res.send(response.data);
    }
  });
});

module.exports = router;
