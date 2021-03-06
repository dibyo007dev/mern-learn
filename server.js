const express = require('express');    // backend support

const mongoose = require('mongoose');  // ORM for mongo DB

const bodyParser = require('body-parser'); // URL specification parsing the data in url and sending it as a request

const app = express();  // Initialization of a server

const items = require('./routes/api/items');  // Here we declare all the routes 

// Body Parser Middleware

app.use(bodyParser.json());

// db config

const db = require('./config/keys').mongoURI;   

// connect to mongo db

mongoose
    .connect(db,{ useNewUrlParser: true})
    .then(() => console.log("MongoDB conected ..."))
    .catch(err => console.log(err));

    // Now when you are using mongoose then you need to create a model

// Use routes 

app.use('/api/items',items);

// Setup a port , in Heroku we need the specified port given or use a default port 

const port = process.env.PORT || 8000;

// Now set up the server so that it listens to the 'port'

app.listen(port,() => console.log(`Server Started in port ${port}`));
