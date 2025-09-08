const StaffService = require('../service/staffService');

class StaffController {
    
    //========== API связанные с пользователями ==========//

    // 1. Просмотр всех зарегистрированных пользователей
    async listAllUsers(req, res) {
        try {
            if (!['admin', 'manager'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const users = await StaffService.listAllUsers();
            if (users.length === 0) {
                return res.status(200).json({message: 'Список зарегистрированных пользователей пуст'});
            }
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({
                message: 'Ошибка получения списка всех зарегистрированных пользователей'
            });
        }
    }

    // 2. Просмотр информации одного пользователя
    async viewUserInformation(req, res) {
        try {
            if (!['admin', 'manager'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const userId = req.params.id;
            const userInfo = await StaffService.viewUserInformation(userId);
            if (!userInfo) {
                return res.status(404).json({message: 'Данные пользователя не определены'});
            }
            return res.status(200).json(userInfo);
        } catch (error) {
            return res.status(500).json({
                message: 'Ошибка получения подробной информации одного пользователя'
            });
        }
    }

    // 3. Создание нового пользователя
    async createNewUser(req, res) {
        try {
            if (!['admin', 'manager'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const { name, surname, role, age, gender, region, email, password, phone } = req.body;
            
            if (!name || !surname || !email || !password || !phone) {
                return res.status(400).json({ 
                    message: 'Обязательные поля: name, surname, email, password, phone' 
                });
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ 
                    message: 'Некорректный формат email' 
                });
            }

            const validRoles = ['user', 'admin', 'manager', 'doctor', 'volunteer'];
            if (role && !validRoles.includes(role)) {
                return res.status(400).json({ 
                    message: `Некорректная роль. Допустимые значения: ${validRoles.join(', ')}` 
                });
            }

            const newUser = await StaffService.createNewUser({
                name, surname, role, age, gender, region, email, password, phone
            });

            return res.status(201).json({
                message: 'Пользователь успешно создан',
                user: newUser
            });
        } catch (error) {
            return res.status(500).json({ 
                message: 'Ошибка при создании пользователя' 
            });
        }
    }

    // 4. Обновление данных пользователя
    async updateUserData(req, res) {
        try {
            if (!['admin', 'manager'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const userId = req.params.id;
            const userData = req.body;
            const updateUserInfo = await StaffService.updateUserData(userId, userData);

            return res.status(200).json({
                message: 'Данные пользователя успешно обновлены!',
                user: updateUserInfo
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: 'Ошибка обновления пользовательских данных'
            });
        }
    }

    // 5. Удаление пользователя
    async deleteUser(req, res) {
        try {
            if (req.user.role !== 'admin') {
                return res.status(403).json({message: 'Только администратор может удалять пользователей'});
            }

            const userId = req.params.id;
            const result = await StaffService.deleteUser(userId);

            return res.status(200).json({
                message: 'Пользователь успешно удален!',
                deletedUserId: result.id
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: 'Ошибка удаления пользователя'
            });
        }
    }

    // 6. Просмотр списка анкет пользователей об усыновлении животного
    async listUserQuestionnairesAnimalAdoption(req, res) {
        try {
            if (!['admin', 'manager'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const questionnaires = await StaffService.listUserQuestionnairesAnimalAdoption();

            return res.status(200).json({
                message: questionnaires.length === 0
                    ? 'Список анкет об усыновлении пуст!' 
                    : 'Список анкет пользователей об усыновлении животного',
                count: questionnaires.length,
                questionnaires
            });
        } catch (error) {
            return res.status(500).json({message: 'Ошибка получения списка пользовательских анкет на усыновление животного'});
        }
    }

    // 7. Список заявок на волонтерство
    async listVolunteerApplications(req, res) {
        try {
            if (!['admin', 'manager'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const applications = await StaffService.listVolunteerApplications();
            return res.status(200).json({
                message: applications.length === 0
                    ? 'Список заявок на волонтерство пуст!'
                    : 'Список заявок на волонтерство',
                count: applications.length,
                applications
            });
        } catch (error) {
            return res.status(500).json({message: 'Ошибка получения списка заявок на волонтерство'});
        }
    }

    // 8. Просмотр рейтинга пользователей по пожертвованиям
    async userRatingByDonations(req, res) {
        try {
            if (!['admin', 'manager', 'user'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const userRating = await StaffService.userRatingByDonations();
            return res.status(200).json({
                message: userRating.length === 0
                    ? 'Рейтинг пожертвований пуст!'
                    : 'Рейтинг пользователей пожертвований ветеринарной клинике',
                count: userRating.length,
                userRating
            });
        } catch (error) {
            return res.status(500).json({message: 'Ошибка получения данных о рейтинге пользователей по пожертвованиям'});
        }
    }

    //========== API связанные с животными ==========//

    // 9. Список всех животных
    async listAllAnimals(req, res) {
        try {
            if (!['admin', 'manager', 'doctor', 'volunteer'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const animals = await StaffService.listAllAnimals();
            return res.status(200).json({
                message: animals.length === 0
                    ? 'Список животных пуст!'
                    : 'Список животных ветеринарной клиники Vetland',
                count: animals.length,
                animals
            });
        } catch (error) {
            return res.status(500).json({message: 'Ошибка получения списка всех животных'});
        }
    }

    // 10. Список всех животных конкретного приюта
    async listAllAnimalsSpecificShelter(req, res) {
        try {
            if (!['admin', 'manager', 'doctor', 'volunteer'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const shelterId = req.params.id;
            const animals = await StaffService.listAllAnimalsSpecificShelter(shelterId);
            return res.status(200).json({
                message: animals.length === 0
                    ? 'Список животных пуст!'
                    : 'Список животных ветеринарной клиники Vetland одного из филиалов',
                count: animals.length,
                animals
            });
        } catch (error) {
            return res.status(500).json({message: 'Ошибка получения списка всех животных текущего филиала'});
        }
    }

    // 11. Просмотр информации о животном
    async viewDetailedInformationAnimal(req, res) {
        try {
            if (!['admin', 'manager', 'doctor', 'volunteer'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const animalId = req.params.id;
            const animalInfo = await StaffService.viewDetailedInformationAnimal(animalId);
            return res.status(200).json(animalInfo);
        } catch (error) {
            return res.status(500).json({message: 'Ошибка получения подробной информации о животном'});
        }
    }

    // 12. Добавление животного в приют
    async addAnimalDBSpecificShelter(req, res) {
        try {
            if (!['admin', 'manager'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const { shelter_id, animalType_id, animalStatus_id, animalName, age, gender, animalPhotosData, amountTreatment } = req.body;
            
            if (!shelter_id || !animalType_id || !animalStatus_id || !animalName || !age || !gender) {
                return res.status(400).json({message: 'Отсутствуют обязательные поля'});
            }

            const newAnimal = await StaffService.addAnimalDBSpecificShelter({
                shelter_id, animalType_id, animalStatus_id, animalName, age, gender, animalPhotosData, amountTreatment
            });
            
            return res.status(201).json({
                message: 'Животное успешно добавлено в приют',
                animal: newAnimal
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({message: 'Ошибка добавления животного в приют'});
        }
    }

    // 13. Добавление усыновленного животного
    async addAnimalDBAdoptedAnimals(req, res) {
        try {
            if (!['admin', 'manager'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const { animal_id, user_id, adoptedAnimalPhotosData } = req.body;
            
            if (!animal_id || !user_id) {
                return res.status(400).json({message: 'Отсутствуют animal_id или user_id'});
            }

            const adoptedAnimal = await StaffService.addAnimalDBAdoptedAnimals({
                animal_id, user_id, adoptedAnimalPhotosData
            });

            return res.status(201).json({
                message: 'Животное успешно усыновлено',
                adoptedAnimal
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({message: 'Ошибка оформления усыновления'});
        }
    }

    // 14. Обновление информации о животном
    async updateInformationAnimal(req, res) {
        try {
            if (!['admin', 'manager', 'doctor'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const animalId = req.params.id;
            const animalData = req.body;
            const animalUpdateInfo = await StaffService.updateInformationAnimal(animalId, animalData);
            
            return res.status(200).json({
                message: 'Данные животного успешно обновлены',
                animal: animalUpdateInfo
            });
        } catch (error) {
            return res.status(500).json({message: 'Ошибка обновления данных животного'});
        }
    }
    
    // 15. Удаление животного
    async deleteAnimal(req, res) {
        try {
            if (req.user.role !== 'admin') {
                return res.status(403).json({message: 'Только администратор может удалять животных'});
            }

            const animalId = req.params.id;
            const result = await StaffService.deleteAnimal(animalId);
            
            return res.status(200).json({
                message: 'Животное успешно удалено!',
                deletedAnimalId: result.id
            });
        } catch (error) {
            return res.status(500).json({message: 'Ошибка удаления животного из БД'});
        }
    }

    // 16. Добавление типа животного
    async addNewTypeAnimal(req, res) {
        try {
            if (req.user.role !== 'admin') {
                return res.status(403).json({message: 'Только администратор может добавлять типы животных'});
            }

            const { newTypeAnimal } = req.body;
            if (!newTypeAnimal || typeof newTypeAnimal !== 'string') {
                return res.status(400).json({message: 'Некорректное название типа животного'});
            }

            const newType = await StaffService.addNewTypeAnimal(newTypeAnimal);
            
            return res.status(201).json({
                message: `Добавлен новый тип животного: ${newType.type}`,
                animalType: newType
            });
        } catch (error) {
            return res.status(500).json({message: 'Ошибка добавления нового типа животного в БД'});
        }
    }

    // 17. Удаление типа животного
    async deleteAnimalType(req, res) {
        try {
            if (req.user.role !== 'admin') {
                return res.status(403).json({message: 'Только администратор может удалять типы животных'});
            }

            const animalTypeId = req.params.id;
            const result = await StaffService.deleteAnimalType(animalTypeId);
            
            return res.status(200).json({
                message: `Тип животного "${result}" удален`
            });
        } catch (error) {
            return res.status(500).json({message: 'Ошибка удаления типа животного из БД'});
        }
    }

    // 18. Список всех приютов
    async listAllShelter(req, res) {
        try {
            if (!['admin', 'manager', 'doctor', 'volunteer'].includes(req.user.role)) {
                return res.status(403).json({message: 'Доступ запрещен'});
            }

            const shelters = await StaffService.listAllShelter();

            return res.status(200).json({
                message: 'Список всех приютов',
                count: shelters.length,
                shelters
            });
        } catch (error) {
            return res.status(500).json({message: 'Ошибка получения списка всех приютов'});
        }
    }

    // 19. Добавление нового приюта
    async addNewShelter(req, res) {
        try {

            if (req.user.role !== 'admin') {
                return res.status(403).json({message: 'Только администратор может добавлять приюты'});
            }
            
            const {
                shelterName,
                region,
                city,
                street,
                houseNumber,
                postalCode,
                contactPhone,
                email,
                shelterAmount,
                amountDonationsAnimals,
                numberAnimals
            } = req.body;

            // Валидация обязательных полей
            const requiredFields = ['shelterName', 'region', 'city', 'street', 'houseNumber', 'postalCode', 'contactPhone', 'email'];
            const missingFields = requiredFields.filter(field => !req.body[field]);
            
            if (missingFields.length > 0) {
                return res.status(400).json({
                    message: `Отсутствуют обязательные поля: ${missingFields.join(', ')}`
                });
            }

            const newShelter = await StaffService.addNewShelter({
                shelterName,
                region,
                city,
                street,
                houseNumber: parseInt(houseNumber),
                postalCode: parseInt(postalCode),
                contactPhone,
                email,
                shelterAmount: parseFloat(shelterAmount) || 0,
                amountDonationsAnimals: parseInt(amountDonationsAnimals) || 0,
                numberAnimals: parseInt(numberAnimals) || 0
            });

            return res.status(201).json({
                message: 'Новый приют успешно добавлен',
                shelter: newShelter
            });

        } catch (error) {
            console.error(error);
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.status(409).json({message: 'Приют с таким email уже существует'});
            }
            return res.status(500).json({message: 'Ошибка добавления нового приюта'});
        }
    }

    // 20. Удаление медицинской записи
    async deleteMedicalRecord(req, res) {
        try {
            const recordId = req.params.id;
            const currentUserId = req.user.id;
            const currentUserRole = req.user.role;

            // Здесь решающая логика:
            // Если пользователь - админ или менеджер, удаляем без проверок.
            // Если пользователь - врач, нужно проверить, его ли это запись.
            const result = await StaffService.deleteMedicalRecord(recordId, currentUserId, currentUserRole);

            return res.status(200).json({
                message: 'Медицинская запись успешно удалена!',
                deletedMedicalRecord: result
            });
        } catch (error) {
            if (error.message.includes('не найдена')) {
                return res.status(404).json({ message: error.message });
            }
            if (error.message.includes('Недостаточно прав')) {
                return res.status(403).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Ошибка удаления медицинской записи' });
        }
    }

    // 21. Редактирование медицинской записи
    async editMedicalRecord(req, res) {
        try {
            const recordId = req.params.id;
            const currentUserId = req.user.id;
            const currentUserRole = req.user.role;
            const updateData = req.body;

            if(Object.keys(updateData).length === 0) {
                return res.status(400).json({
                    message: 'Не указаны данные для обновления'
                })
            }

            const updatedRecord = await StaffService.editMedicalRecord(recordId, currentUserId, currentUserRole, updateData);

            return res.status(200).json({
                message: 'Медицинская запись успешно обновлена',
                medicalRecord: updatedRecord
            });

        } catch (error) {
            return res.status(500).json({ message: 'Ошибка редактирования медицинской записи' });
        }
    }

    // 22. Получить все медицинские записи
    async listAllMedicalRecords(req, res) {
        try {
            const medicalRecords = await StaffService.listAllMedicalRecords();

            return res.status(200).json({
                message: medicalRecords.length === 0
                    ? 'Медицинские записи отсутствуют'
                    : 'Все медицинские записи',
                count: medicalRecords.length,
                medicalRecords
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Ошибка получения списка медицинских записей' });
        }
    }
}

module.exports = new StaffController;