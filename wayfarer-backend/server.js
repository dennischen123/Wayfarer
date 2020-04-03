// imports 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const cors = require('cors');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);

require('dotenv').config()

// port 
const PORT = process.env.PORT;

// routes
const routes = require('./routes');

// database
const db = require('./models');

// middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/v1', routes.auth);
app.use('/api/v1', routes.api);

app.get('/', (req, res) => {
    res.send('api page');
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));