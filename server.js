const express = require('express');    // backend support

const mongoose = require('mongoose');  // ORM for mongo DB

const bodyParser = require('body-parser'); // URL specification parsing the data in url and sending it as a request

const app = express();  // Initialization of a server

// Body Parser Middleware

app.use(bodyParser.json());

// db config

const db = require('./config/keys').mongoURI;   

// connect to mongo db

mongoose.connect(db)
    .then(() => console.log("MongoDB conected ..."))
    .catch(err => console.log(err));