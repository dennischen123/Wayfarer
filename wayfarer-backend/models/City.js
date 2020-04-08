const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: String,
    country: String,
    description: String,
    image: String,
})

const City = mongoose.model('City', CitySchema);

module.exports = City;