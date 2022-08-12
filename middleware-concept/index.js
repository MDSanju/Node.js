const express = require("express");
const app = express();
const PORT = 5000;

const middleware = (req, res, next) => {
  console.log("Middleware Should Call!");
  req.currentTime = new Date(Date.now());
  next();
};

// It is using the middleware for all http methods
app.use(middleware);

// Error handling middleware (404 not found route)
// app.use((req, res, next) => {
//   res.send("<h2>404 bad url request!</h2>");
// });

// Another errors handling middleware
app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  console.log("Middleware Did Call for Home! " + req.currentTime);
  res.send("Middleware Concepts Home Page... " + req.currentTime);
});

app.get("/about", (req, res) => {
  console.log("Middleware Did Call for About! " + req.currentTime);
  res.send("Middleware Concepts About Page... " + req.currentTime);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
