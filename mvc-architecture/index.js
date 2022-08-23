const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

const usersRouter = require("./routes/users.route");
const productsRouter = require("./routes/products.route");

app.use(express.urlencoded({ extended: true }));
// CORS must use when fetch this API from any different origin. (example: if this server is used with any React application, that time this CORS must be used! Otherwise error shows, blocked this PORT/origin in frontend React app...)
app.use(cors());
app.use(usersRouter);
app.use(productsRouter);

// Initial GET Request
app.get("/", (req, res) => {
  res.send("MVC Architecture Application!");
});

// 404 bad request page handling middleware
app.use((req, res, next) => {
  res.status(404).send("404 bad request!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
