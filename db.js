const mongoose = require("mongoose");
const {MONGOURI} = require('./config/keys')



mongoose.connect(MONGOURI, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongo DB Connection Successfull`);
});

db.on("error", () => {
  console.log(`Mongo DB Connection failed`);
});

module.exports = mongoose;
