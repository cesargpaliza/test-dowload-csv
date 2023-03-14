const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/files", express.static("./public"));

app.listen(4000);
console.log("Server on port 4000");
