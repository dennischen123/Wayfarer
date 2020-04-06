// imports 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require('dotenv').config()

// port 
const PORT = process.env.PORT;

// routes
const routes = require('./routes');

// database
const db = require('./models');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, 
<<<<<<< HEAD
    optionsSuccessStatus: 200,
=======
    optionsSuccessStatus: 200
>>>>>>> d83a3910d99b0c7d6b0946a84c95f2c601243a5f
}


// middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(
    session({
        store: new MongoStore({url: process.env.MONGODB_URI}),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2
        }
    })
)

app.use('/api/v1', routes.auth);
app.use('/api/v1', routes.api);

app.get('/', (req, res) => {
    res.send('api page');
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));