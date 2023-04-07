const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  phone: {
    type: "Number",
    required: true,
  },
  bookid: {
    type: "Number",
    required: true,
  },
  time: {
    type: "string",
    required: true,
  },
  droneshot: {
    type: "string",
    required: true,
  }
});
 
const users = new mongoose.model("users",userSchema);

module.exports = users;