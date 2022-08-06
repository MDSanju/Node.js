const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  const { id, name } = req.query;
  res.send(`Student name is: ${name}, & id is: ${id}!`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
