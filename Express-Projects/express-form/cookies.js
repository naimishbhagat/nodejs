const express = require("express");
const cookies = require("cookie-parser");
const app = express();
app.use(cookies());
const PORT = process.env.PORT || 3000;
let users = {
  name: "John",
  Age: 28,
};
app.get("/", (req, res) => {
  res.send("Cookies Tutorial");
});
app.get("/setuser", (req, res) => {
  res.cookie("userData", users);
  res.send("User data added to Cookies");
});
app.get("/getuser", (req, res) => {
  res.send(req.cookies.userData);
});

app.get("/logout", (req, res) => {
  res.clearCookie("userData");
  res.send("user logout successfully");
});
app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
