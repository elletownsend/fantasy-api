const express = require('express');

const hpCharacterController = require('../controllers/hpCharacterController');
const swCharacterController = require('../controllers/swCharacterController');

const router = express.Router();

router.route('/harry-potter/').get(hpCharacterController.getAllCharacters);
router.route('/harry-potter/:id').get(hpCharacterController.getCharacter);

router.route('/star-wars/').get(swCharacterController.getAllCharacters);
router.route('/star-wars/:id').get(swCharacterController.getCharacter);

module.exports = router;
