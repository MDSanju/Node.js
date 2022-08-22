const path = require("path");

const users = require("../models/users.model");

exports.getUser = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.saveUsers = (req, res) => {
  const name = req.body.userName;
  const age = Number(req.body.age);
  const user = {
    name,
    age,
  };
  users.push(user);
  res.status(200).json({
    success: "Successfully Data Added!",
    users,
  });
};

exports.getAllUsers = async (req, res) => {
  const cursor = users;
  const allUsers = await cursor;
  res.send(allUsers);
};
