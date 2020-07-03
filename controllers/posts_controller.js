const {
    getAllPosts,
    getPostById,
    addPost,
    deletePost,
    updatePost
} = require('../utils/utilities');

const getPosts = function(req, res) {
    getAllPosts().
    sort({
        modified_date: -1
    }).
    exec((err, posts) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.send(posts);
        }
    })
}

const getPost = function(req, res) {
    const id = req.params.id
    getPostById(id).exec((err, post) => {
        if (err) {
            res.status(404).end();
        } else {
            res.send(post);
        }
    });
}

const createPost = function(req, res) {
    addPost(req).save((err, post) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).send(post);
        }
    })
}

const removePost = function(req,res) {
    deletePost(req.params.id).exec((err) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.sendStatus(204);
        }
    });
}

const changePost = function(req, res) {
    updatePost(req).exec((err, post) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).send(post);
        }

    });
}

module.exports = { getPosts, getPost, createPost, removePost, changePost }
