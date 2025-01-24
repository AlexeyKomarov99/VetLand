class AdminController {
    
    //========== API связанные с пользователями ==========//

    // 1. Просмотр всех зарегистрированных пользователей
    async listAllUsers(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка получения списка всех заругистрированных пользователей'});
        }
    }

    // 2. Просмотр информации одного пользователя
    async viewUserInformation(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка получения подробной информации одного пользователя'});
        }
    }

    // 3. Создание нового пользователя
    async createNewUser(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка создания нового пользователя'});
        }
    }

    // 4. Обновление данных пользователя
    async updateUserData(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка обновления пользовательских данных'});
        }
    }

    // 5. Удаление пользователя
    async deleteUser(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка удаления пользователя'});
        }
    }

    // 6. Просмотр списка анкет пользователей об усыновлении животного
    async listUserQuestionnairesAnimalAdoption(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка получения списка пользовательских анкет на усыновление животного'});
        }
    }

    // 7. Список заявок на волонтерство
    async listVolunteerApplications(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка получения списка завок на волонтерство'});
        }
    }

    // 8. Просмотр рейтинга пользователей по пожертвованиям
    async userRatingByDonations(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка получения данных о рейтинге пользователей по пожертвованиям'});
        }
    }

    //========== API связанные с животными ==========//

    // 9. Список всех животных
    async listAllAnimals(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка получения списка всех животных'});
        }
    }

    // 10. Список всех животных, относящихся к конкретному приюту id
    async listAllAnimalsSpecificShelter(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка получения списка всех животных относящихся к приюту № ...'});
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