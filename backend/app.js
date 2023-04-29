const { engine } = require("express-handlebars");
const express = require("express");
const { sendOrderConfirmationEmail } = require("./email");

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
const PORT = process.env.PORT || 3030;

app.use(express.json());

app.post("/order", (req, res) => {
  let order = req.body;
  sendOrderConfirmationEmail(order);
  res.send(`Order done`);
});

app.get("/", (req, res) => {
  res.send(`Api running`);
});

app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
