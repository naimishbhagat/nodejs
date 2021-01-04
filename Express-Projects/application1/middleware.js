const express = require("express");
const app = express();

const myLogger = (req, res, next) => {
  console.log("LOGGED");
  next();
};

const requestTime = function (req, res, next) {
  req.reqTime = Date.now();
  next();
};

app.use(myLogger);
app.use(requestTime);
app.get("/", function (req, res) {
  res.send(`Current Time: ${req.reqTime}`);
});

app.listen(3000, () => console.log("Server listening on port 3000"));
