const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user", userRouter);

app.use("/", (req, res) => {
  res.send("<h2>This is Home Page!</h2>");
});

app.use((req, res) => {
  res.send("<h1>404 Page Not Found!</h1>");
});

module.exports = app;
