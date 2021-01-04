const express = require("express");

const app = express();
const data = {
  id: 1,
  name: "India",
};
app.get("/", (req, res) => {
  res.send("Welcome to my home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to my about page");
});

app.get("/weather", (req, res) => {
  //res.json(data);
  res.sendFile("/static/index.html");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
