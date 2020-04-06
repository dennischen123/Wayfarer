const db = require('../models');

const index = async (req, res) => {
    try {
        const posts = await db.Post.find({});
        if (!posts) res.status(404).json({error: 'No posts found.'});
        res.json(posts);
    } catch (err) {
        res.status(500).json('something went wrong');
    }
}

const show = async (req, res) => {
    try {
        const post = await db.Post.findById(req.params.id);
        if (!post) res.status(404).json({error: 'No post found with that ID.'});
        res.json(post);
    }catch (err) {
        res.status(500).json(err);
    }
}

const create = async (req, res) => {
    try {
        const newPost = await db.Post.create(req.body);
        if (!newPost) res.status(404).json({error: 'Post could not be created.'});
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }    
}

const update = async (req, res) => {
    console.log(req.body);
    try {
        const updatedPost = await db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedPost) res.status(404).json({error: 'Post could not be updated.'});
        res.json(updatedPost)
    } catch (err) {
        res.status(500).json(err);
    }
}

const destroy = async (req, res) => {
    try {
        const deletedPost = await db.Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) res.status(404).json({error: 'Post with that ID could not be found.'});
        res.json(deletedPost);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    index, 
    show, 
    create, 
    update,
    destroy
}