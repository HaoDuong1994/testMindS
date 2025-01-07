const mongoose = require("mongoose");
const { Schema } = mongoose;
const postSchema = new Schema({
  id: Schema.Types.ObjectId,
  userId: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});
const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts;
