const db = require('../models');

const index = async (req, res) => {
    try {
        const cities = await db.City.find({});
        if (!cities) res.status(404).json({error: 'No cities found.'});
        res.json(cities);
    } catch (err) {
        res.status(500).json('whoops');
    }
}

const show = async (req, res) => {
    try {
        const city = await db.City.findById(req.params.id);
        if(!city) res.status(404).json({error: "No cities found with that ID."});
        res.json(city);
    } catch (err) {
        res.status(500).json(err);
    }
}

const create = async (req, res) => {
    try {
        const newCity = await db.City.create(req.body);
        if (!newCity) res.status(404).json({error: 'city not created'});
        res.json(newCity); 
    } catch (err) {
        res.status(500).json(err);
    }
}

const update = async (req, res) => {
    try {
        const updatedCity = await db.City.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCity) res.status(404).json({error: 'city not updated'});
        res.json(updatedCity);
    } catch (err) {
        res.status(500).json(err);
    }
}

const destroy = async (req, res) => {
    try {
        const deletedCity = await db.City.findByIdAndDelete(req.params.id);
        if (!deletedCity) res.status(404).json({error: 'city with that ID could not be found'});
        res.json(deletedCity);
    }   catch (err) {
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