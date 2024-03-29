const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      type: String,
        required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

//model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
