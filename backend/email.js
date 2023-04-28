const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const { getCurrentTime } = require("./utils/order");
const fs = require("fs");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "freshmarket.lisbon@gmail.com",
    pass: "curprewfocwdrrxv",
  },
});

function sendOrderConfirmationEmail({ ...order }) {
  const data = {
    name: order.name,
    date: getCurrentTime(),
    email: order.email,
    address: order.address,
    price: order.price,
    products: order.products,
  };
  const source = fs.readFileSync("./views/order.handlebars", "utf8");
  const template = handlebars.compile(source);
  const html = template(data);
  let info = {
    from: "freshmarket.lisbon@gmail.com",
    to: order.email,
    subject: "Order on the way",
    html: html,
  };

  transporter.sendMail(info, (error, info) => {
    if (error) {
      console.log(error);
    }
  });
}

module.exports = {
  sendOrderConfirmationEmail,
};
