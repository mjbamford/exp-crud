const express = require('express');
const router = express.Router();
const {
    getPosts,
    getPost,
    createPost,
    removePost,
    changePost
} = require('../controllers/posts_controller');

// GET /posts
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost)
router.put("/:id", changePost );
router.delete("/:id", removePost);

module.exports = router;