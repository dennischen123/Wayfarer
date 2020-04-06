const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    content: String,
    authorId: String,
    // cityId: String
    // BONUS Timestamp
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;