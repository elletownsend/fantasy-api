const fs = require('fs');
const express = require('express');
var cors = require('cors');

const characterRouter = require('./routes/characterRoutes');
const movieRouter = require('./routes/movieRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', express.static('public'));

app.use('/api/v1/characters', characterRouter);
app.use('/api/v1/movies', movieRouter);

module.exports = app;
