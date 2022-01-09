const express = require("express");
const app = express();
const PORT = 3030;
const routes = require("./routes");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/", routes);
app.listen(PORT, () => {
  console.log("gateway is alive at" + PORT);
});
