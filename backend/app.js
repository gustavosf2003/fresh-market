const { engine } = require("express-handlebars");
const express = require("express");
const { sendOrderConfirmationEmail } = require("./email");

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.json());

app.post("/order", (req, res) => {
  let order = req.body;
  sendOrderConfirmationEmail(order);
  res.send(`Order done`);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
