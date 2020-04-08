const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    currentCity: String,
    joinDate: { type: Date, required: true, default: Date.now }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;