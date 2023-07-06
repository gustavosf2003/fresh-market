const crypto = require("crypto");

function createHash(name) {
  return crypto.createHash("sha256").update(name).digest("hex");
}

function login(user) {
  if (user.login === "user@example.com" && user.password === "string") {
    return createHash(user.login);
  }
  return undefined;
}

function isAuthenticated(token) {
  if (token === createHash("user@example.com")) {
    return true;
  }
  return false;
}

module.exports = {
  login,
  isAuthenticated,
  createHash,
};
