const express = require('express');

const hpMovieController = require('../controllers/hpMovieController');
const swMovieController = require('../controllers/swMovieController');
const lotrMovieController = require('../controllers/lotrMovieController');

const router = express.Router();

router.route('/harry-potter/').get(hpMovieController.getAllMovies);
router.route('/harry-potter/:id').get(hpMovieController.getMovie);

router.route('/star-wars/').get(swMovieController.getAllMovies);
router.route('/star-wars/:id').get(swMovieController.getMovie);

router.route('/lotr/').get(lotrMovieController.getAllMovies);
router.route('/lotr/:id').get(lotrMovieController.getMovie);

module.exports = router;
