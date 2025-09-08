const { Router } = require('express');
const router = new Router;
const ClientController = require('../controllers/clientController');

// 1. Составление анкеты об усыновлении животного
router.post('./fill-out-application-adopt-animal', ClientController.fillOutApplicationAdoptAnimal);

// 2. Подать заявку на волонтерство
router.post('/apply-volunteer', ClientController.applyVolunteer);

module.exports = router;