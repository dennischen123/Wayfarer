const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    content: String,
    // TODO add reference to author
    // BONUS Timestamp
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;