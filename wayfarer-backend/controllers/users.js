const db = requre('../models');

const index = async (req, res) => {
    try {
        const users = await db.User.find({});
        if (!users) res.status(404).json({error: 'No users found.'});
        res.json(users);
    } catch (err) {
        res.status(500).json('whoops');
    }
}

const show = async (req, res) => {
    try {
        const user = await db.User.findById(req.params.id);
        if(!user) res.status(404).json({error: "No users found with that ID."});
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    index,
    show
}