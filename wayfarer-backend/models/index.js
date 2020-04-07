const mongoose = require('mongoose');
const DB_URL = process.env.MONGODB_URI;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.log(err));

module.exports = {
    User: require('./User'),
    Post: require('./Post'),
    City: require('./City')
}