const { Router } = require('express');
const router = new Router;
const ManagerController = require('../controllers/managerController');

// ========= Маршруты, связанные с пользователями ========= //

// 1. Просмотр всех зарегистрированных пользователей
router.get('./list-all-users', ManagerController.listAllUsers);

// 2. Просмотр информации одного пользователя
router.get('./view-user-info/:id', ManagerController.viewUserInformation);

// 3. Создание нового пользователя
router.post('/create-new-user', ManagerController.createNewUser);

// 4. Обновление данных пользователя
router.patch('/update-user-data/:id', ManagerController.updateUserData);

// 5. Удаление пользователя
router.delete('/delete-user/:id', ManagerController.deleteUser);

// 6. Просмотр списка анкет пользователей об усыновлении животного
router.get('/list-user-questionnaires-animal-adoption', ManagerController.listUserQuestionnairesAnimalAdoption);

// 7. Список заявок на волонтерство
router.get('/list-volunteer-applications', ManagerController.listVolunteerApplications);

// 8. Просмотр рейтинга пользователей по пожертвованиям
router.get('/user-rating-by-donations', ManagerController.userRatingByDonations);

// ========= Маршруты, связанные с животными ========= //

// 9. Список всех животных
router.get('/list-all-animals', ManagerController.listAllAnimals);

// 10. Список всех животных, относящихся к конкретному приюту id
router.get('/list-all-animals-specific-shelter/:id', ManagerController.listAllAnimalsSpecificShelter);

// 11. Просмотр подробной информации о животном
router.get('/view-detailed-information-animal/:id', ManagerController.viewDetailedInformationAnimal);

// 12. Добавление животного в конкретный приют
router.post('/add-animal-db-specific-shelter', ManagerController.addAnimalDBSpecificShelter);

// 13. Добавление усыновленных животных в базу данных
router.post('/add-animal-db-adopted-animals', ManagerController.addAnimalDBAdoptedAnimals);

// 14. Обновление информации о животном
router.patch('/update-information-animal/:id', ManagerController.updateInformationAnimal);

// 15. Удаление животного
router.delete('/delete-animal/:id', ManagerController.deleteAnimal);

// 16. Добавление нового типа животного
router.post('/add-new-type-animal', ManagerController.addNewTypeAnimal);

// 17. Удаление типа животного
router.delete('/delete-animal-type/:id', ManagerController.deleteAnimalType);

// ========= Маршруты, связанные с пожертвованиями ========= //

// 18. Пожертвование денег в приют
router.post('/donate-money-shelter', ManagerController.donateMoneyShelter);

// 19. Пожертвование денег животному
router.post('/donate-money-animal/:id', ManagerController.donateMoneyAnimal);

// ========= Маршруты, связанные с фондами и приютами ========= //

// 20. Список всех приютов
router.get('/list-all-shelter', ManagerController.listAllShelter);


module.exports = router;