const UserModel = require('../models/user-model');
const StagesAnimalAdoptionModel = require('../models/stages-animal-adoption-model');
const VolunteerApplicationModel = require('../models/volunteer-applications');
const TransactionsShelterModel = require('../models/transactions-shelter-model');
const AnimalModel = require('../models/animals-model');
const ShelterModel = require('../models/shelters-model');
const ListAnimalTypesModel = require('../models/list-animal-types-model');
const AnimalStatusesModel = require('../models/animal-status-model');
const AdoptedAnimalsModel = require('../models/adopted-animals-model');
const MedicalRecordModel = require('../models/medical-records-model');

const bcrypt = require('bcrypt');
const sequelize = require('../db'); 

class StaffService {
    
    //========== API связанные с пользователями ==========//

    // 1. Просмотр всех зарегистрированных пользователей
    async listAllUsers() {
        try {
            const users = await UserModel.findAll();
            return users;
        } catch (error) {
            console.error('Ошибка в сервисе listAllUsers:', error);
            throw error;
        }
    }

    // 2. Просмотр информации одного пользователя
    async viewUserInformation(userId) {
        try {
            const userInfo = await UserModel.findOne({where: {id: userId}});
            if(!userInfo) {
                throw new Error('Ошибка получения информации о пользователе');
            }

            return userInfo;

        } catch (error) {
            console.error('Ошибка в сервисе viewUserInformation:', error);
            throw error;
        }
    }

    // 3. Создание нового пользователя
    async createNewUser(userData) {
        try {
            const hashedPassword = await bcrypt.hash(userData.password, 10);

            const newUser = await UserModel.create({
                name: userData.name,
                surname: userData.surname,
                role: userData.role || 'user',
                age: userData.age || null,
                gender: userData.gender || null,
                region: userData.region || null,
                email: userData.email,
                password: hashedPassword,
                phone: userData.phone,
                totalAmountDonations: 0,
                displayRatingDonations: true
            })

            const userResponse = newUser.toJSON(); // преобразует объект Sequelize в обычный JS-объект
            delete userResponse.password; // удаление поля с паролем из ответа,
            
            return userResponse;

        } catch (error) {
            console.error('Ошибка в сервисе createNewUser:', error);
            throw error;
        }
    }

    // 4. Обновление данных пользователя
    async updateUserData(userId, userData) {
        try {
            // Находим сначала пользователя
            const user = await UserModel.findByPk(userId);
            if (!user) {
                throw new Error('Пользователь не найден');
            }

            // Обновляем данные
            await user.update(userData);

            // Возвращаем обновленного пользователя без пароля
            const userResponse = user.toJSON();
            delete userResponse.password;
            
            return userResponse;

        } catch (error) {
            console.error('Ошибка в сервисе updateUserData:', error);
            throw error;
        }
    }

    // 5. Удаление пользователя
    async deleteUser(userId) {
        try {
            const user = await UserModel.findByPk(userId);
            if(!user) {
                throw new Error('Пользователь не найден');
            }
            await user.destroy();

            return { 
                id: userId, 
                message: 'Пользователь удален'
            };

        } catch (error) {
            console.error('Ошибка в сервисе deleteUser: ', error);
            throw error;
        }
    }

    // 6. Просмотр списка анкет пользователей об усыновлении животного
    async listUserQuestionnairesAnimalAdoption() {
        try {
            const listQuestionnaires = await StagesAnimalAdoptionModel.findAll();
            return listQuestionnaires;
        } catch (error) {
            console.error('Ошибка в сервисе listUserQuestionnairesAnimalAdoption: ', error);
            throw error;
        }
    }

    // 7. Список заявок на волонтерство
    async listVolunteerApplications() {
        try {
            const applications = await VolunteerApplicationModel.findAll();
            return applications;
        } catch (error) {
            console.error('Ошибка в сервисе listVolunteerApplications: ', error);
            throw error;
        }
    }

    // 8. Просмотр рейтинга пользователей по пожертвованиям (список)
    async userRatingByDonations() {
        try {
            const userRating = await TransactionsShelterModel.findAll();
            return userRating;
        } catch (error) {
            console.error('Ошибка в сервисе userRatingByDonations: ', error);
            throw error;
        }
    }

    //========== API связанные с животными ==========//

    // 9. Список всех животных
    async listAllAnimals() {
        try {
            const animals = await AnimalModel.findAll();
            return animals;
        } catch (error) {
            console.error('Ошибка в сервисе listAllAnimals: ', error);
            throw error;
        }
    }

    // 10. Список всех животных, относящихся к конкретному приюту id
    async listAllAnimalsSpecificShelter(shelterId) {
        try {
            const shelter = await ShelterModel.findByPk(shelterId);
            if(!shelter) {
                throw new Error('Приют не найден');
            }

            const animals = await AnimalModel.findAll({where: {shelter_id: shelterId}});
            return animals;

        } catch (error) {
            console.error('Ошибка в сервисе listAllAnimalsSpecificShelter: ', error);
            throw error;
        }
    }

    // 11. Просмотр подробной информации о животном
    async viewDetailedInformationAnimal(animalId) {
        try {
            const animalInfo = await AnimalModel.findByPk(animalId);
            if(!animalInfo) {
                throw new Error('Животное в БД не найдено');
            }
            return animalInfo;
        } catch (error) {
            console.error('Ошибка в сервисе viewDetailedInformationAnimal: ', error);
            throw error;
        }
    }

    // 12. Добавить животного в БД к конкретному приюту
    async addAnimalDBSpecificShelter(animalData) {
        try {
            // Проверяем существование приюта
            const shelter = await ShelterModel.findByPk(animalData.shelter_id);
            if (!shelter) {
                throw new Error('Приют не найден');
            }

            // Проверяем существование типа животного
            const animalType = await ListAnimalTypesModel.findByPk(animalData.animalType_id);
            if (!animalType) {
                throw new Error('Тип животного не найден');
            }

            // Проверяем существование статуса
            const animalStatus = await AnimalStatusesModel.findByPk(animalData.animalStatus_id);
            if (!animalStatus) {
                throw new Error('Статус животного не найден');
            }

            // Создаем животное
            const newAnimal = await AnimalModel.create(animalData);
            return newAnimal;

        } catch (error) {
            console.error('Ошибка в сервисе addAnimalDBSpecificShelter:', error);
            throw error;
        }
    }

    // 13. Добавить животного в БД усыновленных животных
    async addAnimalDBAdoptedAnimals(adoptionData) {
        const transaction = await sequelize.transaction();
        
        try {
            // 1. Проверяем существование животного
            const animal = await AnimalModel.findByPk(adoptionData.animal_id, { transaction });
            if (!animal) {
                throw new Error('Животное не найдено');
            }

            // 2. Проверяем существование пользователя
            const user = await UserModel.findByPk(adoptionData.user_id, { transaction });
            if (!user) {
                throw new Error('Пользователь не найден');
            }

            // 3. Проверяем, не усыновлено ли уже животное
            const existingAdoption = await AdoptedAnimalsModel.findOne({
                where: { animal_id: adoptionData.animal_id },
                transaction
            });
            if (existingAdoption) {
                throw new Error('Животное уже усыновлено');
            }

            // 4. Создаем запись в усыновленных животных
            const adoptedAnimal = await AdoptedAnimalsModel.create({
                animal_id: adoptionData.animal_id,
                user_id: adoptionData.user_id,
                adoptedAnimalPhotosData: adoptionData.adoptedAnimalPhotosData || animal.animalPhotosData
            }, { transaction });

            // 5. Удаляем животное из основной таблицы (или меняем статус)
            await AnimalModel.destroy({
                where: { id: adoptionData.animal_id },
                transaction
            });

            // Вместо удаления:
            // await animal.update({ 
            //     animalStatus_id: 'ID_СТАТУСА_УСЫНОВЛЕН' 
            // }, { transaction });

            await transaction.commit();
            
            return adoptedAnimal;

        } catch (error) {
            await transaction.rollback();
            console.error('Ошибка в сервисе addAnimalDBAdoptedAnimals:', error);
            throw error;
        }
    }

    // 14. Обновление информации о животном
    async updateInformationAnimal(animalId, animalData) {
        try {
            const animal = await AnimalModel.findByPk(animalId);
            if(!animal) {
                throw new Error('Животное в БД не найдено');
            }

            // Проверяем существование связанных сущностей (рекомендуется)
            if (animalData.shelter_id) {
                const shelter = await ShelterModel.findByPk(animalData.shelter_id);
                if (!shelter) throw new Error('Приют не найден');
            }

            if (animalData.animalType_id) {
                const animalType = await ListAnimalTypeModel.findByPk(animalData.animalType_id);
                if (!animalType) throw new Error('Тип животного не найден');
            }

            await animal.update(animalData);
            
            const animalResponse = animal.toJSON();
            return animalResponse;

        } catch (error) {
            console.error('Ошибка в сервисе updateInformationAnimal: ', error);
            throw error;
        }
    }
    
    // 15. Удаление животного из БД
    async deleteAnimal(animalId) {
        try {
            const animal = await AnimalModel.findByPk(animalId);
            
            if(!animal) {
                throw new Error('Животное в БД не найдено');
            }
            
            await animal.destroy();

            return {
                id: animalId,
                message: 'Животное удалено из БД'
            }

        } catch (error) {
            console.error('Ошибка в сервисе deleteAnimal: ', error);
            throw error;
        }
    }

    // 16. Добавление нового типа животного
    async addNewTypeAnimal(newTypeAnimal) {
        try {
            const formattedType = newTypeAnimal.charAt(0).toUpperCase() + newTypeAnimal.slice(1).toLowerCase();
            const existingType = await ListAnimalTypesModel.findOne({
                where:{type:formattedType}
            });

            if(existingType) {
                throw new Error(`Тип ${formattedType} уже в базе существует`);
            }
            const newType = await ListAnimalTypesModel.create({
                type: formattedType
            });

            return newType;

        } catch (error) {
            console.error('Ошибка в сервисе addNewTypeAnimal:', error);
            throw error;
        }
    }

    // 17. Удаление типа животного из БД
    async deleteAnimalType(animalTypeId) {
        try {
            const animalType = await ListAnimalTypesModel.findByPk(animalTypeId);

            if(!animalType) {
                throw new Error('Тип животного не найден');
            }

            const typeAnimalName = animalType.type;

            await ListAnimalTypesModel.destroy({
                where: {id: animalTypeId}
            })

            return typeAnimalName;

        } catch (error) {
            console.error('Ошибка в сервисе deleteAnimalType:', error);
            throw error;
        }
    }

    // 18.	Список всех приютов
    async listAllShelter() {
        try {
            const shelters = await ShelterModel.findAll();
            return shelters;
        } catch (error) {
            console.error('Ошибка в сервисе listAllShelter:', error);
            throw error;
        }
    }

    // 19. Добавление нового приюта
    async addNewShelter(shelterData) {
        try {
            const existingShelter = await ShelterModel.findOne({
                where: { email: shelterData.email }
            });
            
            if (existingShelter) {
                throw new Error('Приют с таким email уже существует');
            }

            // Создаем новый приют
            const newShelter = await ShelterModel.create(shelterData);
            return newShelter;

        } catch (error) {
            console.error('Ошибка в сервисе addNewShelter:', error);
            throw error;
        }
    }

    // 20. Удаление медицинской записи
    async deleteMedicalRecord(recordId, currentUserId, currentUserRole) {
        try {
            const record = await MedicalRecordModel.findByPk(recordId);
            if (!record) {
                throw new Error('Медицинская запись не найдена');
            }

            // Проверка прав: если пользователь не админ и не менеджер, проверяем, что он автор записи
            if (!['admin', 'manager'].includes(currentUserRole)) {
                if (record.user_id !== currentUserId) {
                    throw new Error('Недостаточно прав для удаления этой записи');
                }
            }

            await record.destroy();
            return { id: recordId };

        } catch (error) {
            console.error('Ошибка в сервисе deleteMedicalRecord:', error);
            throw error;
        }
    }

    // 21. Редактирование медицинской записи
    async editMedicalRecord(recordId, currentUserId, currentUserRole, updateData) {
        try {
            const record = await MedicalRecordModel.findByPk(recordId);
            if(!record) {
                throw new Error('Медицинская запись не найдена');
            }

            // Проверка прав: если пользователь не админ и не менеджер, проверяем, что он автор записи
            if(!['admin', 'manager'].includes(currentUserRole)) {
                if(record.user_id !== currentUserId) {
                    throw new Error('Недостаточно прав для редактирования этой записи');
                }
            }

            // Обновляем запись
            await record.update(updateData);

            // Возвращаем обновленную запись
            return record;

        } catch (error) {
            console.error('Ошибка в сервисе editMedicalRecord:', error);
            throw error;
        }
    }

    // 22. Получить все медицинские записи
    async listAllMedicalRecords() {
        try {
            const medicalRecords = await MedicalRecordModel.findAll();
            return medicalRecords;
        } catch (error) {
            console.error('Ошибка в сервисе listAllMedicalRecords:', error);
        }
    }
}

module.exports = new StaffService;