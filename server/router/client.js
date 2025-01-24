const { Router } = require('express');
const router = new Router;
const ClientController = require('../controllers/clientController');

// 1. Пожертвовать денег приюту
router.post('./donate-money-shelter', ClientController.donateMoneyShelter);

// 2. Пожертвовать денег животному
router.post('./donate-money-animal/:id', ClientController.donateMoneyAnimal);

// 3. Составление анкеты об усыновлении животного
router.post('./fill-out-application-adopt-animal', ClientController.fillOutApplicationAdoptAnimal);

// 4. Подать заявку на волонтерство
router.post('/apply-volunteer', ClientController.applyVolunteer);

module.exports = router;