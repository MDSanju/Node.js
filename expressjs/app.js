const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user", userRouter);

app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res) => {
  res.send("<h1>404 Page Not Found!</h1>");
});

module.exports = app;
