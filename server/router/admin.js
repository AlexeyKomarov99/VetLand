const { Router } = require('express');
const router = new Router;
const AdminController = require('../controllers/adminController');

// ========= Маршруты, связанные с пользователями ========= //

// 1. Просмотр всех зарегистрированных пользователей
router.get('./list-all-users', AdminController.listAllUsers);

// 2. Просмотр информации одного пользователя
router.get('./view-user-info/:id', AdminController.viewUserInformation);

// 3. Создание нового пользователя
router.post('/create-new-user', AdminController.createNewUser);

// 4. Обновление данных пользователя
router.patch('/update-user-data/:id', AdminController.updateUserData);

// 5. Удаление пользователя
router.delete('/delete-user/:id', AdminController.deleteUser);

// 6. Просмотр списка анкет пользователей об усыновлении животного
router.get('/list-user-questionnaires-animal-adoption', AdminController.listUserQuestionnairesAnimalAdoption);

// 7. Список заявок на волонтерство
router.get('/list-volunteer-applications', AdminController.listVolunteerApplications);

// 8. Просмотр рейтинга пользователей по пожертвованиям
router.get('/user-rating-by-donations', AdminController.userRatingByDonations);

// ========= Маршруты, связанные с животными ========= //

// 9. Список всех животных
router.get('/list-all-animals', AdminController.listAllAnimals);

// 10. Список всех животных, относящихся к конкретному приюту id
router.get('/list-all-animals-specific-shelter/:id', AdminController.listAllAnimalsSpecificShelter);

// 11. Просмотр подробной информации о животном
router.get('/view-detailed-information-animal/:id', AdminController.viewDetailedInformationAnimal);

// 12. Добавление животного в конкретный приют
router.post('/add-animal-db-specific-shelter', AdminController.addAnimalDBSpecificShelter);

// 13. Добавление усыновленных животных в базу данных
router.post('/add-animal-db-adopted-animals', AdminController.addAnimalDBAdoptedAnimals);

// 14. Обновление информации о животном
router.patch('/update-information-animal/:id', AdminController.updateInformationAnimal);

// 15. Удаление животного
router.delete('/delete-animal/:id', AdminController.deleteAnimal);

// 16. Добавление нового типа животного
router.post('/add-new-type-animal', AdminController.addNewTypeAnimal);

// 17. Удаление типа животного
router.delete('/delete-animal-type/:id', AdminController.deleteAnimalType);

// ========= Маршруты, связанные с пожертвованиями ========= //

// 18. Пожертвование денег в приют
router.post('/donate-money-shelter', AdminController.donateMoneyShelter);

// 19. Пожертвование денег животному
router.post('/donate-money-animal/:id', AdminController.donateMoneyAnimal);

// ========= Маршруты, связанные с фондами и приютами ========= //

// 20. Список всех приютов
router.get('/list-all-shelter', AdminController.listAllShelter);

// 21. Добавление нового приюта
router.post('./add-new-shelter', AdminController.addNewShelter);

module.exports = router;