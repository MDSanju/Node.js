const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// How to get access query (parameter/parameters).

// app.get("/", (req, res) => {
//   const { id, name } = req.query;
//   res.send(`Student name is: ${name}, & id is: ${id}!`);
// });

// How to get access route (parameter/parameters).

// app.get("/roll/:r/class/:c", (req, res) => {
//   const { r, c } = req.params;
//   res.send(`Student Roll No is: ${r}, & Class is: ${c}!`);
// });

// Access data from header

// app.get("/", (req, res) => {
//   const name = req.header('name');
//   const id = req.header('id');
//   res.send(`Student name is: ${name}, & id is: ${id}!`);
// });


// Register form data manage...
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Register form POST...
app.post("/register", (req, res) => {
  const { product, address } = req.body;
  res.send(`You have ordered ${product}! It will be delivery soon in this - "${address}" address!`);
});


// Form management basic concepts

// app.post("/user", (req, res) => {
//   const { name, age } = req.body;
//   res.send(`Welcome ${name}! Are you ${age}?`);
// });



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
