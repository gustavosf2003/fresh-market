function getCurrentTime() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const hour = date.getHours() % 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = date.getHours() < 12 ? "am" : "pm";

  return `${day}/${month} - ${hour}:${minutes} ${ampm}`;
}

module.exports = {
  getCurrentTime,
};
