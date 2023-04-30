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

function sendOrderConfirmationEmail(res, { ...order }) {
  try {
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
        return res.status(500).json({ message: "Something went wrong: " + e });
      }
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  sendOrderConfirmationEmail,
};
