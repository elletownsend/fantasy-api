const express = require('express');

const hpMovieController = require('../controllers/hpMovieController');
const swMovieController = require('../controllers/swMovieController');

const router = express.Router();

router.route('/harry-potter/').get(hpMovieController.getAllMovies);
router.route('/harry-potter/:id').get(hpMovieController.getMovie);

router.route('/star-wars/').get(swMovieController.getAllMovies);
router.route('/star-wars/:id').get(swMovieController.getMovie);

module.exports = router;
