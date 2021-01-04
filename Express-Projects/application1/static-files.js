const express = require("express");
const path = require("path");
const app = express();
const publicpath = path.resolve(__dirname, "public");
app.use(publicpath, express.static("static"));

// app.use(express.static("images"));
// app.use(express.static("files"));
app.get("/", (req, res) => {
  res.send("Static Files");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
