const mongoose = require("mongoose");
const { Schema } = mongoose;
const usersSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  userId: {
    type: String,
  },
  password: String,
});
const Users = mongoose.model("Users", usersSchema);
module.exports = Users;
