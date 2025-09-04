const AdminService = require('../service/adminService');

class AdminController {
    
    //========== API связанные с пользователями ==========//

    // 1. Просмотр всех зарегистрированных пользователей
    async listAllUsers(req, res) {
        try {
            const users = await AdminService.listAllUsers();
            if(users.length === 0) {
                return res.status(200).json({message: 'Список зарегистрированных пользователей пуст'});
            }
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({
                message: 'Ошибка получения списка всех заругистрированных пользователей'
            });
        }
    }

    // 2. Просмотр информации одного пользователя
    async viewUserInformation(req, res) {
        try {
            const userId = req.params.id;
            const userInfo = await AdminService.viewUserInformation(userId);
            if(!userInfo) {
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
            const { name, surname, role, age, gender, region, email, password, phone } = req.body;
            
            // Валидация обязательных полей
            if (!name || !surname || !email || !password || !phone) {
                return res.status(400).json({ 
                    message: 'Обязательные поля: name, surname, email, password, phone' 
                });
            }

            // Проверка валидности email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ 
                    message: 'Некорректный формат email' 
                });
            }

            // Проверка валидности роли
            const validRoles = ['user', 'admin', 'manager', 'doctor', 'volunteer'];
            if (role && !validRoles.includes(role)) {
                return res.status(400).json({ 
                    message: `Некорректная роль. Допустимые значения: ${validRoles.join(', ')}` 
                });
            }

            const newUser = await AdminService.createNewUser({
                name,
                surname,
                role,
                age,
                gender,
                region,
                email,
                password,
                phone
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
            const userId = req.params.id;
            const userData = req.body;
            const updateUserInfo = await AdminService.updateUserData(userId, userData);

            return res.status(200).json({ // 200 вместо 201 (201 для создания)
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
            const userId = req.params.id;
            const deletedUser = await AdminService.deleteUser(userId);

            return res.status(204).json({
                message: 'Пользователь успешно удален!',
                deletedUser: deletedUser
            })
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
            const questionnaires = await AdminService.listUserQuestionnairesAnimalAdoption();

            return res.status(200).json({
                message: questionnaires.length === 0
                    ? 'Список анкет об усыновлении пуст!' 
                    : 'Список анкет пользователей об усыновлении животного',
                count: questionnaires.length,
                questionnaires
            })
        } catch (error) {
            return res.status(500).json({message: 'Ошибка получения списка пользовательских анкет на усыновление животного'});
        }
    }

    // 7. Список заявок на волонтерство
    async listVolunteerApplications(req, res) {
        try {
            const applications = await AdminService.listVolunteerApplications();
            return res.status(200).json({
                message: applications.length === 0
                    ? 'Список заявок на волонтерство пуст!'
                    : 'Список заявок на волонтерство',
                count: applications.length,
                applications
            })
        } catch (error) {
            return res.status(500).json({message: 'Ошибка получения списка завок на волонтерство'});
        }
    }

    // 8. Просмотр рейтинга пользователей по пожертвованиям (список)
    async userRatingByDonations(req, res) {
        try {
            const userRating = await AdminService.userRatingByDonations();
            return res.status(200).json({
                message: userRating.length === 0
                    ? 'Рейтинг пожертвований пуст!'
                    : 'Рейтинг пользователей пожертвований ветеринарной клинике',
                count: userRating.length,
                userRating
            })
        } catch (error) {
            return req.status(500).json({message: 'Ошибка получения данных о рейтинге пользователей по пожертвованиям'});
        }
    }

    //========== API связанные с животными ==========//

    // 9. Список всех животных
    async listAllAnimals(req, res) {
        try {
            const animals = await AdminService.listAllAnimals();
            return res.status(200).json({
                message: animals.length === 0
                    ? 'Список животных пуст!'
                    : 'Список животных ветеринарной клиники Vetland',
                count: animals.length,
                animals
            })
        } catch (error) {
            return res.status(500).json({message: 'Ошибка получения списка всех животных'});
        }
    }

    // 10. Список всех животных, относящихся к конкретному приюту id
    async listAllAnimalsSpecificShelter(req, res) {
        try {
            const shelterId = req.params.id;
            const animals = await AdminService.listAllAnimalsSpecificShelter(shelterId);
            return res.status(200).json({
                message: animals.length === 0
                    ? 'Список животных пуст!'
                    : 'Список животных ветеринарной клиники Vetland одного из филиалов',
                count: animals.length,
                animals
            })
        } catch (error) {
            return res.status(500).json({message: 'Ошибка получения списка всех животных текущего филиала'});
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

module.exports = new AdminController;