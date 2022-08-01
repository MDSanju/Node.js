const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("<h2>This is Login Page!</h2>");
});

router.get("/contact", (req, res) => {
  res.send("<h2>This is Contact Page!</h2>");
});

module.exports = router;
