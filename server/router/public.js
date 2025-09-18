const {Router} = require('express');
const router = new Router();
const PublicController = require('../controllers/publicController');

// 1. Рандомный список животных для Титульной страницы
router.get('/animals/random', PublicController.getRandomAnimals);

// 2. Список всех животных
router.get('/list-all-animals-public', PublicController.getListAllAnimals);

// 3. Список всех усыновленных животных
router.get('/list-all-adopted-animals-public', PublicController.getListAllAdoptedAnimals);

// 4. Составление анкеты об усыновлении животного
router.post('/fill-out-application-adopt-animal', PublicController.fillOutApplicationAdoptAnimal);

// 5. Подать заявку на волонтерство
router.post('/apply-volunteer', PublicController.applyVolunteer);

module.exports = router;