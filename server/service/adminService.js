const UserModel = require('../models/user-model');
const StagesAnimalAdoptionModel = require('../models/stages-animal-adoption-model');
const VolunteerApplication = require('../models/volunteer-applications');
const TransactionsShelter = require('../models/transactions-shelter-model');
const Animal = require('../models/animals-model');
const Shelter = require('../models/shelters-model');

const bcrypt = require('bcrypt');

class AdminService {
    
    //========== API связанные с пользователями ==========//

    // 1. Просмотр всех зарегистрированных пользователей
    async listAllUsers() {
        const users = await UserModel.findAll();
        return users;
    }

    // 2. Просмотр информации одного пользователя
    async viewUserInformation(userId) {
        const userInfo = await UserModel.findOne({where: {id: userId}});
        return userInfo;
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
            console.error('Ошибка в сервисе по созданию пользователя:', error);
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
            console.error('Ошибка в сервисе:', error);
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
            await user.destroy(user);

            return { 
                id: userId, 
                message: 'User deleted' 
            };

        } catch (error) {
            console.error('Ошибка в сервисе: ', error);
            throw error;
        }
    }

    // 6. Просмотр списка анкет пользователей об усыновлении животного
    async listUserQuestionnairesAnimalAdoption() {
        try {
            const listQuestionnaires = await StagesAnimalAdoptionModel.findAll();
            return listQuestionnaires;
        } catch (error) {
            console.error('Ошибка в сервисе: ', error);
            throw error;
        }
    }

    // 7. Список заявок на волонтерство
    async listVolunteerApplications() {
        try {
            const applications = await VolunteerApplication.findAll();
            return applications;
        } catch (error) {
            console.error('Ошибка в сервисе: ', error);
            throw error;
        }
    }

    // 8. Просмотр рейтинга пользователей по пожертвованиям (список)
    async userRatingByDonations() {
        try {
            const userRating = await TransactionsShelter.findAll();
            return userRating;
        } catch (error) {
            console.error('Ошибка в сервисе: ', error);
            throw error;
        }
    }

    //========== API связанные с животными ==========//

    // 9. Список всех животных
    async listAllAnimals() {
        try {
            const animals = await Animal.findAll();
            return animals;
        } catch (error) {
            console.error('Ошибка в сервисе: ', error);
            throw error;
        }
    }

    // 10. Список всех животных, относящихся к конкретному приюту id
    async listAllAnimalsSpecificShelter(shelterId) {
        try {
            const shelter = await Shelter.findByPk(shelterId);
            if(!shelter) {
                throw new Error('Приют не найден');
            }

            const animals = await Animal.findAll({where: {shelter_id: shelterId}});
            return animals;

        } catch (error) {
            console.error('Ошибка в сервисе: ', error);
            throw error;
        }
    }

    // 11. Просмотр подробной информации о животном
    async viewDetailedInformationAnimal(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка получения подробной информации о животном'});
        }
    }








    
    // 12. Добавить животного в БД к конкретному приюту по id
    async addAnimalDBSpecificShelter(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка добавления животного в БД к приюту № ... '});
        }
    }

    // 13. Добавить животного в БД усыновленных животных
    async addAnimalDBAdoptedAnimals(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка добавления животного в БД к усыновленным животным'});
        }
    }

    // 14. Обновление информации о животном
    async updateInformationAnimal(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка обновления данных животного'});
        }
    }
    
    // 15. Удаление животного из БД
    async deleteAnimal(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка удаления животного из БД'});
        }
    }

    // 16. Добавление нового типа животного
    async addNewTypeAnimal(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка добавления нового типа животного в БД'});
        }
    }

    // 17. Удаление типа животного из БД
    async deleteAnimalType(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка удаления типа животного из БД'});
        }
    }

    //========== Прочие API ==========//

    // 18.	Пожертвовать денег в фонд
    async donateMoneyShelter(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка отправки средств приюту'});
        }
    }

    // 19.	Пожертвовать денег животному по id
    async donateMoneyAnimal(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка отправки средств животному'});
        }
    }

    // 20.	Список всех приютов
    async listAllShelter(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка получения списка всех приютов'});
        }
    }

    // 21. Добавление нового приюта
    async addNewShelter(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка добавления нового приюта'});
        }
    }
}

module.exports = new AdminService;