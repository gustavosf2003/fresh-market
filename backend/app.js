const { engine } = require("express-handlebars");
const express = require("express");
const cors = require("cors");
const { sendOrderConfirmationEmail } = require("./email");
const { login, isAuthenticated } = require("./utils/login");

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.use(cors());
app.set("views", "./views");
const PORT = process.env.PORT || 3030;

app.use(express.json());

app.post("/admin/login", async (req, res) => {
  let userCredentials = req.body;
  const authUser = login(userCredentials);
  if (authUser) {
    res.send({ token: authUser });
  } else {
    res.send({ error: "invalid credential" });
  }
});
app.post("/admin/isAuthenticated", async (req, res) => {
  const userToken = req.body.token;
  res.send({ isAuthenticated: isAuthenticated(userToken) });
});

app.post("/order", (req, res) => {
  let order = req.body;
  sendOrderConfirmationEmail(res, order);
  res.send(`Order done`);
});

app.get("/", (req, res) => {
  res.send(`Api running`);
});

app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
