const mongoose = require("mongoose");
const connect = () => {
  mongoose.connect(
    "mongodb+srv://NayanIngale:nayan12345@test.wjg1r.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connect;
