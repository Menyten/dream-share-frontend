const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.get("/posts", async (req, res) => {
  const limit = 10;
  const page = req.query.page;
  const posts = await Post.find()
    .skip(page * limit)
    .limit(limit)
    .lean();
  res.send(posts);
});

router.get("/post/:postId", async (req, res) => {
  const post = await Post.findById(req.params.postId);
  res.send(post);
});

router.post("/posts", async (req, res) => {
  const post = new Post(req.body);
  const savedPost = await post.save();
  res.send(savedPost);
});

module.exports = router;
