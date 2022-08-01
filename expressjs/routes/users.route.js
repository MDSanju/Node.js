const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.cookie("name", "Sanju");
  res.cookie("age", "26");
  //   Cookie Clear
  //   res.clearCookie("name");
  res.append("_id", "8875156fgKGO4KgPQ598");
  res.end();
});

router.get("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");

  // Redirect to Login Route!
  //   res.redirect("/api/user/login");
});

router.get("/contact", (req, res) => {
  res.send("<h2>This is Contact Page!</h2>");
});

module.exports = router;
