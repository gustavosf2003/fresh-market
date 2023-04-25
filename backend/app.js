const express = require("express");
const app = express();

app.use(express.json());

app.post("/order", (req, res) => {
  console.log(req.body);
  res.send(`Order done`);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
