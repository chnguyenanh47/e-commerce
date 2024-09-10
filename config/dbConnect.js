const mongoose = require("mongoose");

const dbURL = process.env.MONGODB_URL;
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.error("Lỗi kết nối MongoDB: " + err);
  });
module.exports = mongoose.connection;
