const express = require('express');

const hpCharacterController = require('../controllers/hpCharacterController');
const swCharacterController = require('../controllers/swCharacterController');
const lotrCharacterController = require('../controllers/lotrCharacterController');

const router = express.Router();

router.route('/harry-potter/').get(hpCharacterController.getAllCharacters);
router.route('/harry-potter/:id').get(hpCharacterController.getCharacter);

router.route('/star-wars/').get(swCharacterController.getAllCharacters);
router.route('/star-wars/:id').get(swCharacterController.getCharacter);

router.route('/lotr/').get(lotrCharacterController.getAllCharacters);
router.route('/lotr/:id').get(lotrCharacterController.getCharacter);

module.exports = router;
