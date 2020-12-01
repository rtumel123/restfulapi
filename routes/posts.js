const express = require('express');

const router = express.Router();
const Post = require('../models/Post');

// GET ALL POSTS
router.get('/', async (req, res) => {
  try {
    // return posts with mongoose
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err })
  }
});

// SUBMITS A POST
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch (err) {
    res.json({ message: err })
  };
});

// GET SPECIFIC POST
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch(err) {
    res.json({ message: err })
  };
});

module.exports = router;