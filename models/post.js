const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: 1
    },
    create_date: {
        type: Date,
        required: [true, "Create date is required"],
    },
    modified_date: {
        type: Date,
        required: [true, "Modified date is required"],
    },
    username: {
        type: String,
        required: [true, "Username date is required"],
    },
    content: {
        type: String,
        required: [true, "Content is required"],
        minlength: [2, "Content must contain at least two characters"],
        maxlength: [10240, "Exceeded maximum content length of 10240 characters"]
    },
    category: String
});

module.exports = mongoose.model('Post', PostSchema);