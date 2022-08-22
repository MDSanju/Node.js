const express = require("express");
const app = express();
const PORT = 5000;

const usersRouter = require("./routes/users.route");
const productsRouter = require("./routes/products.route");

app.use(express.urlencoded({ extended: true }));
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
