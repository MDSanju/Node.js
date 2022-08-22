const express = require("express");
const router = express.Router();

const {
  getUser,
  saveUsers,
  getAllUsers,
} = require("../controllers/users.controller");

router.get("/addUser", getUser);

router.post("/users", saveUsers);

router.get("/users", getAllUsers);

module.exports = router;
