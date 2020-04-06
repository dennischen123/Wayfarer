const db = require('../models');
const bcrypt = require('bcryptjs')


const register = (req, res) => {

    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    if(!newUser.username || !newUser.password)
        return res.status(400).send('cannot be null')
    
    db.User.findOne({username: newUser.username}, (err, foundUser) => {
        if(err)
            return res.status(500).json(err)

            if(foundUser)
                return res.status(400).send('username taken')
    })

    bcrypt.genSalt(10, (err, salt) => {
        if(err)
            return res.status(500).json(err)

        bcrypt.hash(newUser.password, salt, (err, hashedPwd) => {
            if(err)
                return res.status(500).json(err)
            newUser.password = hashedPwd

            db.User.create(newUser, (err, savedUser) => {
                if(err)
                    return res.status(500).json(err)

                req.session.currentUser = {id: savedUser._id}

                res.status(200).json(savedUser)
            })
        })
    })
}

const login = (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    if(!user.username || !user.password)
        return res.sendStatus(400)

    db.User.findOne({username: user.username}, (err, foundUser) => {
        if(err)
            return res.status(500).json(err)

        if(!foundUser)
            return res.sendStatus(400)

        bcrypt.compare(user.password, foundUser.password, (err, match) => {
            if(match) {
                req.session.currentUser = {id: foundUser._id}
                res.json(foundUser);
                // res.status(200).send('success')
            } else {
                res.sendStatus(400)
            }
        })
    })
}

const logout = (req, res) => {
    if(!req.session.currentUser)
        return res.status(401).send('unauthorized');

    req.session.destroy(err => {
        res.sendStatus(200)
    })
}

const findUser = (req, res) => {
    if(!req.session.currentUser)
        return res.status(401).send('unauthorized');
        // return res.json(req.session.currentUser.data);

    db.User.findById(req.session.currentUser.id, (err, foundUser) => {
        res.json(foundUser)
    })
}


module.exports = {
    register, 
    findUser,
    login,
    logout
}