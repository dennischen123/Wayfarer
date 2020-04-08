const db = require('./models');
require('dotenv').config();

const cities = [
    {
        name: 'Amsterdam',
        country: 'Netherlands',
        description: 'Venice of the North',
        image: 'Amsterdam.jpg'
    },
    {
        name: 'Bangkok',
        country: 'Thailand',
        description: 'The Big Mango',
        image: 'Bangkok.jpg'
    },
    {
        name: 'Chicago',
        country: 'USA',
        description: 'The Windy City',
        image: 'Chicago.jpg'
    },
    {
        name: 'Frankfurt',
        country: 'Germany',
        description: 'Mainhattan',
        image: 'Frankfurt.jpg'
    },
    {
        name: 'London',
        country: 'England',
        description: 'The Old Smoke',
        image: 'London.jpg'
    },
    {
        name: 'New York',
        country: 'USA',
        description: 'The Big Apple',
        image: 'New-York.jpg'
    },
    {
        name: 'San Francisco',
        country: 'USA',
        description: 'The City by the Bay',
        image: 'San-Francisco.jpg'
    },
    {
        name: 'Sydney',
        country: 'Austrailia',
        description: 'The Harbour City',
        image: 'Sydney.jpg'
    }
]

const seedDatabase = async () => {
    try {
        await db.City.deleteMany({});
        console.log('Deleted previous cities.');
        let createdCities = await db.City.create(cities);
        console.log(`Created ${createdCities.length} cities in the DB.`);
        console.log(createdCities);
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit(0);
    }
}

seedDatabase();