const Post = require('../models/post');

const getAllPosts = function() {
    return Post.find();
}

const getPostById = function(id) {
    return Post.findById(id);
}

const addPost = function(req) {
    const date = Date.now();
    req.body.create_date = date;
    req.body.modified_date = date;
    return new Post(req.body);
}

const deletePost = function(id) {
    return Post.findByIdAndRemove(id);
}

const updatePost = function(req) {
    req.body.modified_date = Date.now();
    return Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
}

function filter(query) {
    let posts = {};

    if (Object.keys(query).length === 0) {
        return blogPosts;
    }

    for (let id of Object.keys(blogPosts)) {
        if (blogPosts[id].category === query.category) {
            posts[id] = blogPosts[id];
        }
    }
    return posts;
}

function getDataFileRelativeToApp(file) {
    return file.substring(file.lastIndexOf('../') + 3, file.length);
}

function getNextId() {
    const sortedIds = Object.keys(blogPosts).sort();
    const nextId = (sortedIds.length != 0) ? parseInt(sortedIds[sortedIds.length-1]) + 1 : 1;
    return String(nextId);
}

module.exports = { getAllPosts, getPostById, addPost, deletePost, updatePost }
