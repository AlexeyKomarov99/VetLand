const { Router } = require('express');
const router = new Router;
const authMiddleware = require('../middleware/auth');
const roleMiddleware = require('../middleware/roleAuth');
const StaffController = require('../controllers/staffController');

// ========= Маршруты, связанные с пользователями ========= //

// 1. Просмотр всех зарегистрированных пользователей
router.get('/list-all-users',
    authMiddleware,
    roleMiddleware(['admin', 'manager']),
    StaffController.listAllUsers
);

// 2. Просмотр информации одного пользователя
router.get('/view-user-info/:id',
    authMiddleware,
    roleMiddleware(['admin', 'manager']),
    StaffController.viewUserInformation
);

// 3. Создание нового пользователя
router.post('/create-new-user',
    authMiddleware,
    roleMiddleware(['admin', 'manager']),
    StaffController.createNewUser
);

// 4. Обновление данных пользователя
router.patch('/update-user-data/:id',
    authMiddleware,
    roleMiddleware(['admin', 'manager']),
    StaffController.updateUserData
);

// 5. Удаление пользователя (только админ)
router.delete('/delete-user/:id',
    authMiddleware,
    roleMiddleware(['admin']),
    StaffController.deleteUser
);

// 6. Просмотр списка анкет пользователей об усыновлении животного
router.get('/list-user-questionnaires-animal-adoption',
    authMiddleware,
    roleMiddleware(['admin', 'manager']),
    StaffController.listUserQuestionnairesAnimalAdoption
);

// 7. Список заявок на волонтерство
router.get('/list-volunteer-applications',
    authMiddleware,
    roleMiddleware(['admin', 'manager']),
    StaffController.listVolunteerApplications
);

// 8. Просмотр рейтинга пользователей по пожертвованиям
router.get('/user-rating-by-donations',
    authMiddleware,
    roleMiddleware(['admin', 'manager']),
    StaffController.userRatingByDonations
);

// ========= Маршруты, связанные с животными ========= //

// 9. Список всех животных
router.get('/list-all-animals',
    authMiddleware,
    roleMiddleware(['admin', 'manager', 'doctor', 'volunteer']),
    StaffController.listAllAnimals
);

// 10. Список всех животных, относящихся к конкретному приюту id
router.get('/list-all-animals-specific-shelter/:id',
    authMiddleware,
    roleMiddleware(['admin', 'manager', 'doctor', 'volunteer']),
    StaffController.listAllAnimalsSpecificShelter
);

// 11. Просмотр подробной информации о животном
router.get('/view-detailed-information-animal/:id',
    authMiddleware,
    roleMiddleware(['admin', 'manager', 'doctor', 'volunteer']),
    StaffController.viewDetailedInformationAnimal
);

// 12. Добавление животного в конкретный приют
router.post('/add-animal-db-specific-shelter',
    authMiddleware,
    roleMiddleware(['admin', 'manager']),
    StaffController.addAnimalDBSpecificShelter
);

// 13. Добавление усыновленных животных в базу данных
router.post('/add-animal-db-adopted-animals',
    authMiddleware,
    roleMiddleware(['admin', 'manager']),
    StaffController.addAnimalDBAdoptedAnimals
);

// 14. Обновление информации о животном
router.patch('/update-information-animal/:id',
    authMiddleware,
    roleMiddleware(['admin', 'manager', 'doctor']),
    StaffController.updateInformationAnimal
);

// 15. Удаление животного (только админ)
router.delete('/delete-animal/:id',
    authMiddleware,
    roleMiddleware(['admin']),
    StaffController.deleteAnimal
);

// 16. Добавление нового типа животного (только админ)
router.post('/add-new-type-animal',
    authMiddleware,
    roleMiddleware(['admin']),
    StaffController.addNewTypeAnimal
);

// 17. Удаление типа животного (только админ)
router.delete('/delete-animal-type/:id',
    authMiddleware,
    roleMiddleware(['admin']),
    StaffController.deleteAnimalType
);

// ========= Маршруты, связанные с фондами и приютами ========= //

// 18. Список всех приютов
router.get('/list-all-shelter',
    authMiddleware,
    roleMiddleware(['admin', 'manager', 'doctor', 'volunteer']),
    StaffController.listAllShelter
);

// 19. Добавление нового приюта (только админ)
router.post('/add-new-shelter',
    authMiddleware,
    roleMiddleware(['admin']),
    StaffController.addNewShelter
);

// ========= Маршруты, связанные с медицинскими записями ========= //

// 20. Удаление медицинской записи
router.delete('/delete-medical-record/:id',
    authMiddleware,
    roleMiddleware(['admin', 'manager', 'doctor']),
    StaffController.deleteMedicalRecord
);

// 21. Редактирование медицинской записи
router.patch('/edit-medical-record/:id',
    authMiddleware,
    roleMiddleware(['admin', 'manager', 'doctor']),
    StaffController.editMedicalRecord
);

// 22. Получить все медицинские записи
router.get('/list-medical-records',
    authMiddleware,
    roleMiddleware(['admin', 'manager']),
    StaffController.listAllMedicalRecords
);

module.exports = router;