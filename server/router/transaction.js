const { Router } = require('express');
const router = new Router;
const TransactionController = require('../controllers/transactionController');

// ========= Маршруты, связанные с пожертвованиями ========= //

// 1. Пожертвование денег в приют
router.post('/donate-money-shelter', TransactionController.donateMoneyShelter);

// 2. Пожертвование денег животному
router.post('/donate-money-animal/:id', TransactionController.donateMoneyAnimal);

module.exports = router;