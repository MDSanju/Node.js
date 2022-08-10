const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Area calculator application
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

// POST Data from client side
app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;
  res.send(`<h3>Circle_Area: ${area}</h3>`);
});

app.post("/triangle", (req, res) => {
  const { base, height } = req.body;
  const area = 0.5 * base * height;
  res.send(`<h3>Triangle_Area: ${area}</h3>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
