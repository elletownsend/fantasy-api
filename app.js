const fs = require('fs');
const express = require('express');

const characterRouter = require('./routes/characterRoutes');
const movieRouter = require('./routes/movieRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/characters', characterRouter);
app.use('/api/v1/movies', movieRouter);

module.exports = app;
