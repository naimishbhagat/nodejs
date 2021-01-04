const express = require("express");
const router = express.Router();

const credentials = {
  email: "admin@gmail.com",
  password: "admin123",
};

router.post("/login", (req, res) => {
  if (
    req.body.email == credentials.email &&
    req.body.password == credentials.password
  ) {
    req.session.user = req.body.email;
    res.redirect("/dashboard");
  } else {
    res.end("Invalid Username");
  }
});

module.exports = router;
