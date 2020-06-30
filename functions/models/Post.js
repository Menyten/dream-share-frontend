const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
