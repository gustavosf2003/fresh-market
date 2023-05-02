const crypto = require("crypto");

function createHash(name) {
  return crypto.createHash("sha256").update(name).digest("hex");
}

function login(user) {
  if (user.login === "gsferreira2003@gmail.com" && user.password === "test") {
    return createHash(user.login);
  }
  return undefined;
}

function isAuthenticated(token) {
  if (token === createHash("gsferreira2003@gmail.com")) {
    return true;
  }
  return false;
}

module.exports = {
  login,
  isAuthenticated,
  createHash,
};
