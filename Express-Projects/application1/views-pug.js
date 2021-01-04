const express = require("express");
const app = express();

const PORT = 3000;

app.set("view engine", "pug");
app
  .get("/", (req, res) => {
    res.render("index", {
      title: "Express View Engine",
      h1: "Express Application",
      p: " Express Template Engine",
    });
  })
  .listen(PORT);
