const {Router} = require('express');
const router = new Router();
const PublicController = require('../controllers/publicController');

router.get('/animals/random', PublicController.getRandomAnimals);

module.exports = router;