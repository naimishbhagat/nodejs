const express = require("express");
const session = require("express-session");
const app = express();
app.use(
  session({
    secret: "Your secret Key",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  req.session.name = "John";
  return res.send("sesssion set");
});

app.get("/session", (req, res) => {
  let name = req.session.name;
  console.log(req.session);
  res.send(name);
});

app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    console.log("session destroyed");
  });
  res.end("session destroyed");
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
